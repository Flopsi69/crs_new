<script lang="ts" setup>
const { openModal } = useModal();

const infoBook = {
  title: 'Book a call to learn more about our CRO/UXO Services',
  subtitle: 'On the call, you will receive:',
  list: [
    'An overview of our CRO/UXO services and how they can benefit your business',
    'A detailed explanation of the product that best fits your needs',
    'Answers to any questions you may have about our processes and expected results',
    'A customized plan outlining the next steps to achieve your business goals'
  ],
  formTitle: 'Schedule Your Consultation',
  cta: 'Book a call',
  note: 'If you are not sure what your current metrics are, don’t worry, we will help you find them and estimate the uplift'
}

const infoEstimate = {
  title: 'Estimate the Potential Uplift of Your Key Revenue Metric',
  subtitle: 'On the call, you will receive:',
  list: [
    'An estimated uplift of your key revenue metric that we can commit to',
    'An overview of the most significant CRO/UXO opportunities we see for your site',
    'A quote for a CRO/UXO project tailored to your business'
  ],
  formTitle: 'Schedule Your Results Discussion',
  cta: 'Book a call to get an estimate',
  note: 'If you are not sure what your current metrics are, don’t worry, we will help you find them and estimate the uplift'
}
</script>

<template>
  <BaseSection class="products">
    <h2 class="section-title title-2">Our CRO/UXO Products</h2>

    <div class="table-wrap">
      <div class="table">
        <div class="table__head">
          <div class="row">
            <div class="col"></div>
            <div class="col bg--purple-dark">
              <div class="col__label flex-center">
                <Icon
                  name="fa-solid:fire"
                  size="14"
                  class="color-yellow"
                />
                Most popular
              </div>
              <div class="subtitle-2">CRO/UXO retainer</div>
            </div>

            <div class="col bg--purple-dark">
              <div class="col__label flex-center">
                <Icon
                  name="fa6-solid:thumbs-up"
                  size="14"
                  class="color-yellow"
                />
                Best value for LEs
              </div>
              <div class="subtitle-2">Performance-based CRO/UXO</div>
            </div>

            <div class="col bg--purple-dark">
              <div class="subtitle-2">CRO/UXO Audit</div>
            </div>
          </div>
        </div>
        <div class="table__body">
          <div class="row">
            <div class="col subtitle-2">Who is it for?</div>
            <div class="col text">SMEs</div>
            <div class="col text">LEs with revenue >$3 million/month</div>
            <div class="col text">One-time project for SMEs</div>
          </div>

          <div class="row">
            <div class="col subtitle-2">Result guarantee</div>
            <div class="col text">
              A commitment to delivering guaranteed results over time
            </div>
            <div class="col text">
              Client pays only for the actual uplift in key predefined revenue
              metric
            </div>
            <div class="col text">No result guarantee</div>
          </div>

          <div class="row">
            <div class="col subtitle-2 fw-700">Price of service</div>
            <div class="col text">Moderate fixed monthly fee</div>
            <div class="col text">
              Fee for every percentage point uplift in key revenue metric
            </div>
            <div class="col text">Fixed one-time fee</div>
          </div>

          <div class="row">
            <div class="col subtitle-2 fw-700">Expected results</div>
            <div class="col text">
              Our average result is 4.5% monthly uplift of key performance
              metric
            </div>
            <div class="col text">
              3.5% monthly uplift in key performance metrics
            </div>
            <div class="col text">
              We do not validate our CRO recommendations
            </div>
          </div>

          <div class="row">
            <div class="col subtitle-2 fw-700">
              Number of A/B tests per&nbsp;month
            </div>
            <div class="col text">On average 1 A/B test/month</div>
            <div class="col text">On average 1.5 A/B tests/month</div>
            <div class="col text">No A/B tests</div>
          </div>

          <!-- TODO add links -->
          <div class="row">
            <div class="col subtitle-2 fw-700"></div>
            <div
              id="products_1-cta"
              class="col subtitle-3 link"
              @click="openModal({ info: infoBook, id: 'homepage_products_1' })"
            >
              <span>Book a call to learn more</span>
              <Icon
                name="line-md:chevron-small-right"
                size="24"
              />
            </div>
            <div
              id="products_2-cta"
              class="col subtitle-3 link"
              @click="openModal({ info: infoBook, id: 'homepage_products_2' })"
            >
              <span>Book a call to learn more</span>
              <Icon
                name="line-md:chevron-small-right"
                size="24"
              />
            </div>
            <div
              id="products_3-cta"
              class="col subtitle-3 link"
              @click="openModal({ info: infoBook, id: 'homepage_products_3' })"
            >
              <span> Book a call to learn more</span>
              <Icon
                name="line-md:chevron-small-right"
                size="24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO button event -->
    <div class="control flex-center">
      <button
        id="products_main-cta"
        class="control__button button button_yellow"
        @click="openModal({ info: infoEstimate, id: 'homepage_products_4' })"
      >
        <span class="control__button-mob">Get results estimates</span>
        <span class="control__button-desk"
          >Get an estimate of the expected result</span
        >
      </button>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.products {
  overflow: initial;
  @media(max-width: $md) {
    overflow: hidden;
  }
}

