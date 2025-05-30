<script lang="ts" setup>
const { t } = useI18n()
const scrollToElement = useSmoothScroll()

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

const route = useRoute()

onMounted(() => {
  if (route.hash === '#testimonials') {
    scrollToElement('#testimonials', 'center')
  }
})
</script>

<template>
  <main class="main">
    <SectionHero />

    <SectionClientsLogoOld />
    <SectionLeaderOld />
    <SectionFounderVideos />

    <BaseSection>
      <CtaGuaranted />
    </BaseSection>

    <SectionSolutionsOld />
    <SectionClientsResults />
    <SectionCompare />

    <BaseSection>
      <CtaKeyFactors />
    </BaseSection>

    <SectionCaseStudies>
      <CtaRecieveAccess class="cta" />
    </SectionCaseStudies>
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

.cta {
  margin-top: 60px;
  @media(max-width: $sm) {
    margin-top: 42px;
  }
}
</style>
