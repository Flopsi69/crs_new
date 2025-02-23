<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  }
})
const model = defineModel();
</script>

<template>
  <label class="agree text flex">
    <input
      v-model="model"
      type="radio"
    />
    <span v-if="label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
span {
  margin-left: 10px;
}
</style>
