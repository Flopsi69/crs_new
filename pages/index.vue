<script lang="ts" setup>
useHead({
  title: 'Performance-Based CRO Agency: Pay Only for Actual Results',
  meta: [{
    name: 'description',
    content: 'CRO agency with guaranteed growth results. Trusted to run A/B tests on 127+ million users for clients like Microsoft, Unicorns, YC startups'
  }],
  link: [
    { rel: 'canonical', href: 'https://conversionrate.store/' }
  ]
})
</script>

<template>
  <main class="main">
    <SectionHero />
    <SectionClientsLogo />
    <!-- TODO Marquee -->
    <SectionLeader />
    <SectionVideos />

    <BaseSection>
      <CtaGuaranted />
    </BaseSection>

    <!-- TODO solutions open -->
    <SectionSolutions />
    <SectionClientsResults />
    <SectionCompare />

    <BaseSection>
      <CtaKeyFactors />
    </BaseSection>

    <SectionCaseStudies />
    <SectionBenchmark />
    <SectionEstimate />
    <SectionCompetencies />

    <BaseSection>
      <CtaWinRate />
    </BaseSection>

    <SectionProcess />
    <SectionProducts />
    <SectionFeedbacks />
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
</style>
