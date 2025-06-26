<script lang="ts" setup></script>

<template>
  <BaseSection class="expertise">
    <div class="expertise__row">
      <div class="expertise__title title-1">Expertise</div>
      <div class="expertise__descr">
        <p>
          Our core competence lies in researching user behavior and sentiment to
          extract user-generated insights and design CRO hypotheses for
          validation through experimentation.
        </p>
        <p>
          In 2024 the company grew to 45 employees, becoming one of the largest
          CRO firms in the world. Today, we focus on delivering CRO services
          with a results guarantee, while also creating and marketing our own
          products.
        </p>
      </div>
    </div>
    <div class="expertise__row">
      <div class="expertise__title title-1">Competitive Advantage</div>
      <div class="expertise__descr">
        <p>
          When searching for a competitive differentiator to gain a marketing
          advantage, we realized that our robust CRO process is reliable enough
          to deliver predictable, sustainable uplifts in our clients’ revenue
          metrics. Based on historical data, we built a statistical model that
          allows us to guarantee a minimum, predefined result from our CRO
          collaboration.
        </p>
        <p>
          We’re the only CRO agency that contractually commits to delivering a
          specific revenue metric uplift. There is no other agency that we know
          of that will sign under an uplift guarantee.
        </p>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.expertise {
  padding: 120px 0;
  &__row {
    display: flex;
    justify-content: space-between;;
    gap: 60px;
    & + & {
      position: relative;
      padding-top: 120px;
      margin-top: 120px;
      &:before {
        content: '';
        position: absolute;
        left: -200%;
        right: -200%;
        top: 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.10);
      }
    }
  }
  &__descr {
    max-width: 670px;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    p {
      & + p {
        margin-top: 20px;
      }
    }
  }
}
</style>
