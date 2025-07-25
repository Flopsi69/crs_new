<script lang="ts" setup>
useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<template>
  <main class="main">
    <SectionHeroEcommerceLp />
    <SectionTrustedEcommerceLp />
    <SectionLeader />
    <SectionClientVideos />
    <SectionFounderVideos />

    <BaseSection>
      <CtaGuaranted />
    </BaseSection>

    <SectionProcess />

    <BaseSection>
      <CtaLimitedOffer />
    </BaseSection>

    <SectionCaseStudies>
      <CtaRecieveAccess class="cta" />
    </SectionCaseStudies>
    <SectionCompare />
    <SectionSolutions />
    <SectionClientsResults />

    <!-- TODO: remove cta if will not use -->
    <!-- <BaseSection>
      <CtaKeyFactors />
    </BaseSection> -->

    <SectionCompetencies />

    <BaseSection>
      <CtaWinRate />
    </BaseSection>

    <SectionProducts />
    <SectionFeedbacks />
    <SectionBenchmark />
    <SectionEstimate />
    <SectionFAQ />
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  gap: 90px;
  margin-bottom: 90px;
  @media(max-width: $md) {
    gap: 60px;
  }
  @media(max-width: $sm) {
    margin-bottom: 0;
  }
}

.cta {
  margin-top: 60px;
  @media(max-width: $sm) {
    margin-top: 42px;
  }
}
</style>
