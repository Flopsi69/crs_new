<script lang="ts" setup>
const { modalTarget, closeModal } = useModal();
const { validateInput } = useValidateInput();
const { t } = useI18n();

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
      title: '',
      subtitle: '',
      list: [],
      formTitle: '',
      cta: '',
      note: '',
      isGoal: false,
      isSpecialOffer: false
    }
  }
});

const logos = [
  'microsoft.svg', 'comodo.svg', 'macPaw.svg', 'finish.png', 'samcart.svg'
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

const hearAboutUsItems = reactive([
  t('modal.funnel.hearAboutUs.somebody'),
  t('modal.funnel.hearAboutUs.organic'),
  t('modal.funnel.hearAboutUs.googleAds'),
  t('modal.funnel.hearAboutUs.other')
])

let annualRevenueItems = reactive([
  t('modal.funnel.annualRevenue.lessThan500k'),
  t('modal.funnel.annualRevenue.from500kTo1m'),
  t('modal.funnel.annualRevenue.from1mTo2m'),
  t('modal.funnel.annualRevenue.from2mTo5m'),
  t('modal.funnel.annualRevenue.preferNotToSay')
])

if (props.id.includes('homepage_limited_offer')) {
  annualRevenueItems = reactive([
    t('modal.funnel.annualRevenue.lessThan500k'),
    t('modal.funnel.annualRevenue.from500kTo1m'),
    t('modal.funnel.annualRevenue.over1m'),
  ])
}

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
      toast.error(t('modal.funnel.agreeError'));
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
  const toastLoading = toast.loading(t('general.async.pending'));

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
      render: t('general.async.error'),
      autoClose: true,
      isLoading: false
    });

    return;
  }

  toast.update(toastLoading, {
    type: 'success',
    render: t('general.async.success'),
    autoClose: true,
    isLoading: false
  });

  window.open('https://meetings.hubspot.com/ihor-sokolov?firstName=' + form.name + '&email=' + form.email, '_blank');

  modalTarget.value = 'success';
}
</script>

