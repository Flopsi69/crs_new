<script lang="ts" setup>
useSeoMeta({
  title: 'About Conversion Rate Store',
  description: 'Founded in 2017, ConversionRate.Store specializes in data-driven CRO strategies to boost conversions and optimize website performance.',
})
</script>

<template>
  <main class="main">
    <AboutUsBlurLine />
    <SectionAboutUsHero />
    <SectionAboutUsExpertise />
    <SectionAboutUsPrinciples />
  </main>
</template>

<style lang="scss" scoped>
.main {
  // display: grid;
  // gap: 90px;
  // margin-bottom: 90px;
  // @media(max-width: $md) {
  //   gap: 60px;
  // }
  // @media(max-width: $sm) {
  //   margin-bottom: 0;
  // }
}
.leader {
  padding: 120px 0;
  background: $bg--purple-dark;
}
</style>
