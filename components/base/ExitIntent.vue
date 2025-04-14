<script lang="ts" setup>
interface Body {
  audience: 'lead' | 'newsletter'
  data: {
    name: string
    email: string
    title?: string
  }
}

const { validateInput } = useValidateInput()

// @ts-ignore
defineEmits(['closeModal'])


const list = [
  'Data-driven optimizations that increased conversion rates',
  'Proven CRO strategies with measurable results',
  'Real-world success stories of revenue growth',
];
const logos = [
  'microsoft.svg', 'comodo.svg', 'samcart.svg', 'macPaw.svg', 'reckitt.svg'
];

const form = reactive({
  name: '',
  url: '',
  email: '',
  metadata: {
    page: location.href,
    form_title: 'Exit intent popup',
    id: 'exit_intent_popup'
  }
});
const error = reactive({
  name: '',
  url: '',
  email: '',
  agree: false
});

const { closeModal } = useModal();
const toast = useToast()
const gtm = useGtm()
const mailchimp = useMailchimp()
const excel = useExcel()
const telegramBot = useTelegram()
const mailer = useMailer()

const step = ref(1);
const isAgree = ref(true);
const isSubmitted = ref(false);
const isLoading = ref(false)

async function subscribeNewsletter() {
  error.name = validateInput(form.name, 'name');
  error.email = validateInput(form.email, 'email');

  if (error.name || error.email) return

  if (!isAgree.value) {
    error.agree = true;
    toast.error('Please agree to the terms');
    return;
  }

  isLoading.value = true;
  const toastLoading = toast.loading('Submitting your data...');

  gtm?.trackEvent({
    event: 'gtm_hubspot_newsletter',
    data: {...toRaw(form)}
  })

  const body: Body = {
    audience: 'newsletter',
    data: { ...form, title: 'Exit intent popup' }
  }

  telegramBot.send({
    name: form.name,
    email: form.email
  })
  excel.save(body)
  await mailchimp.save(body)

  isLoading.value = false;

  if (mailchimp.error.value) {
    toast.update(toastLoading, {
      type: 'error',
      render: 'Error submitting data',
      autoClose: true,
      isLoading: false
    });

    return;
  }

  toast.update(toastLoading, {
    type: 'success',
    render: 'Data submitted successfully',
    autoClose: true,
    isLoading: false
  });

  isSubmitted.value = true;
}

async function saveLead() {
  error.url = validateInput(form.url, 'url');

  if (error.url) {
    toast.error('Please enter a valid URL');
    return;
  }

  const toastLoading = toast.loading('Submitting your data...');
  isLoading.value = true;

  gtm?.trackEvent({
    event: 'gtm_hubspot',
    data:  { ...toRaw(form) }
  })

  const body: Body = {
    audience: 'lead',
    data: { ...form, title: 'Exit intent popup' }
  }

  mailchimp.save(body)
  mailer.send(form)
  await excel.save(body)

  isLoading.value = false;

  if (excel.error.value) {
    toast.update(toastLoading, {
      type: 'error',
      render: 'Error submitting data',
      autoClose: true,
      isLoading: false
    });

    return;
  }

  toast.update(toastLoading, {
    type: 'success',
    render: 'Data submitted successfully',
    autoClose: true,
    isLoading: false
  });

  window.open('https://meetings.hubspot.com/ihor-sokolov?firstName=' + form.name + '&email=' + form.email, '_blank');

  step.value = 3;
}
</script>

