<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('seo.title'),
  description: t('seo.description'),
  ogTitle: t('seo.title'),
  ogDescription: t('seo.description'),
  ogUrl: 'https://conversionrate.store/',
  ogType: 'website',
  ogImage: 'https://conversionrate.store/images/big-logo.png', // Replace with actual OG image
  twitterCard: 'summary_large_image'
});

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
});
</script>

<template>
  <main class="main">
    <SectionHero />
    <SectionTrusted />
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

    <SectionCaseStudies />
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
</style>
