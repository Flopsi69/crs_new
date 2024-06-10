<script lang="ts" setup>
const props = defineProps(
  {
    background: {
      type: String,
      default: '',
    }
  }
);

const background = computed(() => {
  return props.background ? 'bg--' + props.background : props.background
})
</script>

<template>
  <section
    class="section"
    :class="[background]"
  >
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  overflow: hidden;
  position: relative;
}
</style>
