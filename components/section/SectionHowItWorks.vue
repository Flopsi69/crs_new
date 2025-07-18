<script lang="ts" setup>
defineProps<{
  title?: string;
}>();

const { t } = useI18n();
const { validateInput } = useValidateInput()
const { openModal } = useModal();
const url = ref('');
const error = ref();

function handleOpenModal() {
  error.value = validateInput(url.value, 'url');

  if (!error.value) {
    openModal({ url: url.value, id: 'cro-service_how_it_work_0' });
  }
}
</script>

<template>
  <BaseSection class="how">
    <div class="how__label">How it works</div>
    <h2 class="how__title title title-1">
      {{ title || `Conversion Rate Optimization Service with a Results Guarantee` }}
    </h2>

    <div class="how__list">
      <div class="how__item item">
        <div class="item__step">Step 1</div>
        <div class="item__title">We sign an NDA</div>
        <div class="item__descr">
          We ensure confidentiality and data security before any access is
          granted
        </div>
      </div>

      <div class="how__item item">
        <div class="item__step">Step 2</div>
        <div class="item__title">Analytics access granted</div>
        <div class="item__descr">
          You grant us access to Google Analytics 4 (or equivalent) for user
          behavior analysis
        </div>
      </div>

      <div class="how__item item">
        <div class="item__step">Step 3</div>
        <div class="item__title">Funnel Analysis & Forecasting</div>
        <div class="item__descr">
          We analyze your funnel to define the Macro Metric uplift we can
          confidently commit to
        </div>
      </div>

      <div class="how__item item">
        <div class="item__step">Step 4</div>
        <div class="item__title">Align & Launch</div>
        <div class="item__descr">
          We agree on the engagement terms — including the results guarantee —
          and launch the CRO project
        </div>
      </div>
    </div>

    <div class="how__form form">
      <div class="form__title">
        Estimate the Uplift We Can <br /><span>Contractually Guarantee</span>
      </div>

      <div class="form__inner">
        <BaseInput
          id="cro-service_how-ti-work_url"
          v-model="url"
          class="form__input"
          required
          :placeholder="t('sectionHero.form.placeholder')"
          icon="fa6-solid:link"
          :error="error"
          @click="error = ''"
        />

        <button
          class="button button_yellow form__button"
          @click="handleOpenModal"
        >
          Estimate your uplift
        </button>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.how {
  background: #3D30B3;
  background-size: 100% auto;
  color: #fff;
  padding: 90px 0 50px;
  text-align: center;
  @media(max-width: $sm) {
    padding-bottom: 0;
    padding-top: 35px;
  }
  &__label {
    position: relative;
    padding: 15px 24px 14px;
    display: inline-block;
    color: #F1C345;
    font-size: 28px;
    font-weight: 700;
    border-radius: 111px;
    border: 2px solid rgba(255, 255, 255, 0.05);
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.07) 4.58%, rgba(255, 255, 255, 0.00) 39.05%, rgba(255, 255, 255, 0.10) 80.77%, rgba(255, 255, 255, 0.10) 91.33%, rgba(255, 255, 255, 0.00) 100%);
    @media(max-width: $sm) {
      font-size: 20px;
      padding: 11px 16px 9px;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      border-radius: 100%;
      background: rgba(0, 0, 0, 0.60);
      opacity: 0.3;
      filter: blur(6px);
      width: 110%;
      height: 13px;
      @media(max-width: $sm) {
        width: 100%;
        bottom: -19px;
      }
    }
  }
  &__title {
    max-width: 640px;
    margin: 16px auto 0;
    @media(max-width: $sm) {
      font-size: 28px;
      line-height: 1.3;
    }
  }
  &__list {
    position: relative;
    margin-top: 140px;
    padding-bottom: 310px;
    height: 1012px;
    @media (max-width: 1200px) {
      height: auto;
      display: grid;
      gap: 48px;
      margin: 48px auto 0;
      max-width: 600px;
      padding-bottom: 0;
    }
    &::before {
      content: '';
      position: absolute;
      pointer-events: none;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      top: 0;
      width: 1440px;
      background-image: url('img/bg-how-it-works.png');
      background-repeat: no-repeat;
      background-position: bottom;
      background-size: 1440px auto;
      @media (max-width: 1200px) {
        display: none;
      }
    }
     &::after {
      content: '';
      position: absolute;
      pointer-events: none;
      left: -20vw;
      bottom: 0;
      top: 0;
      right: -40vw;
      background-image: url('img/bg-how-it-works-shadow.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% auto;
      @media (max-width: 1200px) {
        background-size: contain;
      }
      @media (max-width: 530px) {
        background-size: 200% auto;
      }
    }
  }
}

