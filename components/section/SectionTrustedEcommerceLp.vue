<script lang="ts" setup>
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
    <div class="trusted__list">
      <div
        v-for="(logo, index) in logos"
        :key="index"
        class="trusted__item flex-center"
        :data-aos-offset="50"
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
  margin-top: -50px;
  @media(max-width: $md) {
    margin-top: -28px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 24px;
    border: 1px solid #EFECFE;
    @media(max-width: $md) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  &__item {
    height: 96px;
    padding: 15px;
    min-width: 0;
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
