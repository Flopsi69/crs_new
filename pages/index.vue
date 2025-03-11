<script lang="ts" setup>
import { faqs } from '~/configs';

const sanitizeText = (text: string | (string | string[])[]): string => {
  if (Array.isArray(text)) {
    return text.map(sanitizeText).join(" "); // Recursively sanitize nested arrays
  }
  return text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": sanitizeText(faq.question),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": sanitizeText(faq.answer)
    }
  }))
};

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
  link: [
    { rel: 'canonical', href: 'https://conversionrate.store/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema || {})
    }
  ]
});
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
