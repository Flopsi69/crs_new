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
      <div class="results__info">
        <div class="results__subtitle subtitle-2">
          We sell result, not service
        </div>
        <div class="results__title">
          We contractually commit to delivering a predetermined revenue metric
          uplift for our clients.
        </div>
      </div>
    </BasePlate>
  </BaseSection>
</template>

<style lang="scss" scoped>
.expertise {
  padding: 120px 0 60px;
  @media(max-width: $md) {
    padding: 60px 0;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
    @media(max-width: $md) {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }
  &__title {
    @media(max-width: $sm) {
      font-size: 28px;
      line-height: 1.3;
    }
  }
  &__descr {
    margin-top: 44px;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    @media(max-width: $md) {
      margin-top: 24px;
    }
     @media(max-width: $sm) {
      font-size: 18px;
      line-height: 1.5;
    }
    p {
      & + p {
        margin-top: 20px;
        @media(max-width: $sm) {
          margin-top: 15px;
        }
      }
    }
  }
}

.results {
  margin-top: 120px;
  padding: 60px;
  color: #fff;
  background: linear-gradient(90deg, #5543AC 0%, #3A249F 100%);
  @media(max-width: $md) {
    margin-top: 60px;
  }
  @media(max-width: $sm) {
    padding: 32px 20px 104px;
  }
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
    @media(max-width: $md) {
      width: 300px;
      background-position: right 125%;
    }
    @media(max-width: $sm) {
      background-image: url("data:image/svg+xml,%3Csvg width='335' height='198' viewBox='0 0 335 198' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3698_1988)'%3E%3Cg filter='url(%23filter0_d_3698_1988)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M109.89 139.973C-15.5783 142.983 0.417067 416.726 -0.903348 455.996L451.903 440.69V26.7518C375.387 7.72929 378.145 -12.0864 348.178 28.569L282.505 155.378C227.372 204.926 236.737 143.943 109.89 139.973Z' fill='%237563E1' fill-opacity='0.24' shape-rendering='crispEdges'/%3E%3C/g%3E%3Cpath d='M1.19238 387.121C2.53559 347.254 2.01907 142.008 106.251 139.95C236.541 137.379 247.4 241.774 313.156 97.4304C378.911 -46.9141 372.654 15.0666 451.903 29.2122' stroke='%23A698EE' stroke-width='1.2'/%3E%3C/g%3E%3Cg filter='url(%23filter1_f_3698_1988)'%3E%3Cellipse cx='311' cy='101.5' rx='23' ry='25.5' fill='white' fill-opacity='0.24'/%3E%3C/g%3E%3Ccircle cx='311' cy='101' r='7' fill='%23F1C345' stroke='%23A698EE' stroke-width='2'/%3E%3Cdefs%3E%3Cfilter id='filter0_d_3698_1988' x='-12.9512' y='-11.2041' width='476.854' height='475.201' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='-4'/%3E%3CfeGaussianBlur stdDeviation='6'/%3E%3CfeComposite in2='hardAlpha' operator='out'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_3698_1988'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_3698_1988' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter1_f_3698_1988' x='248' y='36' width='126' height='131' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='20' result='effect1_foregroundBlur_3698_1988'/%3E%3C/filter%3E%3CclipPath id='clip0_3698_1988'%3E%3Crect width='457' height='456' fill='white' transform='translate(-3)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      background-position: right bottom;
      width: 100%;
    }
  }
  &__info {
    position: relative;
    z-index: 1;
    max-width: 780px;
    @media(max-width: $md) {
      max-width: 70%;
    }
    @media(max-width: $sm) {
      max-width: 100%;
    }
  }
  &__subtitle {
    color: $gold;
    line-height: 1.4;
    text-transform: uppercase;
    @media(max-width: $sm) {
      font-size: 16px;
    }
  }
  &__title {
    font-size: 32px;
    line-height: 40px;
    margin-top: 24px;
    @media(max-width: $sm) {
      margin-top: 12px;
      font-size: 24px;
      line-height: 32px;
      padding-right: 20px;
    }
    @media(max-width: 450px) {
      padding-right: 0;
    }
  }
}
</style>
