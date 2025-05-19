<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
  <div class="chart text-center">
    <div class="chart__title subtitle-3">
      {{ t('sectionHero.chart.title') }}
      <span class="nowrap">{{ t('sectionHero.chart.titleNowrap') }}</span>
    </div>

    <div class="chart__graph">
      <div
        class="chart__col"
        style="height: 34%"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="-100"
      >
        <div class="chart__col-name">
          {{ t('sectionHero.chart.columns.research.name') }}
        </div>
        <div class="chart__col-procent">+3%</div>
        <div class="chart__col-caption">
          {{ t('sectionHero.chart.columns.research.caption') }}
        </div>
      </div>

      <div
        class="chart__col"
        style="height: 56%"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="-50"
      >
        <div class="chart__col-name">
          {{ t('sectionHero.chart.columns.hypotheses.name') }}
        </div>
        <div class="chart__col-procent">+7%</div>
        <div class="chart__col-caption">
          {{ t('sectionHero.chart.columns.hypotheses.caption') }}
        </div>
      </div>

      <div
        class="chart__col"
        style="height: 78%"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset="-25"
      >
        <div class="chart__col-name">
          {{ t('sectionHero.chart.columns.validation.name') }}
        </div>
        <div class="chart__col-procent">+14%</div>
        <div class="chart__col-caption">
          {{ t('sectionHero.chart.columns.validation.caption') }}
        </div>
      </div>

      <div
        class="chart__col chart__col_last"
        style="height: 100%"
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="chart__col-name color-yellow">
          {{ t('sectionHero.chart.columns.scaling.name') }}
        </div>
        <div class="chart__col-procent">+22%</div>
        <div class="chart__col-caption">
          {{ t('sectionHero.chart.columns.scaling.caption') }}
        </div>
      </div>
    </div>

    <div class="chart__footer">
      {{ t('sectionHero.chart.footer') }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart {
  max-width: 500px;
  width: 100%;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(53, 37, 114, 0.20);
  padding: 24px 24px 0;
  overflow: hidden;
  @media(max-width: $md) {
    max-width: 100%;
  }
  @media(max-width: $sm) {
    padding: 16px 7px 0;
  }
  &__title {
    text-shadow: 0px 1px 0px rgba(53, 36, 118, 0.50);
    @media(max-width: $sm) {
      margin: auto;
      max-width: 90%;
      .lang-en & {
        text-align: left;
        max-width: 235px;
      }
      .lang-fr & {
        font-size: 16px;
      }
    }
  }
  &__graph {
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    text-align: center;
    height: 310px;
    padding-top: 32px;
    margin-top: 30px;
    @media(max-width: $lg) {
      height: 400px;
    }
    @media(max-width: $md) {
      height: 300px;
    }
    @media(max-width: $sm) {
      margin-top: 5px;
      padding-top: 24px;
      overflow: visible;
      height: 280px;
    }
  }
  &__col {
    position: relative;
    border-radius: 4px 4px 0px 0px;
    flex: 1;
    padding: 12px 5px 10px;
    border-top: 12px solid rgba(255, 255, 255, 0.50);
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.00) 100%);
    display: flex;
    flex-flow: column;
    align-items: center;
    &[data-aos]:not(.aos-init) {
      opacity: 0;
      // visibility: hidden;
      transform: translateY(60px);
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: -1px;
      height: 1px;
      width: 2000px;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.06);
      pointer-events: none;
    }
    &:last-child {
      background: linear-gradient(180deg, rgba(227, 170, 16, 0.50) 26.5%, rgba(99, 78, 183, 0.00) 90%);
      border-color: $yellow;
    }
    &-name {
      text-shadow: 0px 1px 0px rgba(53, 36, 118, 0.50);
      position: absolute;
      top: 0;
      padding-bottom: 20px;
      transform: translateY(-100%);
      @media(max-width: $sm) {
        font-size: 14px;
        padding-bottom: 12px;
        line-height: 24px;
        .lang-fr & {
          font-size: 12px;
          line-height: 18px;
          white-space: nowrap;
        }
      }
    }
    &-procent {
      color: rgba(255, 255, 255, 0.50);
      text-shadow: 0px 1px 0px rgba(53, 36, 118, 0.50);
      font-size: 30px;
      line-height: 1;
      font-weight: 700;
      .chart__col_last & {
        color: #fff;
      }
      @media(max-width: $sm) {
        font-size: 24px;
      }
    }
    &-caption {
      color: rgba(255, 255, 255, 0.70);
      text-shadow: 0px 1px 0px rgba(53, 36, 118, 0.50);
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      margin-top: auto;
    }
  }
  &__footer {
    position: relative;
    background: #423379;
    color: rgba(255, 255, 255, 0.70);
    text-shadow: 0px 1px 0px rgba(53, 36, 118, 0.50);
    font-size: 14px;
    font-weight: 400;
    padding: 10px;
    margin: 0 -24px;
    @media(max-width: $sm) {
      margin: 0 -7px;
    }
  }
}
</style>
