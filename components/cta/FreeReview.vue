<script lang="ts" setup>
const { openModal } = useModal();
const { validateInput } = useValidateInput()

const { t } = useI18n();

const url = ref('');
const error = ref();
const info = {
  title: t('cta.freeReview.funnelInfo.title'),
  subtitle: t('cta.freeReview.funnelInfo.subtitle'),
  list: [
    t('cta.freeReview.funnelInfo.list[0]'),
    t('cta.freeReview.funnelInfo.list[1]'),
    t('cta.freeReview.funnelInfo.list[2]'),
  ],
  formTitle: t('cta.freeReview.funnelInfo.formTitle'),
  cta: t('cta.freeReview.funnelInfo.cta'),
  note: t('cta.freeReview.funnelInfo.note')
}

function handleOpenModal() {
  error.value = validateInput(url.value, 'url')

  if (!error.value) {
    openModal({ url, info, id: 'homepage_solution_0' });
  }
}
</script>

<template>
  <BasePlate
    class="cta"
    pixel
    background="purple-dark"
  >
    <div class="cta__inner">
      <h3 class="cta__title subtitle-2">
        {{ t('cta.freeReview.title') }}
      </h3>

      <div class="form flex">
        <BaseInput
          v-model="url"
          class="form__input"
          required
          :placeholder="t('cta.freeReview.placeholderUrl')"
          icon="fa6-solid:link"
          :error="error"
          @click="error = ''"
          id="free_review_url"
        />

        <button
          data-related="free_review_url"
          class="button button_yellow form__button"
          @click="handleOpenModal"
          id="free_review_cta"
        >
          {{ t('cta.freeReview.button') }}
        </button>
      </div>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>

.cta {
  padding: 30px;
  &__inner {
    position: relative;
    z-index: 1;
  }
  &__title {
    @media(max-width: $sm) {
      font-size: 18px;
      line-height: 28px;
    }
  }
}

.form {
  margin-top: 24px;
  gap: 12px;
  height: 60px;
  @media(max-width: $sm) {
    margin-top: 20px;
    flex-flow: column;
    height: auto;
    gap: 20px;
  }
  :deep(.form__input) {
    .lang-es & {
      font-size: 14px;
    }
    .lang-de & {
      font-size: 12px;
    }
  }
  &__button {
    font-size: 18px;
    padding-left: 32px;
    padding-right: 32px;
    .lang-es & {
      font-size: 14px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .lang-de & {
      font-size: 11px;
      padding-right: 15px;
      padding-left: 15px;
    }
    @media(max-width: $sm) {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      .lang-de & {
        font-size: 11px;
      }
    }
  }
}
</style>
