<script lang="ts" setup>
const page = {
  seoTitle: 'Expert Landing Page Optimization Services for Uplift',
  seoDescription:
    'Optimize landing pages with Conversion Rate Store’s expert services. Proven A/B testing and UX optimization for maximum revenue uplift.',
  title_h1: 'Landing Page Optimization Service with a <span>Results Guarantee</span>',
  howItWorksTitle:
    'Our Approach to Boosting Landing Page Performance',
  achiveTitle:
    'What do you want to achieve with Landing Page Optimization Services?'
}

useSeoMeta({
  title: page.seoTitle,
  description: page.seoDescription,
})

const faqsItems = [
  {
    "question": "What are landing page optimization services, and why are they important?",
    "answer": [
      "Landing page optimization services focus on improving a landing page’s performance to increase conversions, such as sign-ups, purchases, or leads. By analyzing user behavior, conducting A/B tests, and refining UX/UI and copy, a landing page optimization agency ensures your page aligns with user expectations and business goals.",
      "These services are crucial for maximizing ROI from paid traffic, reducing bounce rates, and enhancing user experience, ultimately driving higher revenue metrics for <a href='/ecommerce-conversion-rate-optimization-services'>eCommerce</a>, <a href='/saas-conversion-rate-optimization-services'>SaaS</a>, or lead-generation businesses."
    ]
  },
  {
    "question": "How does a landing page optimization agency differ from a general digital marketing agency?",
    "answer": [
      "A landing page optimization agency specializes in improving conversion rates through data-driven techniques like A/B testing, user behavior analysis, and UX/UI enhancements.",
      "Unlike general digital marketing agencies that focus on broader strategies (e.g., SEO, social media), a landing page optimization company hones in on optimizing specific pages to convert visitors into customers.",
      "This targeted approach ensures measurable uplifts in key performance metrics, offering a higher ROI compared to broader marketing efforts."
    ]
  },
  {
    "question": "How do you measure the success of landing page optimization services?",
    "answer": "Success is measured by tracking conversion rates, lead quality, bounce rates, engagement metrics, and sometimes sales or ROI."
  },
  {
    "question": "Do landing page optimization services include mobile optimization?",
    "answer": "A reputable landing page optimization company ensures all optimizations are responsive, providing seamless, fast, and frictionless experiences on mobile devices for higher conversions."
  },
  {
    "question": "What makes Conversion Rate Store’s landing page optimization services unique?",
    "answer": [
      "Our landing page optimization services stand out due to our scientific, data-driven approach and a 52% A/B test win rate. With a multidisciplinary team of over 50 experts, we cover nine essential CRO competencies, from data analysis to UX design.",
      "Unlike other agencies, we commit to guaranteed conversion uplifts and offer cost-efficient pricing, delivering 30-40% savings compared to top US/UK-based landing page optimization agencies."
    ]
  },
  {
    "question": "What metrics are tracked during landing page optimization?",
    "answer": [
      "We track key metrics like conversion rate, bounce rate, time on page, click-through rate, and revenue per user to assess landing page performance. Additionally, we use heatmaps, session recordings, and form analytics to understand user behavior.",
      "Our landing page optimization agency employs tools to ensure comprehensive data collection, enabling data-driven decisions to optimize landing page performance effectively."
    ]
  },
  {
    "question": "When is the right time to use landing page optimization services?",
    "answer": "If your landing pages have low conversion rates or high bounce rates, it’s a clear sign that optimization is needed. Pinpointing specific problems and experimenting with different variations to enhance user experience and boost conversions is crucial."
  },
  {
    "question": "How long does it take to see results from landing page optimization services?",
    "answer": [
      "Results from landing page optimization typically take 4-12 weeks, depending on traffic volume, test complexity, and the number of A/B tests conducted.",
      "At Conversion Rate Store, our landing page optimization services aim for a 4.5% monthly uplift in key metrics, with initial wins often visible within 25-32 days."
    ]
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
