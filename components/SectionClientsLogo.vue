<script lang="ts" setup></script>

<template>
  <BaseSection class="clients-logo">
    <h2 class="section-title title-2 text-center">Our clients</h2>

    <div class="banner">
      <img
        class="banner__desk"
        src="~/assets/images/clients-logos.png"
        alt="logos"
      />
      <img
        class="banner__mob"
        src="~/assets/images/clients-logos-mob.png"
        alt="logos"
      />
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.banner {
  margin: 40px -17px 0;
  line-height: 0;
  @media(max-width: 1250px) {
    margin-left: -7px;
    margin-right: -7px;
  }
  @media(max-width: $sm) {
    overflow: auto;
    margin: 24px -20px 0;
    padding-left: 20px;
    padding-right: 20px;
  }
  &__desk {
    @media(max-width: $sm) {
      display: none;
    }
  }
  &__mob {
    display: none;
    width: 900px;
    max-width: initial;
    max-height: initial;
    @media(max-width: $sm) {
      display: block;
    }
  }
}
</style>
