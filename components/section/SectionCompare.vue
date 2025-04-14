<script lang="ts" setup></script>

<template>
  <BaseSection
    class="compare"
    id="crs-vs-other-cro-agencies"
  >
    <h2 class="section-title title-2">
      <span class="color-purple">Conversion Rate Store</span>
      {{ $t('sectionCompare.title') }}
    </h2>

    <div class="table-wrap">
      <div class="table">
        <div class="table__head">
          <div class="row">
            <div class="col"></div>

            <!-- TODO: create config and loop -->
            <div class="col subtitle-2 bg--gradient flex align-center">
              Conversion Rate Store
            </div>

            <div class="col subtitle-2 bg--purple-light flex align-center">
              {{ $t('sectionCompare.rows.head.other') }}
            </div>

            <div class="col subtitle-2 bg--purple-light flex align-center">
              {{ $t('sectionCompare.rows.head.inHouse') }}
            </div>
          </div>
        </div>

        <div class="table__body">
          <div class="row">
            <div class="col subtitle-2">
              {{ $t('sectionCompare.rows.guarantee.title') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.guarantee.crs') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.guarantee.other') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.guarantee.inHouse') }}
            </div>
          </div>

          <div class="row">
            <div class="col subtitle-2">
              {{ $t('sectionCompare.rows.roi.title') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.roi.crs') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.roi.other') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.roi.inHouse') }}
            </div>
          </div>

          <div class="row">
            <div class="col subtitle-2">
              {{ $t('sectionCompare.rows.cost.title') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.cost.crs') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.cost.other') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.cost.inHouse') }}
            </div>
          </div>

          <div class="row">
            <div class="col subtitle-2">
              {{ $t('sectionCompare.rows.team.title') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.team.crs') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.team.other') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.team.inHouse') }}
            </div>
          </div>

          <div class="row">
            <div class="col subtitle-2">
              {{ $t('sectionCompare.rows.additionalTools.title') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.additionalTools.crs') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.additionalTools.other') }}
            </div>

            <div class="col text">
              {{ $t('sectionCompare.rows.additionalTools.inHouse') }}
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
