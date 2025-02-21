<script lang="ts" setup>
const faqs = [
  {
    question: "What is a CRO agency?",
    answer: "A CRO agency (Conversion Rate Optimization agency) helps its clients—eCommerce stores, SaaS platforms, apps, and lead generation sites—convert site visitors into buyers more effectively by optimizing UX/UI and copy. While there are many ways to develop effective CRO hypotheses, leading CRO agencies and top CRO experts rely on data analytics and UX research to create data-driven CRO hypotheses and optimal UX/UI/Copywriting solutions, which are then validated through experimentation methods like A/B testing."
  },
  {
    question: "What exactly does a CRO agency do?",
    answer: "A CRO agency (Conversion Rate Optimization agency) analyzes funnel performance and user behavior patterns, as well as user friction, concerns, and uncertainties to create hypotheses aimed at optimizing user experience to increase conversion rate and other relevant revenue metrics. These hypotheses are validated through various methods of experimentation like A/B testing.<br><br>Top CRO agencies and conversion consultants have the capacity to carry out various types of research, including user sentiment and perception analysis, segmented funnel performance analysis, user surveying, regression analysis, user testing, and user interviews."
  },
  {
    question: "Why should you hire a CRO agency?",
    answer: "Conversion rate optimization agencies help reduce Customer Acquisition Cost (CAC) by improving Conversion Rate (CvR) and Average Order Value (AOV). Therefore, hiring a CRO agency is a natural decision for businesses looking to gain a competitive advantage by improving CAC through a better user experience (UX). As an international CRO agency, we bring expertise from various markets to create a tailored optimization strategy for your business."
  },
  {
    question: "What differentiates ConversionRate.Store from other CRO agencies?",
    answer: "Leading CRO agencies are those with robust hypothesis research and validation capabilities that allow them to consistently deliver Conversion Rate (CvR) and Average Order Value (AOV) improvements for their clients. The best CRO agencies operate like a machine, ensuring a structured CRO process that guarantees specific, predetermined results. As a performance-based CRO marketing agency, we guarantee a measurable uplift in Conversion Rate (CvR) and Average Order Value (AOV), setting us apart from other CRO firms in the market."
  },
  {
    question: "How long does it take to see results from CRO efforts?",
    answer: "The speed at which Conversion Rate (CvR) and Average Order Value (AOV) improvements materialize depends on two factors: the strength of the CRO hypotheses and the number of A/B tests launched. Our science-backed CRO process generates hypotheses with a 52% A/B test win rate, meaning we win every other A/B test we launch. Our structured CRO programs ensure consecutive test launches, minimizing downtime between experiments. Typically, our clients see the first tangible improvements in key revenue metrics within the first 30 days of engagement. Additionally, we provide a detailed CRO audit and a result guarantee to ensure we meet the agreed-upon targets at each phase of the project. On average, our clients achieve around a 35% uplift in any given CRO project."
  },
  {
    question: "How much does it cost to implement CRO strategies?",
    answer: "The cost of CRO services depends on the CRO engagement model. Most conversion rate optimization agencies charge a fixed monthly fee with no result guarantee. However, leading CRO agencies offer performance-based pricing, where fees depend on guaranteed results or actual performance.<br><br>At ConversionRate.Store, we offer both a fully performance-based model—where fees are tied to achieved results—and a CRO collaboration model with a result guarantee. Pricing also depends on an agency’s capabilities in data analytics, UX research, UX/UI design, and copywriting—critical elements in producing strong data-driven CRO hypotheses for validation through A/B testing.<br><br>Top CRO agencies apply a scientific approach to CRO hypothesis creation and testing. As an international CRO agency, we leverage a cost-efficient remote CRO team, hiring the best CRO specialists across Europe. This structure allows us to pass on cost efficiencies to our clients."
  },
  {
    question: "How do I choose a CRO agency?",
    answer: "When selecting a CRO agency, assess its ability to deliver tangible results. The best way to verify an agency’s effectiveness is by securing a contractual result guarantee and opting for a performance-based CRO model where payment is linked to actual results. Look for verified client reviews, especially from businesses similar to yours. Additionally, demand evidence that the agency can execute a full scientific CRO cycle—from data engineering and analytics to UX research, hypothesis creation, UX/UI design, and validation through experimentation with statistically significant results."
  },
  {
    question: "What are some common techniques used in CRO?",
    answer: `A comprehensive CRO marketing agency methodology consists of the following procedures:
      <ul class="list-brand">
        <li class="list-brand__item">
          Data engineering setup to track user engagement and behavioral patterns at every touchpoint of the customer journey.
        </li>
        <li class="list-brand__item">
          Data analytics to determine funnel performance and identify user behavioral patterns.
        </li>
        <li class="list-brand__item">
          UX Research to understand user intents, drivers, concerns, uncertainties, and reasons preventing users from converting.
        </li>
        <li class="list-brand__item">
          Development of data- driven CRO hypotheses based on funnel performance, user behavior, and UX research findings.
        </li>
        <li class="list-brand__item">
          Design of the CRO hypotheses with the optimal data - driven UX / UI and copywriting solutions.
        </li>
        <li class="list-brand__item">
          Validation of the optimized funnel through experimentation methods like A / B testing.
        </li>
        <li class="list-brand__item">
          Post - test statistical analysis to ensure results are statistically significant and not a false positive or false negative.
        </li>
        <li class="list-brand__item">
          Post - test data analysis to confirm that improvements are directly attributed to the enhanced UX / UI / copywriting elements in the optimized funnel version and not influenced by external factors.A detailed CRO audit is often the first step in identifying which of these techniques will have the most impact on your business.
        </li>
      </ul>
      `
  },
  {
    question: "Do I need to redesign my entire website for CRO?",
    answer: "The smaller the UX/UI/copywriting change, the smaller the effect. The bigger the lift you want in your metrics, the more significant the changes you will need to implement. Sometimes, for a highly optimized site, a complete redesign is necessary to achieve a tangible and sustainable improvement in key metrics.<br><br>However, for most sites and products, incremental improvements to key transactional UX/UI/copywriting elements are a standard CRO specialist methodology. A good CRO expert will determine the optimal balance between iterative improvements and larger design overhauls based on data."
  },
  {
    question: "How do you measure the success of CRO?",
    answer: "The success of a CRO program is always measured by a tangible and sustainable increase in key revenue metrics like ARPU or CLTV. While CvR can be the ultimate revenue metric for lead generation sites, eCommerce businesses often make the mistake of focusing solely on CvR. While increasing CvR might seem like the right approach, it can be easily achieved by reducing prices by 50%—which is unlikely to improve profitability.<br><br>Instead, the focus should always be on ARPU or CLTV as the ultimate measure of a conversion rate optimization agency’s success. Before starting any CRO programs, always agree on the key revenue metrics and the methodology for measuring uplift to ensure alignment between business objectives and optimization efforts."
  }
];

