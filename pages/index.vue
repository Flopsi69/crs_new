<script lang="ts" setup>
const { locales, setLocale } = useI18n()

useSeoMeta({
  title: 'Performance-Based CRO Agency: Pay Only for Actual Results',
  description: 'CRO agency with guaranteed growth results. Trusted to run A/B tests on 127+ million users for clients like Microsoft, Unicorns, YC startups',
  ogTitle: 'Performance-Based CRO Agency: Pay Only for Actual Results',
  ogDescription: 'CRO agency with guaranteed growth results. Trusted to run A/B tests on 127+ million users for clients like Microsoft, Unicorns, YC startups',
  ogUrl: 'https://conversionrate.store/',
  ogType: 'website',
  ogImage: 'https://conversionrate.store/images/big-logo.png', // Replace with actual OG image
  twitterCard: 'summary_large_image'
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'canonical', href: 'https://conversionrate.store/' },
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
    <section>
      <button
        v-for="locale in locales"
        @click="setLocale(locale.code)"
      >
        {{ locale.name }}
      </button>
      <h4>{{ $t('welcome') }}</h4>
    </section>
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