<template>
  <div
    class="modal modal_exit-intent"
    :class="{modal_lead: step === 2 && isSubmitted}"
  >
    <div
      v-if="isSubmitted"
      data-aos="zoom-in"
      class="success modal__inner flex-center bg-purple_dark"
    >
      <img
        class="logo success__logo"
        src="img/logo.svg"
        alt="logo"
        height="38"
      />

      <button
        class="success__close modal__close button button_flat"
        @click="$emit('closeModal')"
      >
        <Icon
          name="solar:close-circle-linear"
          size="36"
          class="color-white"
        ></Icon>
      </button>

      <div
        v-if="step === 2"
        class="lead"
      >
        <div class="lead__subtitle subtitle-1">On its way to your inbox!</div>

        <h2 class="lead__title title-1">
          Get a <span class="color-yellow">FREE CRO audit</span> with a plan to
          boost your conversion rates <span class="color-yellow">by 10%</span>
        </h2>

        <div class="lead__descr subtitle-2 border-decor_top">
          Our co-founder, Gleb Hodorovskiy, will review your website, prepare a
          CRO audit, and present it during a call. You'll
          <span class="color-yellow">get a 10% uplift plan</span> based on data
          from <span class="color-yellow">4,200+ A/B tests</span> for clients
          like Microsoft.
        </div>

        <div class="lead__form flex">
          <BaseInput
            v-model="form.url"
            class="lead__input"
            required
            placeholder="Type your site's URL"
            icon="fa6-solid:link"
            :error="error.url"
            @click="error.url = ''"
            id="exit-intent_url"
          />
          <!-- :error="error" -->
          <!-- @click="error = ''" -->

          <button
            :disabled="!form.url || isLoading"
            data-related="hero_url"
            class="button button_yellow lead__button"
            @click="saveLead"
          >
            Get a FREE AUDIT
          </button>
        </div>
      </div>

      <div
        v-if="step === 3"
        class="success__info text-center"
      >
        <div class="success__title title-1">Thank You!</div>

        <div class="success__subtitle subtitle-1">
          We have received your request and will be in touch shortly
        </div>

        <!-- TODO remove; -->
        <!-- <div class="success__caption subtitle-3">
          Our team will review your details and get back to you shortly
        </div> -->

        <button
          class="success__button button button_yellow subtitle-3"
          @click="closeModal(); $emit('closeModal')"
        >
          Return to Homepage
        </button>
      </div>
    </div>

    <div
      v-else-if="step !== 3"
      data-aos="zoom-in"
      class="modal__inner"
    >
      <div
        class="info bg-purple_dark"
        :class="{info_hide: step !== 1}"
      >
        <div class="info__head flex-between">
          <img
            class="info__logo"
            src="img/logo.svg"
            alt="logo"
            height="38"
          />

          <img
            class="info__clutch"
            src="img/clutch-modal.svg"
            height="60"
            alt="clutch"
          />

          <button
            class="info__close modal__close button button_flat"
            @click="$emit('closeModal')"
          >
            <Icon
              name="solar:close-circle-linear"
              size="36"
              class="color-white"
            ></Icon>
          </button>
        </div>

        <div class="info__body">
          <h2 class="info__title title-2">
            Before you leave, <br />
            get our top
            <span class="color-yellow">25&nbsp;CRO Case&nbsp;Studies</span>
          </h2>

          <h3 class="info__subtitle subtitle-1">
            In these case studies you will discover:
          </h3>

          <ul
            v-if="list.length"
            class="info__list list-brand list-brand_yellow"
          >
            <li
              v-for="(item, index) in list"
              :key="index"
              class="list-brand__item"
            >
              {{ item }}
            </li>
          </ul>

          <button
            v-if="step === 1"
            class="info__btn button button_yellow subtitle-3"
            @click="step = 2"
          >
            Get 25 CRO case studies >
          </button>
        </div>

        <div class="info__footer flex-center">
          <img
            v-for="logo of logos"
            :key="logo"
            :src="`/images/logo/${logo}`"
            alt=""
          />
        </div>
      </div>

      <div
        v-if="step === 1"
        class="intro"
      >
        <button
          class="modal__close button button_flat"
          @click="$emit('closeModal')"
        >
          <Icon
            name="solar:close-circle-linear"
            size="36"
            mode="css"
            class="color-purple"
          ></Icon>
        </button>
        <div class="intro__caption subtitle-3 bg--gradient text-center">
          25 A/B test results with <span class="color-yellow">9-86%</span> total
          conversion rate <br />
          <span class="color-yellow">growth</span> from a single experiment
        </div>
      </div>

      <div
        class="form__wrap bg-white"
        v-else
      >
        <img
          class="logo form__logo"
          src="img/logo.svg"
          alt="logo"
          height="28"
        />

        <button
          class="modal__close button button_flat"
          @click="$emit('closeModal')"
        >
          <Icon
            name="solar:close-circle-linear"
            size="36"
            mode="css"
            class="color-purple"
          ></Icon>
        </button>

        <h3 class="form__subtitle subtitle-1">
          Enter your details to receive an&nbsp;email
        </h3>

        <div
          class="form"
          v-auto-animate
        >
          <BaseInput
            v-model="form.name"
            small
            label="Full name"
            required
            placeholder="Your full name"
            icon="fa6-solid:user"
            :error="error.name"
            @click="error.name = ''"
            id="exit-intent_name"
          />

          <BaseInput
            v-model="form.email"
            small
            label="Business email"
            required
            placeholder="Business email"
            icon="fa6-solid:envelope"
            :error="error.email"
            @click="error.email = ''"
            id="exit-intent_email"
          />
        </div>

        <button
          :disabled="!form.name || !form.email || isLoading"
          class="form__submit button button_yellow subtitle-3"
          :data-step="step"
          @click="subscribeNewsletter"
        >
          Get case studies now
        </button>

        <div
          class="agree text flex"
          :class="{active: isAgree, error: error.agree}"
          @click="isAgree = !isAgree; error.agree = false"
        >
          By submitting this form, you agree to receive the requested
          information, as well as occasional communications regarding
          ConversionRate Store products, services, and events. You can
          unsubscribe at any time. To read more visit privacy policy. Your
          personal data will be processed in accordance with our privacy policy.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  overflow-y: auto;
  backdrop-filter: blur(5px);
  background: rgba(0,0,0,.4);
  max-height: 100%;
  width: 100%;
  @media(min-width: 1680px) {
    padding: 20px;
  }
  // padding: 15px;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }

  &__inner {
    position: relative;
    background: #fff;
    display: flex;
    // max-width: 380px;
    width: 100%;
    min-height: 100%;
    margin: auto;
    transition: transform 0.5s 0.3s;
    @media(min-width: 1680px) {
      max-width: 1500px;
      min-height: auto;
    }
  }

  &__close {
    position: absolute;
    right: 40px;
    top: 24px;
    @media(max-width: $sm) {
      width: 36px;
      height: 36px;
      top: 20px;
      right: 20px;
    }
    @media(hover: hover) {
      &:hover {
        transform: rotate(90deg);
      }
    }
  }
}

