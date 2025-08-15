<script setup lang="ts">
// import reviews_all from '@/configs/feedbacks'

const isMobile = ref(false)

const logos = [
  'microsoft.svg', 'comodo.svg', 'macPaw.svg', 'finish.png', 'samcart.svg'
];

onMounted(() => {
  if (window.innerWidth < 768) {
    isMobile.value = true
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      isMobile.value = true
    } else {
      isMobile.value = false
    }
  })
})
</script>

<template>
  <div class="contacts">
    <div class="container flex contacts__container">
      <div class="contacts__info info">
        <div class="info__bages">
          <div class="info__bage info__bage-european">
            <div class="info__bage-european-caption">EUROPEAN</div>
            <div class="info__bage-european-title">CRO Agency 2024</div>
          </div>
          <div class="info__bage info__bage-clutch flex-center">
            <div class="info__bage-clutch-caption">
              <span>Based on</span> 38 verified reviews
            </div>
            <div class="info__bage-clutch-row flex align-center">
              <img
                class="info__bage-clutch-logo"
                src="/images/logo/clutch.svg"
              />
              <span class="info__bage-clutch-rate lh-1">4.9</span>
              <img
                v-for="i in 5"
                :key="i"
                class="info__bage-clutch-star"
                src="/images/logo/clutch-star.svg"
              />
            </div>
          </div>
        </div>

        <h2 class="info__title title-2">
          Estimate Your ROI from a CRO/UXO Project for Your Business
        </h2>

        <!-- Form -->
        <SectionContactForm class="contacts__form contacts__form--mob" />

        <h3 class="info__subtitle subtitle-1">
          During the call, we will provide you with:
        </h3>

        <ul class="info__list list-brand list-brand_yellow">
          <li class="list-brand__item">
            A projected ROI from a CRO/UXO project for your site/product
          </li>

          <li class="list-brand__item">
            An estimated uplift of your key revenue metric that we can commit to
          </li>

          <li class="list-brand__item">
            An overview of the most significant CRO/UXO opportunities we see for
            your site
          </li>
        </ul>

        <!-- Footer -->
        <div class="info__footer">
          <div class="info__footer-caption">Trusted by</div>
          <div class="info__footer-list flex-between">
            <img
              v-for="logo of logos"
              :key="logo"
              class="info__footer-image"
              :src="`/images/logo/${logo}`"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- Form -->
      <SectionContactForm class="contacts__form contacts__form--desk" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  position: relative;
  overflow-x: clip;
  @media(max-width: $md) {
    background-color: $bg--purple-dark;
  }
  &:after {
    content: '';
    position: absolute;
    pointer-events: none;;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('img/bg-contact-us-light.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: left;
    @media(max-width: $md) {
      display: none;
    }
  }
  &__container {
    width: 100%;
  }
  &__form {
    background: #fff;
    position: relative;
    flex-grow: 1;
    padding: 80px 0 60px 120px;
    max-width: 510px;
    min-width: 400px;
    &--mob {
      display: none;
    }
    @media (max-width: 1280px) {
      padding-left: 40px;
    }
    @media(max-width: $md) {
      &--desk {
        display: none;
      }
      &--mob {
        display: block;
        margin: 16px -20px 0;
        max-width: initial;
        padding: 24px;
        min-width: 0;
      }
    }
  }
}

.info {
  position: relative;
  display: flex;
  flex-flow: column;
  max-width: 695px;
  flex-grow: 1;
  padding: 80px 45px 0 0;
  color: #fff;
  min-width: 0;
  @media (max-width: 1280px) {
    padding-right: 40px;
  }
  @media(max-width: $md) {
    max-width: 100%;
    padding-right: 0;
    padding-top: 40px;
  }
  @media(max-width: $sm) {
    padding-top: 16px;
  }

  &:before {
    content: '';
    position: absolute;
    pointer-events: none;;
    top: 0;
    right: 0;
    left: -500%;
    bottom: 0;
    background: linear-gradient(180deg, #3A2DAC 48.21%, #5241DE 74.81%);
    z-index: -1;
    @media(max-width: $md) {
      display: none;
    }
  }

  &__bages {
    display: flex;
    gap: 20px;
    margin-bottom: 44px;
    @media(max-width: $md) {
      display: none;
    }
  }
  &__bage {
    border-radius: 8px;
    background: rgba(65, 44, 144, 0.50);
    padding: 6px 12px;
    white-space: nowrap;
    line-height: 24px;
    &-european {
      &-title {
        font-size: 19px;
      }
      &-caption {
        color: #3EDDD0;
        font-size: 12px;
      }
    }
    &-clutch {
      flex-flow: column;
      gap: 7px;
      &-logo {
        margin-right: 12px;
      }
      &-rate {
        font-size: 15px;
        margin-bottom: -4px;
      }
      &-star {
        margin-left: 5px;
      }
      &-caption {
        font-size: 12px;
        line-height: 16px;
        color: #BFB9DD;
        text-transform: uppercase;
      }
    }
  }

  &__title {
    @media(max-width: $sm) {
    }
  }

  &__subtitle {
    margin-top: 24px;
    @media(max-width: $md) {
      margin-top: 36px;
    }
  }

  &__list {
    margin-top: 12px;
    margin-bottom: 32px;
  }

  &__footer {
    position: relative;
    margin-top: auto;
    padding: 16px 35px 16px 0;
    @media(max-width: $md) {
      padding-right: 0;
    }
    @media(max-width: $sm) {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      margin: 0 -20px;
      padding: 24px 20px;
    }
    &:before {
      content: '';
      pointer-events: none;
      position: absolute;
      left: -500%;
      right: -45px;
      bottom: 0;
      top: 0;
      background: #3F33AD;
      @media(max-width: $sm) {
        display: none;
      }
    }
    &-caption {
      position: relative;
      z-index: 1;
      font-size: 16px;
      @media(max-width: $sm) {
        font-size: 24px;
        &:after {
          content: ':';
        }
      }
    }
    &-list {
      position: relative;
      z-index: 1;
      gap: 32px;
      justify-content: space-between;
      margin-top: 6px;
      @media(max-width: $sm) {
        margin-top: 24px;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    }
    &-image {
      min-width: 0;
      max-height: 40px;
      max-width: 130px;
      flex: 1;
      object-fit: contain;
      @media(max-width: $sm) {
        flex: none;
        max-width: 110px;
      }
      &:nth-child(2) {
        filter: brightness(1.3);
      }
      &:nth-child(4) {
        margin-top: -5px;
      }
    }
  }
}
</style>
