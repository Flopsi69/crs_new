<script lang="ts" setup>
const { locale } = useI18n();
const { openModal } = useModal();

defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="toggler"
    :class="{ 'toggler_dark': dark }"
    @click="openModal({ target: 'language' })"
  >
    {{ locale }}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
    >
      <path
        d="M1 1L7 7L13 1"
        :stroke="dark ? 'white' : '#5C51A5'"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.toggler {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  border: 1px solid #E6E2FD;
  cursor: pointer;
  transition: .3s;
  text-transform: uppercase;
  line-height: 1;
  padding: 8px 12px 6px;
  &:hover {
    background-color: $bg--purple-light;
  }
   &_dark {
    background-color: $purple;
    &:hover {
      background-color: #4B3F8C;
    }
  }
}
</style>
