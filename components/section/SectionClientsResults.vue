<script lang="ts" setup>
// import { clientResults as clients } from '~/configs'

const { t, locale } = useI18n();

let clients = [];

try {
  const module = await import(`~/i18n/locales/${locale.value}/clientsResults.json`);
  clients = module.default;
} catch (error) {
  console.log(`Failed to load client results for locale ${locale.value}`);
}

const carousel = ref()

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)
</script>

<template>
  <BaseSection
    v-if="clients.length"
    class="results"
  >
    <div class="head flex-between">
      <h2 class="section-title title-2">
        {{ t('sectionClientResults.title') }}
      </h2>

      <ClientOnly>
        <Teleport
          :disabled="!isMobile"
          to=".results"
        >
          <div
            v-if="carousel"
            class="controls flex-center"
          >
            <button
              class="button button_trans-purple button-prev flex-center"
              @click="carousel.prev()"
            >
              <Icon
                name="line-md:chevron-small-left"
                size="28"
              />
            </button>

            <div
              v-if="carousel.data.maxSlide > 0"
              class="pagination flex-center"
            >
              <div
                v-for="i of carousel.data.maxSlide + 1"
                :key="i"
                :data-test="i"
                class="pagination__item"
                :class="{active: carousel.data.currentSlide === i - 1}"
                @click="carousel.slideTo(i - 1)"
              ></div>
            </div>

            <button
              class="button button_trans-purple button-next flex-center"
              @click="carousel.next()"
            >
              <Icon
                name="line-md:chevron-small-right"
                size="28"
              />
            </button>
          </div>
        </Teleport>
      </ClientOnly>
    </div>

    <Carousel
      ref="carousel"
      :items-to-show="1"
      :touch-drag="{ threshold: 0.15 }"
      prevent-excessive-dragging
      snap-align="start"
      :breakpoints="{
         992: { itemsToShow: 2 }
      }"
    >
      <Slide
        v-for="(client, index) in clients"
        :key="index"
        class="slide"
      >
        <ClientResultItem
          class="slide__item"
          :client="client"
        />
      </Slide>
    </Carousel>
  </BaseSection>
</template>

<style lang="scss" scoped>
.carousel {
  margin: 40px -10px 0;
  @media(max-width: $sm) {
    margin: 24px -5px 0;
  }

  :deep(.carousel__viewport) {
    overflow: visible;
  }
}

.slide {
  padding: 0 10px;
  @media(max-width: $md) {
    padding: 0 5px;
  }

  &__item {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
}

.controls {
  gap: 24px;
  @media(max-width: $sm) {
    margin-top: 24px;
    gap: 20px;
  }
}

.button {
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  // .nuxt-icon {
  //   display: block;
  // }
  // &-prev {
  //   transform: scale(-1);
  // }
  // &:deep(svg) {
  //   margin: 0;
  //   margin-left: 3px;
  // }
}

.pagination {
  gap: 12px;
  @media(max-width: $sm) {
    gap: 8px;
  }
  &__item {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: $border;
    transition: .3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.3);
    }

    &.active {
      background-color: $purple;
    }
  }
}
</style>
