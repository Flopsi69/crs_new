<script lang="ts" setup>
const { closeModal } = useModal();
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

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
});

const logos = [
  'microsoft.svg', 'comodo.svg', 'macPaw.svg', 'finish.png', 'samcart.svg'
];

const form = reactive({
  url: '',
  email: '',
  monthly_traffic: '',
  metadata: {
    page: location.href,
    form_title: 'Get a 20% increase in your E‑Commerce store’s conversion rate within 4 months - Guaranteed',
    id: props.id || ''
  },
  e_target: 'g'
});
const error = reactive({
  name: '',
  url: '',
  email: '',
  monthly_traffic: ''
});

const toast = useToast()
const gtm = useGtm()
const mailchimp = useMailchimp()
const excel = useExcel()
const mailer = useMailer()

const isLoading = ref(false)
const step = ref(1);

const monthlyTraffic = reactive([
  'Less than 50k visitors',
  '50k-250k',
  '250k - 1 million',
  'More than 1million',
  'I prefer not to say'
])

function goToNextStep() {
  // error.name = validateInput(form.name, 'name');
  error.url = validateInput(form.url, 'url');
  error.email = validateInput(form.email, 'email');
  error.monthly_traffic = validateInput(form.monthly_traffic, 'monthly_traffic');

  if (error.name || error.url || error.email || error.monthly_traffic) return

  saveLead();
}

onMounted(() => {
  setTimeout(() => {
    gtm?.trackEvent({
      event: 'popup_funnel_open'
    })
  }, 7000);
})