const stripHtml = (html: string) => html.replace(/<\/?[^>]+(>|$)/g, "");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": stripHtml(faq.answer)
    }
  }))
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema)
    }
  ]
})

const activeFaq = ref<number | null>(0);
</script>

<template>
  <BaseSection
    class="faq"
    id="faq"
  >
    <h2 class="section-title title-2 text-center">FAQ</h2>

    <BasePlate
      class="faq__list"
      v-if="faqs.length"
    >
      <BasePlate
        solid-border
        v-for="(faq, index) of faqs"
        :key="index"
        class="faq__item"
        :class="{active: activeFaq === index}"
        @click="activeFaq = activeFaq === index ? null : index"
        background="white"
        v-auto-animate
      >
        <div class="faq__item-title subtitle-3">
          {{ faq.question }}
        </div>
        <div
          v-if="activeFaq === index"
          class="faq__item-content text color-secondary"
          v-html="faq.answer"
        ></div>
      </BasePlate>
    </BasePlate>
  </BaseSection>
</template>

<style lang="scss" scoped>
.faq {
  @media (max-width: $sm) {
    background-color: $bg--purple-light;
    padding: 40px 0;
  }
  &__list {
    padding: 30px;
    max-width: 800px;
    margin: 40px auto 0;
    @media(max-width: $sm) {
      margin-top: 24px;
      padding: 0;
      border-radius: 0;
    }
  }

  &__item {
    padding: 15px 24px;
    cursor: pointer;
    @media(max-width: $sm) {
      border-radius: 12px;
      padding: 12px 16px;
    }
    & + & {
      margin-top: 12px;
    }

    &-title {
      position: relative;
      padding-right: 40px;
      @media (max-width: $sm) {
        padding-right: 20px;
        font-size: 16px;
      }
      &:after, &:before {
        content: '';
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 3px;
        background: $purple;
        transition: .3s;
        @media (max-width: $sm) {
          right: 15px;
          width: 15px;
          height: 2px;
          right: 0;
        }
      }
      &:after {
        transform: translateY(-50%) rotate(90deg);
        .active & {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }

    &-content {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid $border;
      &:deep(ul) {
        padding-left: 20px;
        margin-top: 10px;
      }
    }
  }
}
</style>
