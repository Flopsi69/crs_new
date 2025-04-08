<script lang="ts" setup>
import { clientResults as clients } from '~/configs'

const carousel = ref()

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

// const slides = ref(0);

// onMounted(() => {
//   slides.value = computed(() => {
//     return carousel.value?.data.maxSlide.value + 1 || 0
//   })
// })
</script>

<template>
  <BaseSection class="results">
    <div class="head flex-between">
      <h2 class="section-title title-2">
        {{ $t('sectionClientResults.title') }}
      </h2>

      <ClientOnly>
        <Teleport
          :disabled="!isMobile"
          to=".results"
        >
          <div
            class="controls flex-center"
            v-if="carousel"
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
              class="pagination flex-center"
              v-if="carousel.data.maxSlide.value > 0"
            >
              <div
                v-for="i of carousel.data.maxSlide.value + 1"
                :key="i"
                :data-test="i"
                class="pagination__item"
                :class="{active: carousel.data.currentSlide.value === i - 1}"
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
      :items-to-show="1"
      snapAlign="start"
      ref="carousel"
      :breakpoints="{
         992: { itemsToShow: 2 }
      }"
    >
      <Slide
        class="slide"
        v-for="(client, index) in clients"
        :key="index"
      >
        <ClientResultItem
          class="slide__item"
          :client="client"
        />
      </Slide>

      <!-- <template #addons>
        <Navigation />
        <Pagination />
      </template> -->
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
