<script lang="ts" setup>
const { openModal } = useModal();
const { t } = useI18n();

const info = {
  title: t('cta.limitedOffer.funnelInfo.title'),
  subtitle: t('cta.limitedOffer.funnelInfo.subtitle'),
  formTitle: t('cta.limitedOffer.funnelInfo.formTitle'),
  cta: t('cta.limitedOffer.funnelInfo.cta'),
  note: t('cta.limitedOffer.funnelInfo.note'),
  isSpecialOffer: true
}
</script>

<template>
  <BasePlate
    class="limited"
    background="purple-dark"
    mob-full
  >
    <div class="limited__bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="218"
        viewBox="0 0 54 218"
        fill="none"
      >
        <path
          opacity="0.6"
          d="M53.5 324.736L53.5 0.736328L0.5 0.736328L0.5 324.736H53.5Z"
          fill="url(#paint0_linear_2580_3445)"
          fill-opacity="0.06"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2580_3445"
            x1="27.0035"
            y1="0.736328"
            x2="27.0035"
            y2="324.736"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              stop-color="#4D3A98"
              stop-opacity="0"
            />
            <stop
              offset="0.36"
              stop-color="white"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="limited__info info text-center">
      <div class="info__subtitle subtitle-2 lh-1">
        {{ t('cta.limitedOffer.subtitle') }}
      </div>

      <h2 class="info__title title-1">
        {{ t('cta.limitedOffer.title') }}
      </h2>

      <div class="info__caption text">
        {{ t('cta.limitedOffer.caption') }}
      </div>

      <button
        id="limited_offer_cta"
        class="button button_yellow"
        @click="openModal({ info, id: 'homepage_limited_offer_0' })"
      >
        {{ t('cta.limitedOffer.cta') }}
      </button>
    </div>

    <div class="limited__image image">
      <div class="image__info">
        <div class="image__info-name subtitle-3">Ihor Sokolov</div>
        <div class="image__info-position text text-sm">
          ConversionRateStore CEO, co-founder
        </div>
      </div>
      <img
        src="/images/cta-ihor.png"
        alt="Limited offer"
        data-aos="fade-left"
        data-aos-delay="100"
      />
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.limited {
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  min-height: 370px;
  background-image: url('/images/cta-limited-order-mask.png');
  background-repeat: no-repeat;
  background-position: 85%;
  background-size: auto 100%;
  @media(max-width: $md) {
    gap: 30px;
  }
  @media(max-width: $sm) {
    flex-flow: column;
    padding: 64px 12px 0;
    gap: 30px;
    background-image: url('/images/cta-limited-order-mask-mobile.png');
    background-size: 100% 100%;
  }
  &__bar {
    position: absolute;
    pointer-events: none;
    bottom: -10px;
    left: 34px;
    @media(max-width: $sm) {
      display: none;
    }
  }
}

.info {
  position: relative;
  z-index: 1;
  opacity: .99;
  max-width: 540px;
  width: 100%;
  padding: 30px 0;
  @media(max-width: $sm) {
    padding: 0;
  }
  &__subtitle {
    text-transform: uppercase;
    color: $gold;
  }
  &__title {
    margin-top: 24px;
    white-space: pre-line;
    @media(max-width: $lg) {
      font-size: 28px;
      line-height: 1.3;
    }
    @media(max-width: $md) {
      white-space: normal;
    }
    @media(max-width: $sm) {
    }
  }
  &__caption {
    margin-top: 8px;
    white-space: pre-line;
  }
}

.image {
  position: relative;
  line-height: 0;
  align-self: end;
  margin-right: -7px;
  padding-top: 14px;
  @media(max-width: $sm) {
    margin-right: -30%;
    padding-top: 0;
    align-self: center;
  }
  img {
    max-width: 454px;
    @media(max-width: $sm) {
      max-width: 356px;
    }
  }

  &__info {
    position: absolute;
    left: -4px;
    top: 94px;
    line-height: 1.3;
    text-align: right;
    max-width: 128px;
    @media(max-width: $sm) {
      left: -25px;
      top: 70px;
    }
    &-position {
      margin-top: 4px;
    }
  }
}

.button {
  margin-top: 24px;
  font-size: 18px;
  padding: 17px 15px 15px;
  height: 60px;
  min-width: 300px;
  // @media(max-width: $sm) {
  //   margin-top: 24px;
  //   width: 100%;
  //   padding-left: 10px;
  //   padding-right: 10px;
  // }
}
</style>
