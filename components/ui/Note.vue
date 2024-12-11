<script lang="ts" setup>
const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: ''
  },
  iconSize: {
    type: String,
    default: 'big',
  }
});

const iconColor = computed(() => {
  if (props.dark || props.light) return '#e3aa10';

  return '#5c51a5';
});
</script>

<template>
  <div
    class="box"
    :class="{
      'bg--violet': dark,
      'bg--purple-light': light,
      'box--mobile-reverse': iconSize === 'big' && title,
    }"
  >
    <div
      class="box__icon"
      :class="`box__icon_${iconSize}`"
      v-if="$slots.icon || icon"
    >
      <template v-if="$slots.icon">
        <slot name="icon"></slot>
      </template>

      <template v-else-if="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :width="iconSize === 'big' ? '40' : '24'"
          :height="iconSize === 'big' ? '40' : '24'"
          viewBox="0 0 40 40"
          :fill="iconColor"
        >
          <template v-if="icon === 'alert'">
            <g clip-path="url(#clip0_283_1294)">
              <path
                d="M20 0C8.97167 0 0 8.97167 0 20C0 31.0283 8.97167 40 20
              40C31.0283 40 40 31.0283 40 20C40 8.97167 31.0283 0 20 0ZM20
              31.6667C19.08 31.6667 18.3333 30.92 18.3333 30C18.3333 29.08 19.08
              28.3333 20 28.3333C20.92 28.3333 21.6667 29.08 21.6667 30C21.6667
              30.92 20.92 31.6667 20 31.6667ZM21.6667 23.3333C21.6667 24.2533
              20.92 25 20 25C19.08 25 18.3333 24.2533 18.3333 23.3333V10C18.3333
              9.08 19.08 8.33333 20 8.33333C20.92 8.33333 21.6667 9.08 21.6667
              10V23.3333Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_283_1294">
                <rect
                  width="40"
                  height="40"
                  fill="white"
                />
              </clipPath>
            </defs>
          </template>

          <template v-else>
            <path
              d="M5.93928 31.3762C4.01312 29.1808 2.85742 26.7859 2.85742 22.7943C2.85742 15.809 7.67283 9.62199 14.4144 6.42871L16.148 9.02325C9.79161 12.6157 8.4433 17.206 8.05806 20.1997C9.02115 19.601 10.3695 19.4014 11.7178 19.601C15.1849 20.0001 17.8815 22.7943 17.8815 26.5863C17.8815 28.3825 17.111 30.1787 15.9553 31.5758C14.607 32.9728 13.0661 33.5716 11.1399 33.5716C9.02115 33.5716 7.09498 32.5737 5.93928 31.3762ZM25.2009 31.3762C23.2748 29.1808 22.1191 26.7859 22.1191 22.7943C22.1191 15.809 26.9345 9.62199 33.676 6.42871L35.4096 9.02325C29.0532 12.6157 27.7049 17.206 27.3197 20.1997C28.2828 19.601 29.6311 19.4014 30.9794 19.601C34.4465 20.0001 37.1431 22.7943 37.1431 26.5863C37.1431 28.3825 36.3727 30.1787 35.217 31.5758C34.0613 32.9728 32.3277 33.5716 30.4016 33.5716C28.2828 33.5716 26.3566 32.5737 25.2009 31.3762Z"
            />
          </template>
        </svg>
      </template>
    </div>

    <div
      v-if="title || description"
      class="box__content"
    >
      <h3
        class="box__title subtitle-1"
        v-if="title"
      >
        {{ title }}
      </h3>
      <div
        class="box__description"
        v-if="description"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
  display: flex;
  padding: 28px;
  border-radius: 20px;
  border: 2px solid #ede8f6;
  gap: 20px;
  @media (max-width: $sm) {
    padding: 20px;
    gap: 12px;
  }
  &__icon {
    @media (max-width: $sm) {
      margin-top: 5px;
    }
    svg {
      @media (max-width: $sm) {
        width: 24px;
        height: 24px;
      }
    }
    &_big {
      .box--mobile-reverse & {
        @media (max-width: $sm) {
          position: absolute;
          right: 20px;
          top: 20px;
        }
      }
    }
    &_small {
      margin-top: 5px;
    }
  }
  &__title {
    .box--mobile-reverse & {
      @media (max-width: $sm) {
        padding-right: 36px;
      }
    }
  }
  &__description {
    font-size: 18px;
    font-weight: 400;
    line-height: 160%;
    .box__title + & {
      margin-top: 12px;
    }
  }
}
</style>
