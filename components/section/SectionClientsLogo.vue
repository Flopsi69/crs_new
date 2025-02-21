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
  margin-top: 40px;
  line-height: 0;
  @media(max-width: $sm) {
    margin-top: 24px;
  }
  &__desk {
    @media(max-width: $sm) {
      display: none;
    }
  }
  &__mob {
    display: none;
    margin: 0 auto;
    @media(max-width: $sm) {
      display: block;
    }
  }
}
</style>
