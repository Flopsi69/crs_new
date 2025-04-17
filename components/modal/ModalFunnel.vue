<script lang="ts" setup>
const { modalTarget, closeModal } = useModal();

interface Body {
  audience: 'lead' | 'prelead'
  data: {
    name: string
    email: string
    title?: string
  }
}

// @ts-ignore
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  url: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  info: {
    type: Object,
    default: {
      title: 'Fill out the form to get your free CRO consultation',
      subtitle: '',
      list: [],
      formTitle: 'Schedule Your Results Discussion',
      cta: 'Submit',
      note: 'If you are not sure what your current metrics are, don’t worry, we will help you find them and estimate the uplift',
      isGoal: false
    }
  }
});

const logos = [
  'microsoft.svg', 'comodo.svg', 'samcart.svg', 'macPaw.svg', 'reckitt.svg'
];

const form = reactive({
  name: props.name || '',
  url: props.url || '',
  email: props.email || '',
  annual_revenue: '',
  hear_about_us: '',
  project_goal: '',
  metadata: {
    page: location.href,
    form_title: props.info.title || '',
    id: props.id || ''
  }
});
const error = reactive({
  name: '',
  url: '',
  email: '',
  agree: false
});

const toast = useToast()
const gtm = useGtm()
const mailchimp = useMailchimp()
const excel = useExcel()
const mailer = useMailer()

const step = ref(1);
const isAgree = ref(true);
const isLoading = ref(false)

function goToNextStep() {
  error.name = validateInput(form.name, 'name');
  error.url = validateInput(form.url, 'url');
  error.email = validateInput(form.email, 'email');

  if (step.value === 1) {
    if (error.name || error.url || error.email) return

    savePrelid();

    step.value = 2;
    return;
  }

  if (step.value === 2) {
    if (!isAgree.value) {
      error.agree = true;
      toast.error('Please agree to the terms');
      return;
    }

    saveLead();
  }
}

onMounted(() => {
  setTimeout(() => {
    gtm?.trackEvent({
      event: 'popup_funnel_open'
    })
  }, 7000);
})

async function savePrelid() {
  document.querySelector('#crs_survey')?.remove();

  gtm?.trackEvent({
    event: 'gtm_hubspot',
    data:  { ...toRaw(form) }
  })

  const body: Body = {
    audience: 'prelead',
    data: { ...form, title: props.info.title }
  }

  mailer.send(form, true)
  await excel.save(body)
}

