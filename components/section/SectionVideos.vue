<script lang="ts" setup>
const { openModal } = useModal();

const authors = [
  {
    id: 'ihor-sokolov',
    name: 'Ihor Sokolov',
    position: 'ConversionRate.Store, co-founder',
    photo: 'author-ihor.png'
  },
  {
    id: 'glib-hodorovskiy',
    name: 'Glib Hodorovskiy',
    position: 'ConversionRate.Store, co-founder',
    photo: 'author-glib.png'
  }
]

const videos = [
  {
    preview: '/images/video-preview-0.gif',
    src: 'https://drive.google.com/file/d/1dUnoEi_-mIXkVB6n8F6izU5fZr4xOoDA/preview',
    title: 'Riga Comm 2024',
    author: authors[0],
    id: 'homepage_video_0',
    meeting: 'https://meetings.hubspot.com/gleb-hodorovskiy/schedule-call?firstName=<name>&email=<email>'
    // TODO return
    // meeting: 'https://calendly.com/ihor-sokol/discovery-call-with-ihor?name=<name>&email=<email>'
  },
  {
    preview: '/images/video-preview-1.gif',
    src: 'https://drive.google.com/file/d/1BNQdn7it6YEzOZ14Lzh0xnABLwz7bVjb/preview',
    title: 'eCommerce 2019',
    author: authors[1],
    id: 'homepage_video_1',
    meeting: 'https://meetings.hubspot.com/gleb-hodorovskiy/schedule-call?firstName=<name>&email=<email>'
  },
  {
    preview: '/images/video-preview-2.gif',
    src: 'https://drive.google.com/file/d/1olltbr6KQlX3wal8Oa0N5p4yDLYzrHSE/preview',
    title: 'eCommerce 2019',
    author: authors[0],
    id: 'homepage_video_2',
    meeting: 'https://meetings.hubspot.com/gleb-hodorovskiy/schedule-call?firstName=<name>&email=<email>'
    // TODO return
    // meeting: 'https://calendly.com/ihor-sokol/discovery-call-with-ihor?name=<name>&email=<email>'
  }
]

const carousel = ref()

function openVideo(video: any) {
  openModal({
    target: 'video',
   ...video
  })
}
</script>

<template>
  <BaseSection class="videos">
    <h2 class="section-title title-2">
      Watch our founders share actionable CRO tactics straight from the stage
    </h2>

    <Carousel
      class="videos__carousel"
      ref="carousel"
      wrapAround
      :items-to-show="1"
      :breakpoints="{
         992: { itemsToShow: 3, wrapAround: false },
         768: { itemsToShow: 2, wrapAround: false }
      }"
    >
      <Slide
        v-for="(video, index) in videos"
        :key="index"
        class="videos__slide"
      >
        <div class="video">
          <div
            class="video__preview"
            @click="openVideo(video)"
          >
            <img
              class="video__preview-play"
              src="img/video-play.png"
              alt=""
            />
            <img
              class="video__preview-poster"
              :src="video.preview"
              :alt="video.title"
            />
          </div>

          <div class="video__info">
            <div class="video__title subtitle-3 color-purple">
              {{ video.title }}
            </div>

            <div class="video__author author">
              <div class="author__photo">
                <img
                  :src="`images/${video.author.photo}`"
                  alt=""
                />
              </div>
              <div class="author__info">
                <div class="author__name">{{ video.author.name }}</div>
                <div class="author__position text text-sm color-secondary">
                  {{ video.author.position }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <!-- <template #addons>
        <Navigation />
        <Pagination />
      </template> -->
    </Carousel>

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

    <div
      class="videos__list"
      v-if="false"
    >
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="videos__item video"
      >
        <div
          class="video__preview"
          @click="openVideo(video)"
        >
          <img
            class="video__preview-play"
            src="img/video-play.png"
            alt=""
          />
          <img
            :src="video.preview"
            :alt="video.title"
          />
        </div>

        <div class="video__info">
          <div class="video__title subtitle-3 color-purple">
            {{ video.title }}
          </div>

          <div class="video__author author">
            <div class="author__photo">
              <img
                :src="`images/${video.author.photo}`"
                alt=""
              />
            </div>
            <div class="author__info">
              <div class="author__name">{{ video.author.name }}</div>
              <div class="author__position text text-sm color-secondary">
                {{ video.author.position }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.videos {
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media(max-width: $sm) {
      gap: 24px;
    }
  }

  &__carousel {
    margin: 40px -10px 0;
    @media(max-width: $sm) {
      margin: 24px -6px 0;
    }

    :deep(.carousel__viewport) {
      overflow: visible;
    }
  }

  &__slide {
    padding: 0 10px;
    @media(max-width: $sm) {
      padding: 0 6px;
    }
  }
}

.video {
  text-align: left;
  @media(max-width: $sm) {
    background-color: $bg--purple-light;
    border-radius: 24px;
    width: 100%;
  }
  &__preview {
    position: relative;
    cursor: pointer;
    border-radius: 24px;
    overflow: hidden;
    line-height: 0;
    @media(max-width: $sm) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
    &-play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 54px;
      cursor: pointer;
      transition: .3s;
    }
    @media(hover: hover) {
      &:hover .video__preview-play {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }
    &-poster {
      @media(max-width: $sm) {
        width: 100%;
      }
    }
  }
  &__info {
    margin-top: 12px;
    padding-left: 24px;
    @media(max-width: $sm) {
      margin-top: 0;
      padding: 16px 24px;
    }
  }
  &__author {
    margin-top: 8px;
  }
}

.author {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 16px;
  &__photo {
    flex-shrink: 0;
    line-height: 0;
    width: 40px;
  }
}

.controls {
  display: none;
  gap: 24px;
  margin-top: 24px;
  @media(max-width: $md) {
    display: flex;
  }
  @media(max-width: $sm) {
    gap: 20px;
  }
}

.button {
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
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