.info {
  display: flex;
  flex-flow: column;
  gap: 40px;
  position: relative;
  flex-grow: 1;
  padding: 60px 60px 40px;
  min-width: 0;
  @media(max-width: 1250px) {
    padding: 30px;
  }
  @media(max-width: $md) {
    padding: 24px 20px;
    &_hide {
      display: none;
    }
  }
  & > * {
      position: relative;
      z-index: 1;
    }
  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: url('img/bg-pixel-left.png') bottom left no-repeat;
    background-size: 70%;
    mix-blend-mode: lighten;
    @media(max-width: $md) {
      // display: none;
    }
    @media(max-width: $sm) {
      background-size: 120%;
    }
  }

  &__body {
    @media(max-width: $sm) {
      display: flex;
      flex-flow: column;
      flex-grow: 1;
    }
  }

  &__logo {
    @media(max-width: $sm) {
      max-width: 135px;
    }
  }

  &__clutch {
    @media(max-width: $sm) {
      display: none;
    }
  }

  &__close {
    display: none;
    @media(max-width: $sm) {
      display: block;
      position: static;
    }
  }

  &__title {
    max-width: 590px;
    @media(max-width: $md) {
      max-width: 100%;
      font-size: 30px;
    }
  }

  &__subtitle {
    margin-top: 30px;
    @media(max-width: $sm) {
      margin-top: 16px;
      font-size: 20px;
    }
  }

  &__list {
    margin-top: 30px;
    line-height: 26px;
    @media(max-width: $sm) {
      gap: 16px;
      margin-bottom: 24px;
    }
  }

  &__btn {
    min-height: 60px;
    margin-top: 24px;
    max-width: 385px;
    width: 100%;
    @media(max-width: $sm) {
      margin-top: auto;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  &__footer {
    margin-top: auto;
    border-radius: 20px;
    border: 2px solid $purple;
    background: $purple;
    padding: 16px;
    gap: 20px;
    justify-content: space-evenly;
    @media(max-width: $sm) {
      display: none;
    }
    img {
      min-width: 0;
      max-height: 40px;
      max-width: 130px;
    }
  }
}

.intro {
  position: relative;
  max-width: 628px;
  width: 100%;
  background: url('img/bg-exitIntent.jpg') center no-repeat;
  background-size: cover;
  background-position: right;
  @media(max-width: 1250px) {
    max-width: 50%;
    br {
      display: none;
    }
  }
  @media(max-width: $md) {
    display: none;
  }
  &__caption {
    position: absolute;
    left: 40px;
    bottom: 40px;
    right: 40px;
    padding: 14px 16px;
    border-radius: 20px;
    @media(max-width: 1250px) {
      bottom: 30px;
    }
  }
}

.form {
  min-width: 0;
  display: grid;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 24px;
  @media(max-width: $sm) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  &__wrap {
    position: relative;
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    max-width: 628px;
    width: 100%;
    padding: 80px 100px 60px;
    @media(max-width: 1250px) {
      padding: 80px 30px 30px;
      max-width: 50%;
    }
    @media(max-width: $md) {
      max-width: 100%;
    }
    @media(max-width: $sm) {
      padding: 72px 20px 24px;
    }
  }

  &__logo {
    display: none;
    position: absolute;
    top: 24px;
    left: 20px;
    right: 0;
    filter: invert(100%) sepia(7%) saturate(29%) hue-rotate(253deg) brightness(101%) contrast(106%);
    transition: .3s;
    @media(max-width: $md) {
      display: block;
    }
  }

  &__subtitle {
    @media(max-width: $sm) {
      line-height: 32px;
    }
  }

  &__submit {
    margin-top: auto;
    height: 60px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
  }
}

.agree {
  position: relative;
  color: $font-light;
  font-size: 14px;
  line-height: 20px;
  margin-top: 24px;
  cursor: pointer;
  padding-left: 30px;
  @media(max-width: $sm) {
    margin-top: 16px;
    font-size: 12px;
    line-height: 18px;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1px solid $border;
    transition: .3s;
    background-color: #fff;
  }
  &:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 6px;
    width: 8px;
    height: 4px;
    border-radius: 2px;
    transition: .3s;
    transform: scale(0);
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
  }
  &.error:before {
    border-color: red;
  }
  &.active:before {
    background-color: $purple;
    border-color: $purple;
  }
  &.active:after {
    transform: scale(1) rotate(-45deg);
  }
}

