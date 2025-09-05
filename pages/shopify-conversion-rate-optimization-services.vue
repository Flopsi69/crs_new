<script lang="ts" setup>
const page = {
  seoTitle: 'Shopify CRO Services to Boost Your Store',
  seoDescription:
    'Elevate your Shopify store with expert CRO services. Increase conversions with data-driven strategies tailored to your eCommerce needs.',
  hero: {
    title: 'Shopify CRO Service with a <span>Results Guarantee</span>',
    caption: 'Estimate the conversion rate uplift for your Shopify store we’ll commit to — before you even sign.'
  },
  howItWorks: {
    title: 'Our Shopify Optimization Process for High Conversion Rates'
  },
  achive: {
    title: 'What do you want to achieve with Shopify Conversion Optimization Services?',
    list: {
      cvr: [
        'The core goal of Shopify CRO is to elevate your CvR and ARPU through Shopify funnel optimization and strategic enhancements to your store’s performance.',
        'We accomplish this by minimizing friction at critical stages of the customer journey, addressing user hesitations, and strengthening conversion drivers.',
        'Our approach centers on identifying drop-off points and implementing A/B testing for Shopify to validate UX improvements, delivering high-impact UI and copy optimizations that boost average order value and drive measurable results.'
      ],
      cac: [
        'CAC for your Shopify store is driven by two key factors: the cost of attracting users (CPC) and your CvR.',
        'Shopify Conversion Rate Optimization enhances your store’s funnel efficiency, boosting CvR to make customer acquisition more cost-effective. ',
        'By optimizing your Shopify funnel, CRO enables you to convert more visitors from existing traffic, significantly reducing your CAC.'
      ],
      roas: [
        "ROAS relies on funnel efficiency and the value of each conversion.",
        "Our Shopify CRO services enhance ROAS by optimizing the funnel for paid traffic, starting with high-converting landing pages and refining every step of the customer journey.",
        "Through Shopify optimization services, we also increase average order value by encouraging higher-value and higher-volume purchases, ensuring your Shopify store achieves stronger profitability."
      ],
      cltv: [
        'CLTV in Shopify is driven by retention, repeat purchase rates, and the total value of customer transactions over time. ',
        'Our Shopify CRO Agency leverages User Experience Optimization (UXO) to create a seamless, engaging customer journey that fosters loyalty, drives repeat purchases, and increases order value through strategic upsell and cross-sell strategies. ',
        'We maximize Shopify conversion rates and long-term revenue growth.'
      ]
    }
  },
  compare: {
    title: 'How <span>Conversion Rate Store</span> <br />compare to other Shopify CRO&nbsp;agencies',
    comprateTableTitle: 'Other Shopify CRO Agencies'
  }
}

useSeoMeta({
  title: page.seoTitle,
  description: page.seoDescription,
})

