<script lang="ts" setup>
const leadersIcons = [
  'leader-label-5.png',
  'leader-label-3.png',
  'leader-label-2.png',
  'leader-label-1.png',
  'leader-label-4.png'
];
</script>

<template>
  <BaseSection
    class="hero"
    background="purple-dark"
  >
    <div class="hero__row main flex-between">
      <div class="hero__info">
        <h1 class="hero__title title-1">
          ConversionRate.Store is an Award Winning CRO Agency that Contractually
          Commits to Clients' Revenue Growth
        </h1>
      </div>

      <div class="hero__image">
        <img
          src="img/hero-about-us.png"
          alt="Conversioin Rate Store team"
        />
      </div>
    </div>

    <div class="hero__row secondary flex-between">
      <div class="awards secondary__awards">
        <div
          v-for="icon in leadersIcons"
          :key="icon"
          class="awards__item"
        >
          <img
            class="awards__image"
            :src="`/images/${icon}`"
          />
        </div>
      </div>
      <div class="secondary__description subtitle-2">
        Conversion Rate Store was founded in 2017 by two entrepreneurs — Ihor
        and Glib with a clear goal — to build a world-class consulting company.
        Today, CRS is one of the world’s most recognized and award-winning
        conversion optimization agencies, trusted by market leaders like
        Microsoft, Comodo, MacPaw, and SamCart.
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(90deg, #5543AC 0%, #3A249F 100%);
  &__info {
    max-width: 570px;
  }
  &__row {
    position: relative;
    z-index: 22;
    gap: 60px;
    @media(max-width: $md) {
      z-index: 2;
    }
    &.main {
      padding: 80px 0;
    }
    &.secondary {
      padding: 60px 0;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -200px;
        right: -200px;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.10);
      }
    }
  }
  &__gap {
    gap: 60px;
  }
  &__image {
    max-width: 570px;
  }
}

.secondary {
  &__description {
    max-width: 570px;
    font-weight: 400;
  }
}

.awards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 24px;
  &__item {
    line-height: 0;
    max-width: 136px;
  }
}
</style>
