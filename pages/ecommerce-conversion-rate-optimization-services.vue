<script lang="ts" setup>
const page = {
  seoTitle: 'eCommerce CRO Services for Max Conversions',
  seoDescription:
    'Top eCommerce CRO agency to boost your sales. Expert strategies to optimize conversions and grow your online store effectively.',
  title_h1: 'eCommerce CRO Service with a <span>Results Guarantee</span>',
  howItWorksTitle:
    'eCommerce Conversion Rate Optimization Service with a Results Guarantee',
  achiveTitle:
    'What do you want to achieve with eCommerce  Conversion Optimization Services?'
}

useSeoMeta({
  title: page.seoTitle,
  description: page.seoDescription,
})


const faqsItems = [
  {
    "question": "What is the definition of CRO in ecommerce?",
    "answer": "Conversion Rate Optimization is the process of increasing the tendency and likelihood that users perform a specific action on a website or funnel. For ecommerce stores this can allow you to increase key metrics such as the number of conversions, the average order value, the average revenue per user, number of subscriptions, and total revenue, without relying on additional traffic."
  },
  {
    "question": "How to choose the right Ecommerce CRO consultant?",
    "answer": "To decide which eCommerce CRO consultant would be best for your eCommerce store, it can be helpful to consider that markets are constantly changing, and because of that you need a CRO agency that can help your business adjust to an array of different circumstances. Ideally, you want a team with expertise, frameworks, and strong communication all in one. Two metrics that can help you judge the quality of any eCommerce CRO consultant or team are: how many users do they run tests to per/month, and how often do their A/B tests win? Our eCommerce Optimization Agency runs tests to over 180/million users/month and has a 54% win rate, making us one of the best options for eCommerce stores that are serious about improving their conversion rates."
  },
  {
    "question": "How do you increase ecommerce conversion rates?",
    "answer": "To increase ecommerce conversion rates, focus on enhancing user experience, removing friction points and barriers to conversion, optimizing website design, streamlining the checkout process, and providing clear, compelling product descriptions. Personalizing the shopping experience, offering promotions or discounts, and employing retargeting strategies can also effectively boost conversion rates."
  },
  {
    "question": "Why is conversion rate not always the main metric for ecommerce stores?",
    "answer": "Conversion rate is crucial but not the only metric for ecommerce success. Focusing solely on conversion rate can overlook other important aspects like customer satisfaction, average order value, and customer lifetime value. Balancing conversion rate optimization with other key performance indicators (KPIs) ensures a holistic approach to ecommerce growth, catering to both short-term conversions and long-term customer relationships. This is a sensitive process with a lot of room for mistakes – such as triggering price elasticity – for example, it's not unusual to see a store that increases its conversion rate (demand) at the expense of decreasing AOV, thereby lowering ARPU and hurting overall revenues."
  },
  {
    "question": "Can I do conversion rate optimization for Ecommerce myself?",
    "answer": "If you're familiar with Google Analytics 4, Statistical Analysis, Consumer Psychology, and UX design then it is possible for you to do CRO for your store by yourself and achieve results. However, if not it's best that you seek out a CRO consultant who can increase your eCommerce conversions for you. Even mid-market companies often fail to execute A/B testing correctly or to an acceptable win rate. So it's best to recruit CRO Agency experts like us, who can guarantee you a win rate of 54%."
  },
  {
    "question": "How do we optimize E-commerce cart conversion?",
    "answer": [[
      "Data tracking setups audit",
      "Detect the bottleneck in a user journey",
      "Quantitative representative data on the reasons behind the bottleneck",
      "Pre-test analysis",
      "UI/UX and copy of alternative version",
      "Development and QA of A/B tests",
      "Statistical analysis and reporting on growth results"
    ]]
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