.success {
  background: $bg--purple-dark;
  &:before, &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: url('img/bg-pixel-left.png') bottom left no-repeat;
    background-size: 50%;
    mix-blend-mode: lighten;
    @media(max-width: $md) {
      display: none;
    }
  }
  &:after {
    transform: rotate(180deg);
  }
  .modal_lead & {
    @media(max-width: $sm) {
      align-items: normal;
    }
  }
  &__logo {
    position: absolute;
    top: 24px;
    left: 40px;
    @media(max-width: $md) {
      top: 24px;
      left: 20px;
    }
  }
  &__info {
    padding: 60px 20px;
    max-width: 520px;
    width: 100%;
  }
  &__title {
    @media(max-width: $sm) {
      font-size: 30px;
      line-height: 38px;
    }
  }
  &__subtitle {
    margin-top: 24px;
    @media(max-width: $sm) {
      margin-top: 12px;
    }
  }
  &__caption {
    margin-top: 16px;
    @media(max-width: $sm) {
      margin: 12px auto 0;
      font-size: 16px;
      line-height: 26px;
      max-width: 260px;
    }
  }
  &__button {
    margin-top: 60px;
    min-height: 60px;
    @media(max-width: $sm) {
      position: fixed;
      left: 20px;
      right: 20px;
      bottom: 20px;
      margin-top: auto;
    }
  }
}

.lead {
  max-width: 695px;
  padding: 60px 20px;
  width: 100%;
  @media(max-width: $sm) {
    padding-top: 100px;
    padding-bottom: 20px;
    display: flex;
    flex-flow: column;
  }
  &__subtitle {
    @media(max-width: $sm) {
      font-size: 20px;
    }
  }
  &__title {
    margin-top: 24px;
    @media(max-width: $sm) {
      font-size: 30px;
      margin-top: 16px;
      line-height: 38px;
    }
  }
  &__descr {
    margin-top: 24px;
    padding-top: 25px;
    @media(max-width: $sm) {
      margin-top: 20px;
      margin-bottom: 24px;
      padding-top: 21px;
      font-size: 16px;
      line-height: 26px;
    }
  }
  &__input {
    min-height: 60px;
  }
  &__button {
    min-height: 60px;
  }
  &__form {
    display: flex;
    gap: 12px;
    margin-top: 40px;
    @media(max-width: $sm) {
      flex-flow: column;
      gap: 20px;
      margin-top: auto;
    }
  }
}

.logo {
  @media(max-width: $sm) {
    height: 28px;
  }
}
</style>
