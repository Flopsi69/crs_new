<script lang="ts" setup>
const { openModal } = useModal();
const { t, locale } = useI18n();

let rows = [];

try {
  const module = await import(`~/locales/${locale.value}/productsTable.json`);
  rows = module.default;
} catch (error) {
  console.log(`Failed to load table products for locale ${locale.value}`);
}

const infoBook = {
  title: t('sectionProducts.linkFunnelInfo.title'),
  subtitle: t('sectionProducts.linkFunnelInfo.subtitle'),
  list: [
    t('sectionProducts.linkFunnelInfo.list[0]'),
    t('sectionProducts.linkFunnelInfo.list[1]'),
    t('sectionProducts.linkFunnelInfo.list[2]')
  ],
  formTitle: t('sectionProducts.linkFunnelInfo.formTitle'),
  cta: t('sectionProducts.linkFunnelInfo.cta'),
  note: t('sectionProducts.linkFunnelInfo.note')
}

const infoEstimate = {
  title: t('sectionProducts.buttonFunnelInfo.title'),
  subtitle: t('sectionProducts.buttonFunnelInfo.subtitle'),
  list: [
    t('sectionProducts.buttonFunnelInfo.list[0]'),
    t('sectionProducts.buttonFunnelInfo.list[1]'),
    t('sectionProducts.buttonFunnelInfo.list[2]')
  ],
  formTitle: t('sectionProducts.buttonFunnelInfo.formTitle'),
  cta: t('sectionProducts.buttonFunnelInfo.cta'),
  note: t('sectionProducts.buttonFunnelInfo.note')
}

const scrollContainer = ref(null)
const thumbWidth = ref(0)
const thumbLeft = ref(0)

const updateThumb = () => {
  const el = scrollContainer.value as HTMLDivElement | null

  if (!el) return

  const visibleRatio = el.clientWidth / el.scrollWidth
  thumbWidth.value = visibleRatio * 100
  thumbLeft.value = (el.scrollLeft / el.scrollWidth) * 100
}

onMounted(() => {
  const el = scrollContainer.value as HTMLDivElement | null

  if (!el) return

  updateThumb()
  el.addEventListener('scroll', updateThumb)
  window.addEventListener('resize', updateThumb)
})

onUnmounted(() => {
  const el = scrollContainer.value as HTMLDivElement | null

  if (!el) return

  el.removeEventListener('scroll', updateThumb)
  window.removeEventListener('resize', updateThumb)
})
</script>

<template>
  <BaseSection
    class="products"
    id="our-cro-products"
  >
    <h2 class="section-title title-2">
      {{ t('sectionProducts.title') }}
    </h2>

    <div
      class="table-wrap"
      ref="scrollContainer"
    >
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
                {{ t('sectionProducts.mostPopular') }}
              </div>
              <div class="subtitle-2">
                {{ t('sectionProducts.header1') }}
              </div>
            </div>

            <div class="col bg--purple-dark">
              <div class="col__label flex-center">
                <Icon
                  name="fa6-solid:thumbs-up"
                  size="14"
                  class="color-yellow"
                />
                {{ t('sectionProducts.bestValue') }}
              </div>
              <div class="subtitle-2">
                {{ t('sectionProducts.header2') }}
              </div>
            </div>

            <div class="col bg--purple-dark">
              <div class="subtitle-2">
                {{ t('sectionProducts.header3') }}
              </div>
            </div>
          </div>
        </div>
        <div class="table__body">
          <div
            v-for="(row, index) in rows"
            :key="index"
            class="row"
          >
            <div class="col subtitle-2">{{ row.col1 }}</div>
            <div class="col text">{{ row.col2 }}</div>
            <div class="col text">{{ row.col3 }}</div>
            <div class="col text">{{ row.col4 }}</div>
          </div>

          <div class="row">
            <div class="col subtitle-2 fw-700"></div>
            <div
              v-for="n in 3"
              :id="`products_${n}-cta`"
              class="col subtitle-3 link"
              @click="openModal({ info: infoBook, id: `homepage_products_${n}` })"
            >
              <span>
                {{ t('sectionProducts.bookACall') }}
              </span>
              <Icon
                name="line-md:chevron-small-right"
                size="24"
              />
            </div>
          </div>
        </div>

        <div class="table-scrollbar__wrap">
          <div
            class="table-scrollbar"
            :style="{ left: thumbLeft + 1 + '%' }"
          >
            <div
              class="table-scrollbar__thumb"
              :style="{ 
                width: thumbWidth + '%', 
                left: thumbLeft + '%' 
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="control flex-center">
      <button
        id="products_main-cta"
        class="control__button button button_yellow"
        @click="openModal({ info: infoEstimate, id: 'homepage_products_4' })"
      >
        <span class="control__button-mob">
          {{ t('sectionProducts.buttonMobile') }}
        </span>
        <span class="control__button-desk">
          {{ t('sectionProducts.buttonDesktop') }}
        </span>
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
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  @media(max-width: $sm) {
    margin-top: 24px;
  }
}

.table-scrollbar {
  pointer-events: none;
  height: 8px;
  background: $bg--purple-light;
  border-radius: 10px;
  position: relative;
  max-width: 85vw;
  will-change: left;
  &__wrap {
    display: none;
    background: #fff;
    border: 1px solid $border;
    border-top: 0;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    padding: 20px 16px;
    @media(max-width: $md) {
      display: block;
    }
  }
  &__thumb {
    height: 100%;
    background: $purple;
    border-radius: 10px;
    position: absolute;
    top: 0;
    will-change: left;
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
    @media(max-width: $md) {
      border-bottom-left-radius: 0;
    }
  }
  .table__body .row:last-child &:last-child {
    border-bottom-right-radius: 24px;
    @media(max-width: $md) {
      border-bottom-right-radius: 0;
    }
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
