<script lang="ts" setup></script>

<template>
  <BaseSection
    class="compare"
    id="crs-vs-other-cro-agencies"
  >
    <h2 class="section-title title-2">
      <span class="color-purple">Conversion Rate Store</span> vs other CRO
      agencies vs in-house team
    </h2>

    <div class="table-wrap">
      <div class="table">
        <div class="table__head">
          <div class="row">
            <div class="col"></div>

            <div class="col subtitle-2 bg--gradient flex align-center">
              Conversion Rate Store
            </div>

            <div class="col subtitle-2 bg--purple-light flex align-center">
              Other CRO agency
            </div>

            <div class="col subtitle-2 bg--purple-light flex align-center">
              In-house CRO/product team
            </div>
          </div>
        </div>

        <div class="table__body">
          <div class="row">
            <div class="col subtitle-2">Guarantee of project success</div>

            <div class="col text">
              We are the only CRO agency we know of that commits to an
              agreed-upon revenue metrics uplift. Our guarantees are based on
              our track record of results for clients
            </div>

            <div class="col text">
              Most other agencies lack the capacity to deliver guaranteed
              results and effectively manage the uncertainties of CRO projects
            </div>

            <div class="col text">
              In-house teams typically are not required to demonstrate monthly
              uplifts in key revenue metrics for continued investment. We, on
              the other hand, are required to perform on a monthly basis
            </div>
          </div>

          <div class="row">
            <div class="col subtitle-2">ROI from CRO project</div>

            <div class="col text">
              We guarantee an agreed-upon result, making it easy for our clients
              to calculate the ROI of a CRO project with us
            </div>

            <div class="col text">
              Other CRO agencies typically do not commit to specific results,
              making ROI uncertain
            </div>

            <div class="col text">
              In-house teams often yield lower ROI due to KPI bias, full
              staffing costs, and lack of competence in CRO
            </div>
          </div>

          <div class="row">
            <div class="col subtitle-2">Cost of project</div>

            <div class="col text">
              Our prices are typically 20-30% lower than those of top US and UK
              based agencies, thanks to our cost-efficient remote team structure
              in Europe
            </div>

            <div class="col text">
              Other leading CRO agencies in the US and Europe typically charge
              30-40% more for their services without guaranteeing results
            </div>

            <div class="col text">
              In-house CRO teams bear the full cost of employing professionals
              with the skills required for continuous revenue metrics
              improvement. Typically, this cost is four times higher than hiring
              a CRO agency
            </div>
          </div>

          <div class="row">
            <div class="col subtitle-2">
              Access to comprehensive CRO/UXO team
            </div>

            <div class="col text">
              Enjoy full access to our expansive multidisciplinary team of over
              50 professionals, skilled in 9 essential CRO and UXO competencies,
              each with years of specialised experience
            </div>

            <div class="col text">
              A comprehensive CRO team includes 9 roles such as data analyst, UX
              researcher, CRO strategist, and A/B test developer. Most agencies
              don't have all these roles covered, relying on the client to fill
              the gaps
            </div>

            <div class="col text">
              In-house teams are typically constrained by internal resources and
              existing expertise, limiting their capability to deliver
              continuous growth and often hitting a glass ceiling
            </div>
          </div>

          <div class="row">
            <div class="col subtitle-2">
              Additional cost of tools and technology
            </div>

            <div class="col text">
              You get full access to our proprietary developed tools essential
              for a successful CRO project, including tools for A/B testing,
              user surveys, user testing, QA, and more
            </div>

            <div class="col text">
              Most agencies pass the cost of the additional tools required for a
              CRO project to clients, requiring them to subscribe to these tools
            </div>

            <div class="col text">
              Significant upfront investment in tools, with the need for regular
              updates and maintenance
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.compare {
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
    min-width: 740px;
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
    padding: 17px 16px 15px;
    min-width: 240px;
  }
  & + & {
    border-left: 1px solid $border;
  }
  &:first-child {
    @media(max-width: $md) {
      grid-column: span 3;
      border: 1px solid $border;
      font-size: 18px;
    }
  }
  &:last-child {
    border-right: 1px solid $border;
  }
  .table__head & {
    padding: 16px 20px 14px;
    @media(max-width: $md) {
      font-size: 16px;
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
  }
  .table__head &:nth-child(2) {
    border-top-left-radius: 24px;
    border-left: none;
    border-top: none;
  }
  .table__head &:last-child {
    border-top-right-radius: 24px;
  }
  .table__body &:nth-child(2) {
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
  grid-template-columns: repeat(4, 1fr);
  @media(max-width: $lg) {
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
</style>