async function saveLead() {
  document.querySelector('#crs_survey')?.remove();

  const toastLoading = toast.loading(t('general.async.pending'));

  isLoading.value = true;

  loadMeetingsEmbed()

  gtm?.trackEvent({
    event: 'gtm_hubspot',
    data:  { ...toRaw(form) }
  })

  const body: Body = {
    audience: 'lead',
    data: { ...form, title: 'Get a 20% increase in your E‑Commerce store’s conversion rate within 4 months - Guaranteed' }
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

  (function(v, i, d, a, l, y, t, c, s) {
      c=function(u,cb){s=i.createElement('script');s.type='text/javascript';s.async=1;s.src=u;s.onload=function(){cb();};
        i.getElementsByTagName('head')[0].appendChild(s);};c(a+'conversion.min.js?cid=_Tu4JnJd',function(){
      l=new v[d]['ConversionTracking']({url:'https://stats.vidalytics.com'});l.track('dsieM9by',{conversionId:'_Tu4JnJd'});});
      })(window, document, 'VidalyticsC', 'https://fast.vidalytics.com/js/');


  step.value = 2;

  // Make another logic
  // window.open('https://meetings.hubspot.com/ihor-sokolov?firstName=' + form.name + '&email=' + form.email, '_blank');

  // modalTarget.value = 'success';
}

function loadMeetingsEmbed() {
  if (document.querySelector('.form-hubspot script[src*="MeetingsEmbedCode.js"]')) {
    return;
  }

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
  script.async = true;
  document.querySelector('.modal .form-hubspot')?.appendChild(script);
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

        <div class="info__bages">
          <div class="info__bage info__bage-european text-center">
            <div class="info__bage-european-caption">EUROPEAN</div>
            <div class="info__bage-european-title">CRO Agency of the Year</div>
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
          Get a <span class="color-yellow">20% increase</span> in your
          E&#8209;Commerce store’s conversion rate within 4 months - Guaranteed
        </h2>

        <div class="info__caption text">
          If we don’t achieve a 20% uplift based on A/B test results within 4
          months, we’ll continue for FREE
        </div>

        <h3 class="info__subtitle subtitle-1">
          Schedule a free CRO strategy call
        </h3>

        <ul class="info__list list-brand list-brand_yellow">
          <li class="list-brand__item">
            Get an actionable conversion rate optimization plan for your
            e-commerce store, based on insights from 4,200 A/B tests.
          </li>
          <li class="list-brand__item">
            Receive a quote for achieving a 20% conversion rate uplift.
          </li>
        </ul>
      </div>

      <div class="info__footer">
        <div class="info__footer-caption">Trusted by</div>
        <div class="info__footer-list flex-center">
          <img
            v-for="logo of logos"
            :key="logo"
            class="info__footer-image"
            :src="`/images/logo/${logo}`"
            alt=""
          />
        </div>
      </div>
    </div>

    <div
      class="form__wrap bg-white"
      :class="{
      'form-hubspot__wrap': step === 2,
    }"
    >
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

      <h2 class="form__title subtitle-1">Book a CRO strategy call</h2>

      <div
        v-show="step === 1"
        class="form"
      >
        <div class="form__step">
          <!-- <BaseInput
            id="modal_name"
            v-model="form.name"
            small
            :label="t('input.name.label')"
            required
            :placeholder="t('input.name.placeholder')"
            icon="fa6-solid:user"
            :error="error.name"
            @click="error.name = ''"
          /> -->

          <BaseInput
            id="modal_url"
            v-model="form.url"
            small
            :label="t('input.companyUrl.label')"
            required
            :placeholder="t('input.companyUrl.placeholder')"
            icon="fa6-solid:link"
            :error="error.url"
            @click="error.url = ''"
          />

          <BaseInput
            id="modal_email"
            v-model="form.email"
            small
            :label="t('input.email.label')"
            required
            type="email"
            :placeholder="t('input.email.placeholder')"
            icon="fa6-solid:envelope"
            :error="error.email"
            @click="error.email = ''"
          />

          <BaseInput
            id="monthly_revenue"
            v-model="form.monthly_traffic"
            small
            required
            label="Monthly traffic"
            placeholder="Monthly traffic"
            icon="fa6-solid:coins"
            :items="monthlyTraffic"
            :error="error.monthly_traffic"
            @click="error.monthly_traffic = ''"
          />
        </div>
      </div>

      <div
        v-show="step === 2"
        class="form-hubspot"
      >
        <div
          class="meetings-iframe-container"
          :data-src="`https://meetings.hubspot.com/gleb-hodorovskiy/schedule-call?embed=true&email=${form.email}`"
        ></div>
      </div>

      <button
        v-if="step === 1"
        :disabled="!form.url || !form.email || !form.monthly_traffic || isLoading"
        class="form__submit button button_yellow subtitle-3"
        @click="goToNextStep"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  overflow: hidden;
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
    // padding-bottom: 20px;
  }

  &__title {
    max-width: 530px;
  }

  &__caption {
    margin-top: 12px;
    max-width: 500px;
  }

  &__subtitle {
    margin-top: 24px;
  }

  &__list {
    margin-top: 24px;
    font-weight: 400;
    max-width: 500px;
    .list-brand__item:before {
      background-color: #fff;
    }
  }

  &__footer {
    position: relative;
    margin-top: auto;
    padding: 16px 0;
    &:before {
      content: '';
      position: absolute;
      left: -100%;
      right: -100%;
      bottom: 0;
      top: 0;
      background: linear-gradient(90deg, rgba(85, 67, 172, 0.50) 0%, rgba(58, 36, 159, 0.50) 100%);
    }
    &-caption {
      position: relative;
      z-index: 1;
      font-size: 16px;
    }
    &-list {
      position: relative;
      z-index: 1;
      gap: 20px;
      justify-content: space-between;
      margin-top: 6px;
    }
    &-image {
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

.form-hubspot {
  line-height: 0;
  min-height: 640px;
  max-width: 400px;
  width: 100%;
  margin: auto;
  @media(max-width: $md) {
    min-height: auto;
  }
  &__wrap {
    padding: 0 30px;
    gap: 0;
    @media(max-width: $md) {
      padding: 80px 20px 35px;
    }
    // background: transparent;
    // @media(max-width: $md) {
    //   padding: 0 20px;
    // }
  }
}
</style>
