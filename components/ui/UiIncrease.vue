<script lang="ts" setup>
defineProps({
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  }
});
</script>

<template>
  <BasePlate
    class="box"
    background="white"
  >
    <div
      class="box__value title-1"
      v-if="value"
    >
      <span class="color-violet">+{{ value }}%</span>
      <span class="color-yellow">increase</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="21"
        viewBox="0 0 35 21"
        fill="none"
      >
        <path
          d="M34.8604 1.07987C34.6828 0.652262 34.343 0.312454 33.9154 0.134873C33.705 0.0452012 33.4791 -0.00236197 33.2504 -0.00512695H24.5004C24.0363 -0.00512695 23.5911 0.179248 23.2629 0.507437C22.9348 0.835625 22.7504 1.28074 22.7504 1.74487C22.7504 2.209 22.9348 2.65412 23.2629 2.98231C23.5911 3.3105 24.0363 3.49487 24.5004 3.49487H29.0329L19.2504 13.2774L13.4929 7.50237C13.3302 7.33835 13.1366 7.20816 12.9234 7.11931C12.7101 7.03047 12.4814 6.98473 12.2504 6.98473C12.0194 6.98473 11.7906 7.03047 11.5774 7.11931C11.3641 7.20816 11.1706 7.33835 11.0079 7.50237L0.507881 18.0024C0.343857 18.1651 0.213667 18.3586 0.124821 18.5719C0.0359763 18.7851 -0.00976562 19.0139 -0.00976562 19.2449C-0.00976562 19.4759 0.0359763 19.7046 0.124821 19.9179C0.213667 20.1311 0.343857 20.3247 0.507881 20.4874C0.670567 20.6514 0.864119 20.7816 1.07737 20.8704C1.29063 20.9593 1.51936 21.005 1.75038 21.005C1.9814 21.005 2.21014 20.9593 2.42339 20.8704C2.63664 20.7816 2.8302 20.6514 2.99288 20.4874L12.2504 11.2124L18.0079 16.9874C18.1706 17.1514 18.3641 17.2816 18.5774 17.3704C18.7906 17.4593 19.0194 17.505 19.2504 17.505C19.4814 17.505 19.7101 17.4593 19.9234 17.3704C20.1366 17.2816 20.3302 17.1514 20.4929 16.9874L31.5004 5.96237V10.4949C31.5004 10.959 31.6848 11.4041 32.0129 11.7323C32.3411 12.0605 32.7863 12.2449 33.2504 12.2449C33.7145 12.2449 34.1596 12.0605 34.4878 11.7323C34.816 11.4041 35.0004 10.959 35.0004 10.4949V1.74487C34.9976 1.51619 34.9501 1.29026 34.8604 1.07987Z"
          fill="#EDE8F6"
        />
      </svg>
    </div>

    <div
      class="box__caption"
      v-if="label"
    >
      {{ label }}
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.box {
  padding: 40px 28px;
  border-radius: 20px;
  border: 2px solid #EDE8F6;
  @media(max-width: $sm) {
    padding: 20px;
  }
  &__value {
    display: flex;
    align-items: center;
    line-height: 1;
    gap: 8px;
    @media(max-width: $sm) {
      font-size: 30px;
    }

    svg {
      flex-shrink: 0;
      margin-left: auto;
      @media(max-width: $sm) {
        width: 30px;
      }
    }
  }

  &__caption {
    margin-top: 20px;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media(max-width: $sm) {
      margin-top: 16px;
    }
  }
}
</style>
