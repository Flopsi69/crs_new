<script lang="ts" setup></script>

<template>
  <BaseSection class="expertise">
    <div class="expertise__list">
      <div class="expertise__col">
        <div class="expertise__title title-1">Core Expertise</div>
        <div class="expertise__descr">
          <p>
            Our core expertise lies in analyzing user behavior and sentiment,
            designing CRO hypotheses, and validating them through
            experimentation.
          </p>
          <p>
            In 2024 the company grew to 45 employees, becoming one of the
            largest CRO firms in the world. Today, we focus on delivering
            comprehensive CRO services with a results guarantee, while also
            creating and marketing our own apps.
          </p>
        </div>
      </div>
      <div class="expertise__col">
        <div class="expertise__title title-1">Competitive Advantage</div>
        <div class="expertise__descr">
          <p>
            When searching for a competitive differentiator to gain a marketing
            advantage, we realized that our robust CRO process is reliable
            enough to deliver predictable, sustainable uplifts in our clients’
            revenue metrics. Based on historical data, we built a statistical
            model that allows us to guarantee a minimum, predefined result from
            our CRO collaboration.
          </p>
          <p>
            Our core differentiator is that we contractually commit to
            delivering a predetermined revenue metric uplift for our clients.
          </p>
        </div>
      </div>
    </div>

    <BasePlate class="results">
      <div class="results__subtitle subtitle-2">
        We sell result, not service
      </div>
      <div class="results__title">
        We contractually commit to delivering a predetermined revenue metric
        uplift for our clients.
      </div>
    </BasePlate>
  </BaseSection>
</template>

<style lang="scss" scoped>
.expertise {
  padding: 120px 0 60px;
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }
  &__descr {
    margin-top: 44px;
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

.results {
  margin-top: 120px;
  padding: 60px;
  color: #fff;
  background: linear-gradient(90deg, #5543AC 0%, #3A249F 100%);
  &:after {
    content: "";
    position: absolute;
    pointer-events: none;
    right: 0;
    bottom: 0;
    width: 430px;
    top: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='426' height='327' viewBox='0 0 426 327' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3303_2056)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M106.89 139.973C-18.5783 142.983 -2.58293 416.726 -3.90335 455.996L448.903 440.689V26.7516C372.387 7.72904 375.145 -12.0867 345.178 28.5687L279.505 155.377C224.372 204.925 233.737 143.942 106.89 139.973Z' fill='%237563E1' fill-opacity='0.24'/%3E%3Cpath d='M-1.80762 387.121C-0.464415 347.254 -0.980933 142.008 103.251 139.951C233.541 137.379 244.4 241.775 310.156 97.4306C375.911 -46.9139 369.654 15.0669 448.903 29.2124' stroke='%23A698EE' stroke-width='1.2'/%3E%3Cg filter='url(%23filter0_f_3303_2056)'%3E%3Cellipse cx='308' cy='101.5' rx='23' ry='25.5' fill='white' fill-opacity='0.24'/%3E%3C/g%3E%3Ccircle cx='308' cy='101' r='7' fill='%23F1C345' stroke='%23A698EE' stroke-width='2'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_3303_2056' x='245' y='36' width='126' height='131' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='20' result='effect1_foregroundBlur_3303_2056'/%3E%3C/filter%3E%3CclipPath id='clip0_3303_2056'%3E%3Crect width='426' height='327' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-size: contain;
    background-position: right 35px;
    background-repeat: no-repeat;
  }
  &__subtitle {
    color: $gold;
    line-height: 1.4;
  }
  &__title {
    font-size: 32px;
    line-height: 40px;
    margin-top: 24px;
    max-width: 780px;
  }
}
</style>
