<script lang="ts" setup>
const { openModal } = useModal();
const { t } = useI18n();
</script>

<template>
  <BaseSection class="compare text-center">
    <h2 class="compare__title section-title title-1">
      How <span>Conversion Rate Store</span> <br />
      compare to there CRO&nbsp;services
    </h2>

    <button
      class="compare__button button button_yellow compare__button_desk"
      @click="openModal({ id: 'cro-services_compare_0' })"
    >
      Estimate Your CvR Uplift
    </button>

    <div class="compare__inner">
      <div class="compare__table table table_main">
        <div class="table__head">
          <img
            src="img/logo.svg"
            alt="logo"
            height="38"
          />
        </div>
        <div class="table__cell table__cell-1">
          <div class="table__label">Result Guarantee</div>
          <div class="table__descr">
            We contractually commit to delivering a specific, predetermined
            uplift in a key revenue metric (e.g., revenue per user or conversion
            rate), enabling our clients to confidently forecast return on
            investment and ensure a profitable project outcome
          </div>
        </div>
        <div class="table__cell table__cell-2">
          <div class="table__label">Fee</div>
          <div class="table__descr">
            Our remote employment model lets us hire top CRO talent across
            Europe at competitive rates — and pass those savings on to our
            clients, with fees up to 40% lower than those of other leading US
            and European CRO agencies.
          </div>
        </div>
        <div class="table__cell table__cell-3">
          <div class="table__label">Recognition</div>
          <div class="table__descr">
            We’re an award-winning CRO agency—named CRO Agency of the Year 2024
            in Europe, ranked among the top 3 CRO agencies globally by Clutch,
            and recognized by multiple industry awards, including the
            prestigious Experimentation Elite.
          </div>
        </div>
      </div>

      <div class="compare__table table">
        <div class="table__head subtitle-2">Other CRO services</div>
        <div class="table__cell table__cell-1">
          <div class="table__label">Result Guarantee</div>
          <div class="table__descr">
            No other CRO agency we know of offers a contractual commitment to a
            specific, predetermined uplift in a key revenue metric—leaving you
            with unreliable expectations and an undefined return on investment.
          </div>
        </div>
        <div class="table__cell table__cell-2">
          <div class="table__label">Fee</div>
          <div class="table__descr">
            Other leading US and European CRO agencies charge significantly
            higher fees — without offering an uplift guarantee or certainty of a
            positive return on investment.
          </div>
        </div>
        <div class="table__cell table__cell-3">
          <div class="table__label">Recognition</div>
          <div class="table__descr">
            Only a handful of CRO agencies in the US and Europe are
            award-winning, but their fees are often higher than ours due to
            local hiring—while our remote model gives us access to top talent
            across Europe at competitive rates, allowing us to pass the savings
            on to our clients.
          </div>
        </div>
      </div>
    </div>

    <button
      class="compare__button button button_yellow compare__button_mob"
      @click="openModal({ id: 'cro-services_compare_0' })"
    >
      Estimate Your CvR Uplift
    </button>
  </BaseSection>
</template>

<style lang="scss" scoped>
.compare {
  @media(max-width: $sm) {
    margin-top: -5vw;
  }
  &__title {
    max-width: 630px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    @media(max-width: $sm) {
      font-size: 28px;
      line-height: 1.3;
    }
    span {
      color: #3C2FB0;
    }
  }
  &__button {
    margin-top: 32px;
    &_desk {
      @media(max-width: $sm) {
        display: none;
      }
    }

    &_mob {
      display: none;
      @media(max-width: $sm) {
        display: inline-flex;
        align-items: center;
      }
    }
  }
  &__inner {
    display: flex;
    justify-content: center;
    gap: 44px;
    margin-top: 64px;
    @media(max-width: $sm) {
      gap: 0;
      overflow-x: auto;
      margin: 32px -20px 0;
      padding: 0 20px;
    }
    @media(max-width: 530px) {
      justify-content: flex-start;
    }
  }
}

.table {
  max-width: 390px;
  width: 100%;
  border-radius: 32px;
  overflow: hidden;
  background: #F9F9F9;
  @media(max-width: $sm) {
    width: 250px;
    flex-shrink: 0;
  }
  &.table_main {
    background: #EFEDFE;
    @media(max-width: $sm) {
      border-radius: 32px 0px 0px 32px;
    }
  }
  &:not(.table_main) {
    @media(max-width: $sm) {
      border-radius: 0px 32px 32px 0px;
    }
  }
  &__head {
    padding: 15px 20px 13px;
    border-bottom: 1px solid #DDDCE2;
    background: #EBEBEB;
    line-height: 1;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: $sm) {
      height: 72px;
      padding: 10px 30px;
      img {
        height: 34px;
      }
    }
    .table_main & {
      background: linear-gradient(180deg, #392DAC 0%, #5E4EDF 100%);border-bottom: 1px solid #382E9A;
    }
  }
  &__cell {
    padding: 24px;
    &-1 {
      min-height: 254px;
      @media(max-width: $sm) {
        min-height: 335px;
      }
    }
    &-2 {
      min-height: 232px;
      @media(max-width: $sm) {
        min-height: 340px;
      }
    }
    &-3 {
    }
    & + & {
      border-top: 4px solid rgba(235, 235, 235, 0.71);
      .table_main & {
        border-color: #E2DFFE;
      }
    }
  }
  &__label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    padding: 7px 12px 5px;
    background: #EBEBEB;
    &:before {
      content: '';
      display: inline-block;
      width: 18px;
      height: 16px;
      border-radius: 50%;
      background: url('@/assets/icons/dark-exclude.svg') no-repeat center;
      background-size: contain;
      margin-top: -2px
    }
    .table_main & {
      background: #E2DFFE;
      color: #1C0771;
      &:before {
        background: url('@/assets/icons/purple-check.svg') no-repeat center;
        background-size: contain;
      }
    }
  }
  &__descr {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
    .table_main & {
      color: #1C0771;
    }
  }
}
</style>
