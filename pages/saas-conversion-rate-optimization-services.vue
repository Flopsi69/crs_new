<script lang="ts" setup>
const page = {
  seoTitle: 'SaaS CRO Services for Higher Conversions',
  seoDescription:
    'Optimize your SaaS platform with our CRO services. Drive sign-ups and retention with expert strategies tailored for SaaS growth.',
  title_h1: 'SaaS CRO Service with a <span>Results Guarantee</span>',
  howItWorksTitle:
    'Saas Conversion Rate Optimization Service with a Results Guarantee',
  achiveTitle:
    'What do you want to achieve with SaaS  Conversion Optimization Services?'
}

useSeoMeta({
  title: page.seoTitle,
  description: page.seoDescription,
})

const faqsItems = [
  {
    "question": "What are SaaS lead conversion rates, and how can I improve them?",
    "answer": "SaaS lead conversion rates represent the percentage of leads that become paying customers. To improve these rates, focus on targeted marketing, optimizing your onboarding process, and providing personalized experiences that address user needs."
  },
  {
    "question": "What is a SaaS CRO audit, and why is it important?",
    "answer": "A SaaS CRO audit is a comprehensive analysis of your conversion processes to identify areas for improvement. It helps pinpoint weaknesses in your sales funnel, allowing you to implement strategies that enhance user experience and boost conversion rates."
  },
  {
    "question": "How does conversion rate optimization for SaaS impact my business growth?",
    "answer": "Conversion rate optimization for SaaS directly influences business growth by increasing the percentage of visitors who take desired actions, such as signing up for free trials or upgrading to paid plans. This leads to higher revenue without needing to increase traffic significantly."
  },
  {
    "question": "What is the SaaS quick ratio, and how does it relate to conversion rates?",
    "answer": "The SaaS quick ratio measures the efficiency of customer acquisition relative to churn. A higher quick ratio indicates that you are gaining customers faster than losing them, which can be improved through effective conversion strategies that retain users and convert leads."
  },
  {
    "question": "How can I improve my close rate in the SaaS industry?",
    "answer": "To improve your close rate, ensure that your sales team is well-trained in addressing customer objections and effectively demonstrating product value. Implementing follow-up strategies and offering personalized demos can also significantly enhance your close rate."
  },
  {
    "question": "What is the average SaaS Free Trial Conversion Rate, and how can I exceed it?",
    "answer": "The average SaaS Free Trial Conversion Rate is around 9.24%. To exceed this benchmark, focus on providing an exceptional onboarding experience, offering clear value propositions during the trial period, and maintaining engagement through personalized communication to encourage upgrades."
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
