<script lang="ts" setup>
defineProps<{
  content?: {
    title: string
    caption?: string
  }
}>()

const { validateInput } = useValidateInput()
const { openModal } = useModal()
const { t } = useI18n()

const url = ref('')
const error = ref()

function handleOpenModal() {
  error.value = validateInput(url.value, 'url')

  if (!error.value) {
    openModal({ url: url.value, id: 'cro-service_hero_0' })
  }
}
</script>

<template>
  <BaseSection class="hero">
    <div class="row flex-between">
      <div class="info">
        <div class="info__title subtitle-2">
          We commit to increasing your key revenue metric —
          <span>contractually</span>
        </div>

        <h1
          class="info__subtitle title-1"
          v-html="content?.title || `Conversion Rate Optimization Service with a
          <span>Results Guarantee</span>`"
        />

        <div class="info__form-wrap form-wrap">
          <div class="form__caption subtitle-2">
            {{ content?.caption || 'Estimate the conversion rate uplift we’ll commit to — before you even sign.' }}
          </div>
          <div class="form flex">
            <BaseInput
              id="cro-service_hero_url"
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
      </div>

      <div class="info__image perfomance">
        <div class="perfomance__title subtitle-2">
          Average clients' performance uplift per model
        </div>

        <div class="perfomance__img">
          <img
            src="img/hero-services-info.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.hero {
  background: #3219AF;
  color: #fff;
  padding: 60px 0 50px;
  @media(max-width: $sm) {
    padding-top: 16px;
    padding-bottom: 30px;
  }
  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: 0;
    right: -50px;
    top: -100px;
    background: url('img/bg-service-hero.svg') bottom left no-repeat;
    background-size: 100% auto;
    @media(max-width: $md) {
      background-size: 300% auto;
    }
  }
}

.row {
  position: relative;
  gap: 54px;
  @media (max-width: $md) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
}

.info {
  max-width: 650px;
  width: 100%;
  margin-bottom: 30px;
  @media (max-width: $sm) {
    margin-bottom: 0;
    max-width: 100%;
  }
  &__title {
    display: inline-block;
    padding: 16px 24px 14px;
    border-radius: 111px;
    border: 2px solid rgba(255, 255, 255, 0.05);
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.07) 4.58%, rgba(255, 255, 255, 0.00) 72.15%, rgba(255, 255, 255, 0.10) 80.77%, rgba(255, 255, 255, 0.10) 91.33%, rgba(255, 255, 255, 0.00) 100%);
    span {
      color: #F1C345;
    }
    @media(max-width: $sm) {
      font-size: 18px;
      padding: 12px 35px 10px;
    }
  }
  &__subtitle {
    margin-top: 24px;
    @media(max-width: $sm) {
      margin-top: 16px;
      font-size: 30px;
      line-height: 38px;
    }
    :deep(span) {
      position: relative;
      white-space: nowrap;
      color: #E3AA10;
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateY(100%) translateX(-50%);
        pointer-events: none;
        height: 28px;
        max-width: 300px;
        width: 100%;
        background: url('@/assets/icons/service-hero-underline.svg') no-repeat center;
        background-size: contain;
        @media(max-width: $sm) {
          width: 200px;
        }
      }
    }
  }
  &__form-wrap {
    margin-top: 48px;
  }
}

.form {
  margin-top: 24px;
  gap: 12px;
  @media(max-width: $sm) {
    margin-top: 40px;
    margin-top: 16px;
    height: auto;
    flex-flow: column;
    gap: 20px;
  }
  &__caption {
    max-width: 450px;
    @media(max-width: $sm) {
      font-size: 18px;
    }
  }
  :deep(.input__group) {
    height: 60px;
  }
  &__button {
    font-size: 18px;
    height: 60px;
  }
}

.perfomance {
  max-width: 500px;
  &__title {
    color: #F1C345;
    text-shadow: 0px 1px 0px rgba(53, 36, 118, 0.50);
    letter-spacing: 1px;
    text-align: center;
    @media(max-width: $sm) {
      font-size: 18px;
      max-width: 80%;
      margin: 0 auto;
    }
  }
  &__img {
    position: relative;
    max-width: 445px;
    width: 100%;
    margin: auto;
    line-height: 0;
    margin-top: 5px;
    @media(max-width: $sm) {
      margin-top: 16px;
    }
    img {
      max-width: initial;
      width: 112%;
      margin-left: -6%;
    }
    &:after {
      // content: '';
      // position: absolute;
      // bottom: 10px;
      // left: 50%;
      // transform: translateX(-50%);
      // display: block;
      // border-radius: 100%;
      // background: rgba(0, 0, 0, 0.60);
      // filter: blur(12px);
      // width: 110%;
      // height: 13px;
    }
  }
}
</style>