.item {
  position: absolute;
  text-align: left;
  max-width: 400px;
  width: 100%;
  &:nth-child(1) {
    top: 5px;
    left: 120px;
  }
  &:nth-child(2) {
    top: 45px;
    right: 35px;
  }
  &:nth-child(3) {
    top: 365px;
    right: 245px;
    text-align: right;
     @media (max-width: 1200px) {
      text-align: left;
    }
  }
  &:nth-child(4) {
    bottom: 310px;
    left: 10px;
    text-align: right;
     @media (max-width: 1200px) {
      text-align: left;
    }
  }
  @media (max-width: 1200px) {
    position: relative;
    left: 0!important;
    top: 0!important;
    bottom: 0!important;
    right: 0!important;
    max-width: 100%;
    padding-left: 35px;
    padding-bottom: 5px;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 6px;
      width: 12px;
      height: 12px;
      border-radius: 12px;
      border: 2px solid #A698EE;
      background: #F1C345;
      box-shadow: 0 0 30px 3px #A698EE;
    }
    &:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 22px;
      bottom: 0;
      width: 4px;
      border-radius: 111px;
      background: linear-gradient(to top, #A596EE 23.08%, rgba(71, 57, 191, 0.00) 100%);
    }
  }
  &__step {
    color: #F1C345;
    font-size: 28px;
    line-height: 32px;
    @media(max-width: $sm) {
      font-size: 20px;
    }
  }
  &__title {
    margin-top: 4px;
    font-size: 28px;
    line-height: 32px;
    @media(max-width: $sm) {
      font-size: 24px;
    }
  }
  &__descr {
    margin-top: 12px;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    @media(max-width: $sm) {
      margin-top: 10px;
      font-size: 18px;
    }
  }
}

.form {
  position: relative;
  margin-top: -40px;
  padding-bottom: 80px;
  @media (max-width: 1200px) {
    margin-top: 56px;
    padding-bottom: 70px;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    border-radius: 100%;
    background: rgba(14, 17, 113, 0.54);
    filter: blur(16px);
    max-width: 330px;
    width: 100%;
    height: 34px;
    z-index: 1;
    @media(max-width: $md) {
      bottom: 25px;
      height: 20px;
      // display: none;
    }
  }
  &__title {
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    line-height: 64px;
    @media(max-width: $sm) {
      font-size: 28px;
      line-height: 1.3;
    }
    span {
      position: relative;
      white-space: nowrap;
      color: #E3AA10;
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0px;
        transform: translateY(100%) translateX(-50%);
        pointer-events: none;
        height: 28px;
        max-width: 400px;
        width: 100%;
        background: url('@/assets/icons/service-hero-underline.svg') no-repeat center;
        background-size: contain;
        @media(max-width: $sm) {
          width: 200px;
          height: 20px;
          bottom: 3px;
        }
      }
    }
  }

  :deep(.input__group) {
    height: 60px;
  }

  &__inner {
    display: grid;
    gap: 20px;
    max-width: 400px;
    margin: 72px auto 0;
    @media(max-width: $sm) {
      margin-top: 32px;
    }
  }

  &__button {
    height: 60px;
  }

}
</style>
