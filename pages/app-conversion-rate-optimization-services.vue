<script lang="ts" setup>
const page = {
  seoTitle: 'App CRO Services to Boost User Engagement',
    seoDescription:
      'Boost your app’s performance with our CRO services. Improve user engagement and conversions with data-driven optimization strategies.',
    title_h1: 'App CRO Service with a <span>Results Guarantee</span>',
    howItWorksTitle:
      'App Conversion Rate Optimization Service with a Results Guarantee',
    achiveTitle:
      'What do you want to achieve with App  Conversion Optimization Services?'
}

useSeoMeta({
  title: page.seoTitle,
  description: page.seoDescription,
})


const faqsItems = [
  {
    "question": "Why is CRO important for my app?",
    "answer": "CRO enhances user engagement, boosts retention, and maximizes revenue by optimizing your app's design, functionality, and user journey to encourage conversions."
  },
  {
    "question": "What specific metrics do you optimize for apps?",
    "answer": "We focus on key metrics like conversion rates, user retention, in-app purchases, sign-up rates, session duration, and engagement with critical features."
  },
  {
    "question": "What is the process to optimize app conversion to paid?",
    "answer": [[
      "Data tracking setup health check.",
      "Detect the most serious conversion to subscription bottleneck and get accurate and quantitative data on the cause of it.",
      "Prepare a new version of the UI/UX and copywriting.",
      "Build an A/B test and do rigid quality assurance.",
      "Calculate the results!"
    ]]
  },
  {
    "question": "How do you identify areas for improvement in my app?",
    "answer": "We conduct thorough audits using analytics, user behavior tracking, heatmaps, and A/B testing to pinpoint friction points and opportunities for optimization."
  },
  {
    "question": "What tools do you use for app CRO?",
    "answer": "We leverage industry-standard tools like Google Analytics, Mixpanel, Hotjar, Optimizely, and proprietary solutions to analyze and optimize app performance."
  },
  {
    "question": "How can I get started with your app CRO services?",
    "answer": "Contact us via our website to schedule a consultation. We'll assess your app's needs and develop a customized CRO plan to drive growth."
  },
  {
    "question": "What is conversion to subscription?",
    "answer": "If you have just started a career in app development, you should learn not only the most important metrics such as conversion to subscription and their definitions, but also their interrelatedness, ways, processes, tactics, strategies to grow it and the main principles of data tracking, so that you're able to understand the optimization efforts. Schedule a consultation with our best optimization managers to get detailed answers to your specific questions."
  }
]
</script>

<template>
  <main class="main">
    <SectionServicesHero :title="page.title_h1" />
    <SectionTrusted />
    <SectionHowItWorks :title="page.howItWorksTitle" />
    <SectionAchive :title="page.achiveTitle" />
    <SectionCompareCroServices />
    <SectionClientVideos />
    <SectionCaseStudies>
      <CtaRecieveAccess
        form-id="cro-service_newsletter_0"
        class="cta"
      />
    </SectionCaseStudies>
    <SectionProcess />
    <SectionFAQ :items="faqsItems" />
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

#testimonials {
  :deep(.author) {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    background: linear-gradient(180deg, #392DAC 0%, #5E4EDF 100%);
    backdrop-filter: blur(1px);
  }
  :deep(.video__title span) {
    background: linear-gradient(180deg, #392DAC 0%, #5E4EDF 100%);
  }
}

#case-studies {
  :deep(.filter__item.active) {
    background-color: #3C2FB0;
  }
  :deep(.filter__amount), :deep(.case__type), :deep(.result__link), :deep(.result__value) {
    color: #3C2FB0;
  }
}

#our-scientific-cro_uxo-process {
  :deep(.step__num) {
    background-color: #3C2FB0;
  }
}

#faq {
  margin-top: -60px;
}

.cta {
  margin-top: 60px;
  background: repeating-linear-gradient(to right, rgba(255, 255, 255, 0.11) 0, rgba(255, 255, 255, 0.11) 0.5px, transparent 0.5px, transparent 100px), linear-gradient(180deg, #392DAC 0%, #5E4EDF 100%);
  &:before {
    display: none;
  }
  &:after {
    background-image: url("data:image/svg+xml,%3Csvg width='426' height='327' viewBox='0 0 426 327' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3303_2056)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M106.89 139.973C-18.5783 142.983 -2.58293 416.726 -3.90335 455.996L448.903 440.689V26.7516C372.387 7.72904 375.145 -12.0867 345.178 28.5687L279.505 155.377C224.372 204.925 233.737 143.942 106.89 139.973Z' fill='%237563E1' fill-opacity='0.24'/%3E%3Cpath d='M-1.80762 387.121C-0.464415 347.254 -0.980933 142.008 103.251 139.951C233.541 137.379 244.4 241.775 310.156 97.4306C375.911 -46.9139 369.654 15.0669 448.903 29.2124' stroke='%23A698EE' stroke-width='1.2'/%3E%3Cg filter='url(%23filter0_f_3303_2056)'%3E%3Cellipse cx='308' cy='101.5' rx='23' ry='25.5' fill='white' fill-opacity='0.24'/%3E%3C/g%3E%3Ccircle cx='308' cy='101' r='7' fill='%23F1C345' stroke='%23A698EE' stroke-width='2'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_3303_2056' x='245' y='36' width='126' height='131' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='20' result='effect1_foregroundBlur_3303_2056'/%3E%3C/filter%3E%3CclipPath id='clip0_3303_2056'%3E%3Crect width='426' height='327' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  }
  @media(max-width: $sm) {
    margin-top: 42px;
  }
}
</style>