async function saveLead() {
  const toastLoading = toast.loading('Submitting your data...');

  isLoading.value = true;

  gtm?.trackEvent({
    event: 'gtm_hubspot',
    data:  { ...toRaw(form) }
  })

  const body: Body = {
    audience: 'lead',
    data: { ...form, title: props.info.title }
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

  window.open(`https://meetings.hubspot.com/gleb-hodorovskiy/schedule-call?firstName=${form.name}}&email=${form.email}`, '_blank');
  // TODO return
  // window.open('https://meetings.hubspot.com/ihor-sokolov?firstName=' + form.name + '&email=' + form.email, '_blank');

  modalTarget.value = 'success';
}
</script>

<template>
  <div
    data-aos="zoom-in"
    class="modal__inner"
  >
    <div class="info bg-purple_dark">
      <div class="info__head flex-between">
        <img
          class="info__logo"
          src="img/logo.svg"
          alt="logo"
          height="38"
        />

        <img
          src="img/clutch-modal.svg"
          height="60"
          alt="clutch"
        />
      </div>

      <div class="info__body">
        <h2 class="info__title title-2">
          {{ info.title }}
        </h2>

        <h3
          v-if="info?.subtitle"
          class="info__subtitle subtitle-1"
        >
          {{ info.subtitle }}
        </h3>

        <ul
          v-if="info?.list?.length"
          class="info__list list-brand list-brand_yellow"
        >
          <li
            v-for="(item, index) in info.list"
            :key="index"
            class="list-brand__item"
          >
            {{ item }}
          </li>
        </ul>
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

    <div class="form__wrap bg-white">
      <BasePill
        v-if="step === 2"
        @click="step = 1"
        class="form__back"
        back
      >
        Back
      </BasePill>

      <img
        class="logo form__logo"
        src="img/logo.svg"
        alt="logo"
        height="28"
      />

      <button
        class="modal__close button button_flat"
        @click="closeModal"
      >
        <Icon
          name="solar:close-circle-linear"
          size="36"
          mode="css"
          class="color-purple"
        ></Icon>
      </button>

      <h2 class="form__title subtitle-1">
        {{ info.title }}
      </h2>

      <h3 class="form__subtitle subtitle-1">{{ info?.formTitle || '-' }}</h3>

      <div
        class="form"
        v-auto-animate
      >
        <div
          v-if="step == 1"
          key="firstStep"
          class="form__step form__step--first"
          data-step="1"
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
            id="modal_name"
          />

          <BaseInput
            v-model="form.url"
            small
            label="Company URL"
            required
            placeholder="Company URL"
            icon="fa6-solid:link"
            :error="error.url"
            @click="error.url = ''"
            id="modal_url"
          />

          <BaseInput
            v-model="form.email"
            small
            label="Business email"
            required
            type="email"
            placeholder="Business email"
            icon="fa6-solid:envelope"
            :error="error.email"
            @click="error.email = ''"
            id="modal_email"
          />
        </div>
        <div
          v-else
          key="secondStep"
          class="form__step form__step--second"
          data-step="2"
        >
          <BaseInput
            v-if="!info.isGoal"
            v-model="form.annual_revenue"
            small
            label="Annual Revenue"
            placeholder="Annual Revenue"
            icon="fa6-solid:coins"
            :items="['less than $250,000', '$250,000 - $1 million', '$1 million - $10 million', 'more than $10 million', 'I prefer not to say']"
            id="annual_revenue"
          />

          <BaseInput
            v-model="form.hear_about_us"
            small
            label="How did you hear about us?"
            placeholder="How did you hear about us?"
            icon="fa6-solid:people-group"
            :items="['Somebody recommended us', 'Organic search', 'Google Ads', 'Other']"
            id="hear_about_us"
          />

          <BaseInput
            v-if="info.isGoal"
            v-model="form.project_goal"
            small
            label="CRO project goal"
            placeholder="CRO project goal"
            icon="octicon:goal-16"
            id="project_goal"
          />

          <!-- <div
              v-if="info?.note"
              class="note text flex"
            >
              <Icon
                class="color-purple note__icon"
                name="fa-solid:info-circle"
                size="14"
              />
              {{ info.note }}
            </div> -->

          <div
            class="agree text flex"
            :class="{active: isAgree, error: error.agree}"
            @click="isAgree = !isAgree; error.agree = false"
          >
            By submitting this form, you agree to receive the requested
            information, as well as occasional communications regarding
            ConversionRate Store products, services, and events. You can
            unsubscribe at any time. To read more visit privacy policy. Your
            personal data will be processed in accordance with our privacy
            policy.
          </div>
        </div>
      </div>

      <button
        :disabled="!form.name || !form.url || !form.email || isLoading"
        class="form__submit button button_yellow subtitle-3"
        :data-step="step"
        @click="goToNextStep"
      >
        {{ step === 1 ?  'Continue' : info?.cta }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-flow: column;
  gap: 40px;
  position: relative;
  flex-grow: 1;
  padding: 60px;
  min-width: 0;
  @media(max-width: 1250px) {
    padding: 30px;
  }
  @media(max-width: $md) {
    display: none;
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
      display: none;
    }
  }

  &__title {
    max-width: 590px;
  }

  &__subtitle {
    margin-top: 30px;
  }

  &__list {
    margin-top: 30px;
  }

  &__footer {
    margin-top: auto;
    border-radius: 20px;
    border: 2px solid $purple;
    background: $purple;
    padding: 16px;
    gap: 20px;
    justify-content: space-evenly;
    img {
      min-width: 0;
      max-height: 40px;
      max-width: 130px;
    }
  }
}

.form {
  min-width: 0;
  &__wrap {
    position: relative;
    display: flex;
    flex-flow: column;
    gap: 32px;
    flex-grow: 1;
    max-width: 628px;
    width: 100%;
    padding: 80px 100px 60px;
    @media(max-width: 1250px) {
      padding: 80px 30px 30px;
    }
    @media(max-width: $md) {
      max-width: 100%;
    }
    @media(max-width: $sm) {
      padding: 80px 20px 24px;
      gap: 16px;
    }
  }

  &__step {
    display: grid;
    gap: 16px;
  }

  &__back{
    position: absolute;
    left: 20px;
    top: 24px;
    padding: 2px 8px;
    border: none;
    @media(max-width: $sm) {
      left: 10px;
      top: 18px;
    }
    & + .form__logo {
      left: 50%;
      transform: translateX(-50%);
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

  &__title {
    display: none;
    line-height: 32px;
    @media(max-width: $md) {
      display: block;
    }
  }

  &__subtitle {
    @media(max-width: $sm) {
      font-size: 18px;
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

.note {
  border-radius: 20px;
  background: $bg--purple-light;
  font-size: 14px;
  padding: 8px 12px;
  gap: 8px;
  color: $font-secondary;
  &__icon {
    flex-shrink: 0;
    margin-top: 3px;
  }
}

.agree {
  position: relative;
  color: $font-light;
  font-size: 14px;
  line-height: 20px;
  margin-top: 8px;
  cursor: pointer;
  padding-left: 30px;
  @media(max-width: $sm) {
    margin-top: 0;
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
  &__logo {
    position: absolute;
    top: 40px;
    left: 10vw;
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

.logo {
  @media(max-width: $sm) {
    height: 28px;
  }
}
</style>