.table-wrap {
  margin-top: 40px;
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
  @media(max-width: $md) {
    overflow: auto;
  }
  @media(max-width: $sm) {
    margin-top: 24px;
  }
}

.table {
  &:deep(.text) {
    color: $font-secondary;
  }
  @media(max-width: $md) {
    min-width: 800px;
  }
  &__head {
    position: sticky;
    top: -10px;
    @media(max-width: $md) {
      position: static;
    }
  }
}

.col {
  padding: 25px 20px 23px;
  @media(max-width: $md) {
    // padding: 17px 16px 15px;
    min-width: 260px;
  }
  &__label {
    border-radius: 100px;
    background: $purple;
    border-radius: 100px;
    padding: 3px 8px 1px;
    font-size: 14px;
    gap: 4px;
  }
  & + & {
    border-left: 1px solid $border;
  }
  &:first-child {
    @media(max-width: $md) {
      grid-column: span 3;
      border: 1px solid $border;
      // border-top: none;
      font-size: 18px;
    }
  }
  &:last-child {
    border-right: 1px solid $border;
  }
  .table__head & {
    padding: 13px 20px 11px;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 4px;
    @media(max-width: $md) {
      padding: 17px 20px 15px;
      justify-content: center;
      .subtitle-2 {
        font-size: 16px;
      }
    }
    &:first-child {
      @media(max-width: $md) {
        border: none;
        padding: 0;
      }
    }
  }
  .table__head &:not(:first-child) {
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    background: $gradient-dark;
  }
  .table__head &:nth-child(2) {
    border-top-left-radius: 24px;
  }
  .table__head &:last-child {
    border-top-right-radius: 24px;
  }
  .table__body &:nth-child(3) {
    background-color: $bg--purple-light;
  }
  .table__body .row:last-child &:not(:first-child) {
    border-bottom: 1px solid $border;
  }
  .table__body .row:last-child &:nth-child(2) {
    border-bottom-left-radius: 24px;
  }
  .table__body .row:last-child &:last-child {
    border-bottom-right-radius: 24px;
  }
}

.row {
  display: grid;
  grid-template-columns: max(280px) repeat(3, 1fr);
  @media(max-width: 1100px) {
    grid-template-columns: max(220px) repeat(3, 1fr);
  }
  @media(max-width: $md) {
    grid-template-columns: repeat(3, 1fr);
  }
  & + & {
    border-top: 1px solid $border;
    @media(max-width: $md) {
      border-top: none;
    }
  }
}

.control {
  margin-top: 40px;
  &__button {
    &-mob {
      display: none;
      @media(max-width: $sm) {
        display: inline;
      }
    }
    &-desk {
      @media(max-width: $sm) {
        display: none;
      }
    }
    @media(max-width: $sm) {
      padding-left: 10px;
      padding-right: 10px;
      width: 100%;
    }
  }
}

.button {
  height: 60px;
}
</style>
