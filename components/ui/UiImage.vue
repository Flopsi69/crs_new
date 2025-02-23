<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <img
    v-if="src"
    class="image"
    :src="src"
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