const faqsItems = [
  {
    "question": "What is Shopify CRO and why is it important for my store?",
    "answer": "Shopify CRO (Conversion Rate Optimization) involves optimizing your Shopify store to improve the percentage of visitors who complete a desired action, such as making a purchase. It's crucial because even small improvements in conversion rates can significantly boost your revenue, turning more visitors into paying customers without increasing traffic."
  },
  {
    "question": "How can Shopify CRO agency help my e-commerce business?",
    "answer": "Shopify CRO services focus on analyzing your store's user experience, identifying areas for improvement, and implementing strategies to increase conversions. This includes optimizing product pages, checkout processes, site speed, and more, all aimed at making it easier for customers to make a purchase and ultimately increasing your sales and revenue."
  },
  {
    "question": "What are the key areas of Shopify that CRO services improve?",
    "answer": [
      "Key areas Shopify CRO services improve include:",
      [
        "Product Page Optimization: Enhancing product descriptions, images, and calls to action to encourage more purchases.",
        "Checkout Process: Simplifying the checkout process to reduce cart abandonment.",
        "Site Speed: Ensuring your site loads quickly to keep visitors engaged.",
        "User Experience (UX): Streamlining navigation, improving mobile responsiveness, and making your store easy to use.",
        "A/B Testing: Experimenting with different elements to find what works best for your audience."
      ]
    ]
  },
  {
    "question": "How long does it take to see results from Shopify CRO services?",
    "answer": "Results can vary, but typically, you can start seeing improvements within 4-6 weeks. It depends on the complexity of the optimizations, the amount of traffic your store receives, and how much testing and tweaking is needed."
  },
  {
    "question": "What is a good conversion rate for the Shopify store?",
    "answer": "A good conversion rate for a Shopify store generally falls between 1% to 3%. However, the ideal conversion rate can vary depending on several factors, including your niche, traffic quality, product offerings, and the stage of your business."
  },
  {
    "question": "What makes ConversionRate.Store's Shopify CRO agency different?",
    "answer": [
      "At ConversionRate.Store, we specialize in creating custom Shopify CRO strategies based on your unique store data and customer behavior. Our team uses a data-driven approach to identify pain points in your user journey and implement proven tactics to improve conversions.",
      "Our team of CRO experts will help you take advantage of all of the features of Shopify and Shopify Plus so that you can build the most perfectly optimized eCommerce store."
    ]
  },
  {
    "question": "How to Identify the Right Shopify CRO Agency?",
    "answer": [
      "Selecting the ideal Shopify CRO agency involves evaluating their expertise, track record, and commitment to results.",
      "Look for an agency with a proven history of boosting conversion rates, like Conversion Rate Store, which contractually guarantees uplift in key metrics such as CvR or ARPU. Ensure we use a data-driven approach with Shopify funnel optimization, conduct A/B testing for Shopify, and have industry recognition, such as being named CRO Agency of the Year." ,
      "Check our case studies and client testimonials to confirm their ability to deliver measurable results for Shopify stores."
    ]
  },
  {
    "question": "How much does Shopify Conversion rate optimization cost?",
    "answer": [
      "The cost of Shopify CRO services varies depending on the scope and complexity of your project.",
      "Pricing models typically include fixed project rates, monthly retainers, or hourly fees. Basic Shopify audits and small optimizations might start at a few hundred dollars, whereas comprehensive ongoing CRO programs involving UX redesign, continuous A/B testing, and data analysis can range from several thousand dollars per month.",
      "At Conversion Rate Store, our remote model allows us to offer fees up to 40% lower than other leading US and European agencies while guaranteeing a specific uplift in revenue metrics"
    ]
  },
  {
    "question": "What is the best Shopify CRO strategy for 2025?",
    "answer": [
      "The best Shopify CRO strategy for 2025 focuses on personalization, mobile optimization, and data-driven experimentation. Key tactics include leveraging AI-powered product recommendations, streamlining checkout processes, and optimizing for faster page load times.",
      "A/B testing high-impact elements like CTAs, product pages, and pricing displays remains critical. Additionally, incorporating video content and user-generated reviews can boost trust and engagement.",
      "At Conversion Rate Store, we combine advanced analytics with tailored strategies to create a scalable CRO plan that keeps your Shopify store ahead of the curve."
    ]
  },
  {
    "question": "Can Shopify CRO improve mobile conversions?",
    "answer": [
      "Yes, Shopify CRO can significantly improve mobile conversions by addressing mobile-specific pain points. Optimizing for faster load times, responsive design, and intuitive navigation ensures a seamless user experience.",
      "Simplifying mobile checkout processes, enhancing product visuals, and implementing thumb-friendly CTAs can lift conversion rates.",
      "Our team at Conversion Rate Store uses data-driven insights to identify mobile user behavior and apply targeted optimizations, resulting in higher mobile conversions and increased revenue for your Shopify store."
    ]
  }
]
</script>

<template>
  <main class="main">
    <SectionServicesHero :content="page.hero" />
    <SectionTrusted />
    <SectionHowItWorks :content="page.howItWorks" />
    <SectionAchive :content="page.achive" />
    <SectionCompareCroServices :content="page.compare" />
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
