<script lang="ts" setup>
const { closeModal } = useModal();
const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const autocompleteValue = ref('');

const filteredLocales = computed(() => {
  return locales.value.filter((localeItem) => {
    if (!autocompleteValue.value) {
      return true;
    }

    const value = autocompleteValue.value?.toLowerCase();
    const originalName = localeItem.name?.toLowerCase();
    const enName = String(localeItem.nameEnglish).toLowerCase();

    return originalName?.includes(value) || enName.includes(value);
  });
});
</script>

<template>
  <div
    data-aos="zoom-in"
    class="modal__inner bg-purple_dark"
  >
    <div class="toggler__header">
      <div class="toggler__title">
        {{ t('modal.language.title') }}
      </div>

      <button
        class="toggler__close button button_flat"
        @click="closeModal"
      >
        <Icon
          name="solar:close-circle-linear"
          size="36"
          class="color-white"
        ></Icon>
      </button>
    </div>
    <!-- v-model="locale"
        :icon="{
            name: 'solar:search-linear',
            size: 16,
            class: 'color-purple'
          }"
        @click="error.name = ''"
        -->
    <div class="toggler__autocomplete">
      <BaseInput
        v-model="autocompleteValue"
        class="toggler__input"
        :label="t('modal.language.label')"
        :placeholder="t('modal.language.placeholder')"
        id="change_language"
        icon="mdi:magnify"
      />
    </div>

    <div
      class="toggler__list"
      v-if="locales?.length"
      v-auto-animate
    >
      <NuxtLink
        v-for="localeItem in filteredLocales"
        :key="localeItem.code"
        :to="switchLocalePath(localeItem.code)"
        class="toggler__link"
        :class="{ active: localeItem.code === locale }"
        @click="closeModal"
      >
        <div class="toggler__name">
          {{ localeItem.name }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal__inner {
  display: block;
  max-width: 600px;
  min-height: auto;
  background-color: #fff;
  color: $font-primary;
  padding: 24px;
  border-radius: 24px;
}

.toggler {
  &__close {
    svg {
      color: $purple;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  &__title {
    font-size: 28px;
    line-height: 130%;
  }

  &__autocomplete {
    margin-top: 24px;
  }

  &__list {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
    gap: 12px 40px;
    padding: 0 24px;
    @media(max-width: $sm) {
      padding: 0;
      gap: 12px 25px;
    }
  }

  &__link {
    color: $font-light;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    cursor: pointer;
    transition: .3s;
    &.active {
      color: $yellow;
    }

    &:not(.active):hover {
      color: $font-primary;
    }
  }
}
</style>
