<script lang="ts" setup>
const { t } = useI18n()

const logos = [
  'microsoft-dark.svg',
  'comodo.svg',
  'finish.png',
  'samCart.png',
  'cleanMyMac.png',
  'leMieux.png',
  'riverside.png',
  'preply-new.png',
  'macPaw-black.svg',
  'papayaGlobal.svg',
  'promUa.png',
  'natPat.png',
  'depositphotos.svg',
  'setapp.svg',
  'carId.png',
  'skylum.png'
]
</script>

<template>
  <BaseSection class="trusted">
    <h2 class="section-title title-2 text-center">
      {{ t('sectionTrusted.title') }}
    </h2>

    <div class="trusted__list">
      <div
        class="trusted__item flex-center"
        v-for="(logo, index) in logos"
        :key="index"
        :data-aos="index % 2 ? 'fade-left' : 'fade-right'"
      >
        <img
          class="trusted__item-logo"
          :src="`/images/logo/${logo}`"
        />
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.trusted {
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 40px;
    border-radius: 24px;
    border: 1px solid #EFECFE;
    @media(max-width: $md) {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 24px;
    }
  }
  &__item {
    height: 96px;
    padding: 15px;
    @media(max-width: $md) {
      padding: 10px;
      height: 72px;
    }
    @media(min-width: $md) {
      &:nth-child(1n + 5) {
        border-top: 1px solid #EFECFE;
      }
      &:nth-child(1n + 2) {
        border-left: 1px solid #EFECFE;
      }
      &:nth-child(4n + 1) {
        border-left: none;
      }
    }
    @media(max-width: $md) {
      &:nth-child(1n + 3) {
        border-top: 1px solid #EFECFE;
      }
      &:nth-child(1n + 2) {
        border-left: 1px solid #EFECFE;
      }
      &:nth-child(2n + 1) {
        border-left: none;
      }
      &:nth-child(8) img {
       max-width: 90px;
      }
      &:nth-child(11) img, &:nth-child(12) img {
       max-height: 35px;
       max-width: 100px;
      }
    }

    img {
      max-width: 130px;
      max-height: 70px;
      @media(max-width: $md) {
        max-width: 110px;
        max-height: 45px;
      }
    }
  }
}
</style>
