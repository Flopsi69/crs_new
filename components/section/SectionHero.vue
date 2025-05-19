<script lang="ts" setup>
const { validateInput } = useValidateInput()
const { openModal } = useModal();
const { t } = useI18n();

const url = ref('');
const error = ref();
const info = {
  title: t('sectionHero.funnelInfo.title'),
  subtitle: t('sectionHero.funnelInfo.subtitle'),
  list: [
    t('sectionHero.funnelInfo.list.item1'),
    t('sectionHero.funnelInfo.list.item2'),
    t('sectionHero.funnelInfo.list.item3'),
  ],
  formTitle: t('sectionHero.funnelInfo.formTitle'),
  cta: t('sectionHero.funnelInfo.cta'),
  note: t('sectionHero.funnelInfo.note')
};

const words = [t('sectionHero.words.eCommerce'), t('sectionHero.words.SaaS'), t('sectionHero.words.App'), t('sectionHero.words.LeadGen')];

function handleOpenModal() {
  error.value = validateInput(url.value, 'url');

  if (!error.value) {
    openModal({ url: url.value, info, id: 'homepage_hero_0' });
  }
}
</script>

<template>
  <BaseSection
    background="purple-dark"
    class="hero"
  >
    <div class="row flex-center">
      <div class="info">
        <h1 class="info__title bg--purple subtitle-2">
          {{ t('sectionHero.title') }}
        </h1>

        <div class="info__subtitle title-1">
          {{ t('sectionHero.subtitle.prefix') }}
          <word-flipper
            class="color-yellow info__flipper"
            :words="words"
            :delay="3000"
          />
          <br />
          {{ t('sectionHero.subtitle.suffix') }}
        </div>

        <HeroChart class="info__chart-mob" />

        <div class="info__form-wrap form-wrap border-decor_top">
          <div class="subtitle-2">
            {{ t('sectionHero.form.title') }}
          </div>
          <div class="form flex">
            <BaseInput
              v-model="url"
              class="form__input"
              required
              :placeholder="t('sectionHero.form.placeholder')"
              icon="fa6-solid:link"
              :error="error"
              @click="error = ''"
              id="hero_url"
            />

            <button
              data-related="hero_url"
              @click="handleOpenModal"
              class="button button_yellow form__button"
            >
              {{ t('sectionHero.form.cta') }}
            </button>
          </div>
        </div>
      </div>

      <HeroChart class="info__chart-desk" />
    </div>
  </BaseSection>
</template>

<style>
/* .letter {
  display: inline-block;
  animation: rotate 0.8s ease forwards;
  opacity: 0;
}

@keyframes rotate {
  0% {
    transform: rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
}
*/
</style>

<style lang="scss" scoped>

.hero {
  padding: 65px 0 60px;
  @media(max-width: $md) {
    padding: 30px 0 40px;
  }
  @media(max-width: $sm) {
    padding: 14px 0 42px;
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
    background-size: contain;
    mix-blend-mode: lighten;
    @media(max-width: $md) {
      display: none;
    }
  }
}

.row {
  position: relative;
  gap: 54px;
  @media(max-width: $md) {
    display: block;
  }
}

.info {
  &__title {
    display: inline-block;
    padding: 16px 16px 14px;
    border-radius: 20px;
    @media(max-width: $sm) {
      font-size: 16px;
      padding: 12px 12px 10px;
    }
  }
  &__subtitle {
    margin-top: 24px;
    max-width: 625px;
    white-space: pre-line;
    &-word {
      white-space: nowrap;
    }
    @media(max-width: $sm) {
      margin-top: 16px;
      font-size: 26px;
      line-height: 34px;
      .lang-es & {
        font-size: 20px;
        line-height: 28px;
      }
    }
  }
  &__flipper {
    width: 220px;
    @media(max-width: $sm) {
      width: 100px;
    }
  }
  &__chart {
    &-mob {
      display: none;
    }

    @media(max-width: $md) {
      &-desk {
        display: none;
      }
      &-mob {
        display: block;
        margin-top: 16px;
        width: 100%;
      }
    }
  }
  &__form-wrap {
    margin-top: 24px;
    padding-top: 24px;
    @media(max-width: $sm) {
      padding-top: 0;
      background: none;
    }
  }
}

.form {
  margin-top: 24px;
  gap: 12px;
  height: 60px;
  @media(max-width: $sm) {
    flex-flow: column;
    height: auto;
    gap: 20px;
  }
  &__input {
    flex-grow: 1;
    @media(max-width: $sm) {
      height: 60px;
    }
  }
  &__button {
    font-size: 18px;
    .lang-de & {
      font-size: 14px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .lang-es {
      padding-left: 20px;
      padding-right: 20px;
    }
    @media(max-width: $sm) {
      padding-left: 20px;
      padding-right: 20px;
      height: 60px;
    }
  }
}
</style>
