<script lang="ts" setup>
const { t, locale } = useI18n()
const i18nHead = useLocaleHead()
const scrollToElement = useSmoothScroll()

useSeoMeta({
  title: t('seo.title'),
  description: t('seo.description'),
  ogTitle: t('seo.title'),
  ogDescription: t('seo.description'),
  ogUrl: 'https://conversionrate.store/',
  ogType: 'website',
  ogImage: 'https://conversionrate.store/images/big-logo.png', // Replace with actual OG image
  twitterCard: 'summary_large_image',
})

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
  },
  bodyAttrs: {
    class: 'lang-' + locale.value,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}))

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
    <SectionTrusted />
    <SectionLeader />
    <SectionClientVideos />

    <BaseSection>
      <CtaLimitedOffer />
    </BaseSection>

    <SectionFounderVideos />

    <BaseSection>
      <CtaGuaranted />
    </BaseSection>

    <SectionProcess />

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