<template>
  <div
    data-aos="zoom-in"
    class="modal__inner"
  >
    <div
      class="info bg-purple_dark"
      :class="{ 'special-offer': info.isSpecialOffer }"
    >
      <div class="info__head flex-between">
        <img
          class="info__logo"
          src="img/logo.svg"
          alt="logo"
          height="38"
        />

        <div class="info__bages">
          <div class="info__bage info__bage-european text-center">
            <div class="info__bage-european-caption">EUROPEAN</div>
            <div class="info__bage-european-title">CRO Agency of 2024</div>
          </div>
          <div class="info__bage info__bage-clutch flex-center">
            <div class="info__bage-clutch-head flex-center">
              <img
                class="info__bage-clutch-logo"
                src="/images/logo/clutch.svg"
              />
              <span class="info__bage-clutch-rate lh-1">4.9</span>
              <img
                v-for="i in 5"
                :key="i"
                class="info__bage-clutch-star"
                src="/images/logo/clutch-star.svg"
              />
            </div>
            <div class="info__bage-clutch-caption">
              <span>BASED ON</span>
              38 VERIFIED REVIEWS
            </div>
          </div>
        </div>
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

        <div
          v-if="info.isSpecialOffer"
          class="limited-image"
        >
          <div class="limited-image__info">
            <div class="limited-image__info-name subtitle-3">Ihor Sokolov</div>
            <div class="limited-image__info-position text text-sm">
              ConversionRateStore CEO, co-founder
            </div>
          </div>
          <img
            src="/images/cta-ihor.png"
            alt="Limited offer"
            data-aos="fade-left"
            data-aos-delay="100"
          />
        </div>
      </div>

      <div
        v-if="!info.isSpecialOffer"
        class="info__footer flex-center"
      >
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
        {{ t('modal.funnel.back') }}
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
            :label="t('input.name.label')"
            required
            :placeholder="t('input.name.placeholder')"
            icon="fa6-solid:user"
            :error="error.name"
            @click="error.name = ''"
            id="modal_name"
          />

          <BaseInput
            v-model="form.url"
            small
            :label="t('input.companyUrl.label')"
            required
            :placeholder="t('input.companyUrl.placeholder')"
            icon="fa6-solid:link"
            :error="error.url"
            @click="error.url = ''"
            id="modal_url"
          />

          <BaseInput
            v-model="form.email"
            small
            :label="t('input.email.label')"
            required
            type="email"
            :placeholder="t('input.email.placeholder')"
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
            :label="t('input.annualRevenue.label')"
            :placeholder="t('input.annualRevenue.placeholder')"
            icon="fa6-solid:coins"
            :items="annualRevenueItems"
            id="annual_revenue"
          />

          <BaseInput
            v-model="form.hear_about_us"
            small
            :label="t('input.hearAboutUs.label')"
            :placeholder="t('input.hearAboutUs.placeholder')"
            icon="fa6-solid:people-group"
            :items="hearAboutUsItems"
            id="hear_about_us"
          />

          <BaseInput
            v-if="info.isGoal"
            v-model="form.project_goal"
            small
            :label="t('input.projectGoal.label')"
            :placeholder="t('input.projectGoal.placeholder')"
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
            {{ t('modal.funnel.agree') }}
            <span
              class="agree__checkbox"
              :class="{ active: isAgree, error: error.agree }"
            ></span>
          </div>
        </div>
      </div>

      <button
        :disabled="!form.name || !form.url || !form.email || isLoading"
        class="form__submit button button_yellow subtitle-3"
        :data-step="step"
        @click="goToNextStep"
      >
        {{ step === 1 ?  t("modal.funnel.continue") : info?.cta }}
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
  padding: 30px 45px 0 100px;
  min-width: 0;
  background-image: url('/images/funnel-bg.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: -5%;
  @media(max-width: 1440px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media(max-width: $md) {
    display: none;
  }
  &__logo {
    @media(max-width: $lg) {
      max-width: 140px;
    }
  }
  &__bages {
    display: flex;
    gap: 20px;
    @media(max-width: 1350px) {
      transform: scale(0.7);
    }
  }
  &__bage {
    border-radius: 8px;
    background: linear-gradient(90deg, rgba(85, 67, 172, 0.50) 0%, rgba(58, 36, 159, 0.50) 100%);
    line-height: 24px;
    padding: 6px 12px;
    white-space: nowrap;
    &-european {
      &-title {
        font-size: 19px;
        @media(max-width: $lg) {
          font-size: 16px;
        }
      }
      &-caption {
        color: #3EDDD0;
        font-size: 12px;
      }
    }
    &-clutch {
      flex-flow: column;
      &-logo {
        margin-right: 12px;
      }
      &-rate {
        font-size: 15px;
        margin-bottom: -4px;
      }
      &-star {
        margin-left: 5px;
      }
      &-caption {
        font-size: 12px;
        line-height: 16px;
        margin-top: 8px;
        span {
          color: #BFB9DD;
          margin-right: 2px;
        }
      }
    }
  }
  // &:before {
    // content: '';
    // position: absolute;
    // pointer-events: none;
    // left: 0;
    // bottom: 0;
    // right: 0;
    // top: 0;
    // background: url('img/bg-pixel-left.png') bottom left no-repeat;
    // background-size: 70%;
    // mix-blend-mode: lighten;
    // @media(max-width: $md) {
    //   display: none;
    // }
  // }
  &__body {
    margin: auto 0;
    padding-bottom: 20px;
  }

  &__title {
    max-width: 590px;
  }

  &__subtitle {
    margin-top: 24px;
  }

  &__list {
    margin-top: 24px;
  }

  &__footer {
    border-radius: 20px 20px 0px 0px;
    background: linear-gradient(90deg, rgba(85, 67, 172, 0.50) 0%, rgba(58, 36, 159, 0.50) 100%);
    margin-top: auto;
    padding: 24px 16px;
    gap: 20px;
    justify-content: space-evenly;
    img {
      min-width: 0;
      max-height: 40px;
      max-width: 130px;
      &:nth-child(2) {
        filter: brightness(1.3);
      }
      &:nth-child(4) {
        margin-top: -5px;
      }
    }
  }
}

.special-offer {
  background-image: url('/images/funnel-bg-special-offer.png');
  background-position: 0;
  .info {
    &__body {
      display: flex;
      flex-flow: column;
      text-align: center;
      align-items: center;
      padding-bottom: 0;
      margin-bottom: 0
    }
    &__subtitle {
      order: -1;
      margin-bottom: 16px;
      margin-top: 0;
      text-transform: uppercase;
      text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
      color: $gold;
      font-size: 20px;
    }
    &__title {
      font-size: 50px;
      line-height: 64px;
    }
  }
}

.limited-image {
  position: relative;
  line-height: 0;
  img {
    max-width: 454px;
    @media(max-width: $sm) {
      max-width: 356px;
    }
  }

  &__info {
    position: absolute;
    left: -4px;
    top: 94px;
    line-height: 1.3;
    text-align: right;
    max-width: 128px;
    @media(max-width: $sm) {
      left: -25px;
      top: 70px;
    }
    &-position {
      margin-top: 4px;
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
    @media(max-width: 1300px) {
      padding: 80px 30px 30px;
      max-width: 450px;
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
    min-height: 60px;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    .lang-de &[data-step="2"] {
      font-size: 14px;
      white-space: wrap;
      @media(max-width: $sm) {
        font-size: 12px;
      }
    }
    .lang-es &[data-step="2"] {
      font-size: 14px;
      white-space: wrap;
      @media(max-width: $sm) {
        font-size: 12px;
      }
    }
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

.logo {
  @media(max-width: $sm) {
    height: 28px;
  }
}
</style>
