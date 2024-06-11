<script lang="ts" setup>
defineProps({
  back: Boolean,
});
</script>

<template>
  <button
    class="button button_flat pill border bg--white color-purple flex-center lh-1"
  >
    <Icon
      v-show="back"
      name="line-md:chevron-small-left"
      size="24"
    />
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.pill {
  border-radius: 24px;
  padding: 7px 16px 5px;
  min-height: 40px;
  cursor: pointer;
  transition: .3s;
  @media(hover:hover) {
    &:hover {
      background-color: $bg--purple-light;
    }
  }

  &.active {
    background-color: $bg--purple-dark;
    color: #fff;
  }
}

.icon {
  margin-top: -1px;
  margin-left: -4px;
}
</style>
