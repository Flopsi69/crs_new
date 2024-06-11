<script lang="ts" setup></script>

<template>
  <div class="chart text-center">
    <div class="chart__title subtitle-3">
      Our Clients' Average Revenue
      <span class="nowrap">Uplift in the first 4 months</span>
    </div>

    <div class="chart__image">
      <img
        src="img/heroChart.png"
        alt="Chart"
      />
    </div>

    <div class="chart__footer">
      *Based on performance data from our CRO projects&nbsp;for&nbsp;clients
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
      text-align: left;
      max-width: 235px;
      margin: auto;
    }
  }
  &__image {
    line-height: 0;
    margin-bottom: -40px;
    margin-top: 30px;
    @media(max-width: $sm) {
      margin-top: 5px;
      margin-bottom: -6vw;
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
