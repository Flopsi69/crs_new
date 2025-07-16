<script lang="ts" setup>
const { openModal } = useModal();

defineProps({
  formId: {
    type: String,
    default: 'blog_listing_0',
  },
})
</script>

<template>
  <BasePlate
    class="cta"
    background="purple-dark"
  >
    <div class="cta__title subtitle-1">
      Book a Strategy Session to learn how CRO can grow your business — and get
      an estimate of your potential uplift
    </div>
    <button
      class="cta__button button button_yellow subtitle-3"
      @click="openModal({ id: formId });"
    >
      Estimate your uplift
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="11"
        viewBox="0 0 13 11"
        fill="#2B2B2B"
      >
        <g clip-path="url(#clip0_521_1825)">
          <path
            d="M12.2855 6.00633L7.59856 10.5891C7.31259 10.8687 6.84882 10.8687 6.56286 10.5891C6.27684 10.3095 6.27684 9.85611 6.56286 9.57644L9.99961 6.21605H1.23233C0.827909 6.21605 0.5 5.89543 0.5 5.49999C0.5 5.10461 0.827909 4.78393 1.23233 4.78393H9.99961L6.56298 1.42355C6.27696 1.14388 6.27696 0.69053 6.56298 0.410866C6.70593 0.271148 6.89341 0.201146 7.08082 0.201146C7.26824 0.201146 7.45566 0.271148 7.59867 0.410866L12.2855 4.99365C12.5715 5.27332 12.5715 5.72667 12.2855 6.00633Z"
          />
        </g>
      </svg>
    </button>
  </BasePlate>
</template>

<style lang="scss" scoped>
.cta {
  padding: 28px;
  &__title {
    line-height: 1.3;
  }
  &__button {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    text-transform: none;
    justify-content: center;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
