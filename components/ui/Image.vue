<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <img
    class="image"
    src="img/temp-banner.jpg"
    :alt="alt"
  />
</template>

<style lang="scss" scoped>
.image {
  border-radius: 20px;
  border: 2px solid #EDE8F6;
  background: #FFF;
  min-height: 100px;
}
</style>
