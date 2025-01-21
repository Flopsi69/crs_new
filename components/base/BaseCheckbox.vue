<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  defaultValue: {
    type: String,
    default: '',
  }
})
const model = defineModel();
</script>

<template>
  <label class="checkbox text">
    <input
      v-if="value"
      :checked="model === value"
      @change="$emit('update:modelValue', model !== value ? value : defaultValue ? defaultValue : false)"
      :value="value"
      type="checkbox"
    />
    <input
      v-else
      v-model="model"
      :value="value"
      type="checkbox"
    />
    <span v-if="label">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
.checkbox {
  display: inline-flex;
  cursor: pointer;
  color: #545454;
  font-size: 14px;
  gap: 10px;
  & + & {
    margin-left: 20px;
    border-left: 1px solid $border;
    padding-left: 20px;
  }
  &__label {
    cursor: pointer;
    color: #545454;
    font-size: 14px;
  }
}
</style>
