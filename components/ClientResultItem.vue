<script lang="ts" setup>
defineProps({
  client: {
    type: Object,
    required: true,
    default: () => ({
      logo: '',
      label: '',
      description: '',
      mark: '',
      metrics: [],
      results: [],
    }),
  }
});
</script>

<template>
  <BasePlate
    background="white"
    class="card"
  >
    <div class="card__header">
      <div class="card__head-row flex justify-between align-start">
        <div
          class="card__logo flex align-center"
          v-if="client.logo"
        >
          <img
            :src="`/images/logo/${client.logo}`"
            :alt="`${client.mark} logo`"
          />
        </div>

        <div class="card__label bg--gradient-light">{{ client.label }}</div>
      </div>

      <div class="text card__description color-secondary">
        <span
          v-if="client.mark"
          class="color-purple fw-bold"
        >
          {{ client.mark }}
        </span>
        {{ client.description}}
      </div>
    </div>

    <div class="card__body">
      <div
        class="card__body-line"
        v-for="(metric, index) in client.metrics"
        :key="index"
      >
        <div class="card__subtitle subtitle-2">{{ metric.label }}</div>
        <div class="card__text text color-secondary">{{ metric.caption }}</div>
      </div>
    </div>

    <div class="card__footer bg--gradient-light">
      <div class="card__subtitle subtitle-2">
        {{ $t('sectionClientResults.results') }}
      </div>

      <div
        class="card__footer-line flex align-center"
        v-for="(result, index) in client.results"
        :key="index"
      >
        <span
          class="card__value color-purple subtitle-1"
          >{{ result.value }}</span
        >
        <span
          class="card__text text color-secondary"
          >{{ result.caption }}</span
        >
      </div>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  border: 1px solid $border;
  text-align: left;
  &__header {
    padding: 40px 40px 20px;
    display: grid;
    gap: 24px;
    @media(max-width: $sm) {
      padding: 24px 16px 16px;
    }
    &-row {
      gap: 16px;
    }
  }

  &__description {
    font-size: 18px;
    min-height: 80px;
  }

  &__label {
    border-radius: 100px;
    padding: 7px 12px 5px;
    color: $violet;
    @media(max-width: $sm) {
      font-size: 16px;
    }
  }

  &__logo {
    line-height: 0;
    height: 76px;
    max-width: 285px;
    @media(max-width: $sm) {
      height: 45px;
      max-width: 60%;
    }
  }

  &__body {
    padding: 20px 40px;
    background-image: linear-gradient(to right, #c4c2de 30%, rgba(196, 194, 222, 0) 0%);
    background-size: 8px 2px;
    background-repeat: repeat-x;
    @media(max-width: $sm) {
      padding: 16px 16px 20px;
    }
    &-line {
      display: grid;
      gap: 8px;

      & + & {
        margin-top: 20px;
      }
    }
  }

  &__subtitle {
    @media(max-width: $sm) {
      font-size: 18px;
    }
  }

  &__value {
    min-width: 95px;
    @media(max-width: $sm) {
      font-size: 20px;
      min-width: 70px;
    }
  }

  &__footer {
    padding: 23px 40px;
    margin-top: auto;
    min-height: 166px;
    @media(max-width: $sm) {
      padding: 16px;
      min-height: 140px;
    }
    &-line {
      gap: 16px;
      margin-top: 10px;
      @media(max-width: $sm) {
        gap: 10px;
      }
    }
  }
}
</style>
