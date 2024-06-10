<script lang="ts" setup>
import { solutions } from '~/configs';

const active = ref(0);
</script>

<template>
  <div class="tabs">
    <!-- <div class="toggler">
      <div
        class="toggler__item flex-center"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="active = index"
        :class="{ 'active': active === index }"
      >
        <nuxt-icon :name="tab.icon" />
        {{ tab.title }}
      </div>
    </div> -->

    <div class="title subtitle-1">Choose problem</div>

    <SolutionList
      class="tabs__list"
      :items="solutions[active].problems"
      :mob-items="4"
    />
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin-top: 40px;
  @media(max-width: $sm) {
    margin-top: 24px;
  }
}

.tabs__list {
  margin-top: 24px;
  @media(max-width: $sm) {
    margin-top: 20px;
  }
}

.toggler {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid $border;
  margin-top: 40px;
}

.toggler__item {
  position: relative;
  padding: 24px;
  font-size: 20px;
  color: $font-secondary;
  gap: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: $purple;
    opacity: 0;
    transition: 0.3s;
  }

  @media(hover: hover) {
    &:hover {
      color: $purple;
      &:before {
        opacity: 0.5;
      }
    }
  }

  &.active {
    color: $purple;
    background: $gradient-light-smooth;
    &:before {
      opacity: 1;
    }
  }
}
</style>
