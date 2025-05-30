<script lang="ts" setup>
const { openModal } = useModal();
const { t } = useI18n();

const videos = [
  {
    video: 'https://crs-storage.fra1.cdn.digitaloceanspaces.com/video-reviews/review-lemieux',
    format: 'mp4',
    preview: '/images/video-review-lemieux.png',
    // src: 'https://drive.google.com/file/d/13TUkRekJtqrgv8ZsIEDLw41wkau4ri7y/preview',
    title: t('sectionClientVideos.lemieux.title'),
    previewTitle: t('sectionClientVideos.lemieux.previewTitle'),
    note: t('sectionClientVideos.lemieux.note'),
    author: {
      id: 'shaun-loughlin',
      name: 'Shaun Loughlin',
      position: 'Head of Ecomm & Tech',
      companyLogo: 'leMieux.svg'
    },
    id: 'homepage_video-client_0',
    isOwnerForm: true,
  },
  {
    video: 'https://crs-storage.fra1.cdn.digitaloceanspaces.com/video-reviews/review-hunter',
    format: 'mov',
    preview: '/images/video-review-hunter.png',
    // src: 'https://drive.google.com/file/d/1HAuH0yYADsTiD6pGqljFC-tjXgQvcQVT/preview',
    title: t('sectionClientVideos.hunter.title'),
    previewTitle: t('sectionClientVideos.hunter.previewTitle'),
    note: t('sectionClientVideos.hunter.note'),
    author: {
      id: 'jaydan-vecchio',
      name: 'Jaydan Vecchio',
      position: 'Director',
      companyLogo: 'hunterGalloway-white.svg'
    },
    id: 'homepage_video-client_1',
    isOwnerForm: true,
  },
  {
    video: 'https://crs-storage.fra1.cdn.digitaloceanspaces.com/video-reviews/review-natpat',
    format: 'mp4',
    preview: '/images/video-review-natpat.png',
    // src: 'https://drive.google.com/file/d/1oW1JRscEaaGiLD5hxUPpTIk3Yqw4D5Jt/preview',
    title: t('sectionClientVideos.natpat.title'),
    previewTitle: t('sectionClientVideos.natpat.previewTitle'),
    note: t('sectionClientVideos.natpat.note'),
    author: {
      id: 'andrei-safonov',
      name: 'Andrei Safonov',
      position: 'Co-founder',
      companyLogo: 'natPat.svg'
    },
    id: 'homepage_video-client_2',
    isOwnerForm: true,
  }
]

const isCarouselReady = ref(false)

function openVideo(video: any) {
  openModal({
    target: 'video',
   ...video
  })
}
</script>

<template>
  <BaseSection
    class="videos"
    id="testimonials"
  >
    <h2 class="section-title title-2 text-center">
      {{ t('sectionClientVideos.title') }}
    </h2>

    <Carousel
      class="videos__carousel"
      :class="{ 'is-ready': isCarouselReady }"
      :items-to-show="1.1"
      :touch-drag="{ threshold: 0.15 }"
      prevent-excessive-dragging
      @init="isCarouselReady = true"
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
        <div
          class="video"
          @click="openVideo(video)"
        >
          <img
            class="video__play"
            src="img/video-play.png"
            alt=""
          />
          <div class="video__poster">
            <img
              class="video__poster"
              :src="video.preview"
            />
          </div>
          <div
            :class="{'video__title_wide': index === 1 }"
            class="video__title"
            v-html="video.previewTitle"
          />

          <div class="video__footer author">
            <div class="author__company">
              <img :src="`/images/logo/${video.author.companyLogo}`" />
            </div>
            <div class="author__info">
              <div class="author__name subtitle-3">
                {{ video.author.name }}
              </div>
              <div class="author__position text">
                {{ video.author.position }}
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </BaseSection>
</template>

<style lang="scss" scoped>
.videos {
  &__carousel {
    transition: opacity .2s;
    margin: 40px -10px 0;
    @media(max-width: $sm) {
      margin: 24px -6px 0;
    }

    &:not(.is-ready) {
      opacity: .1;
    }

    &.is-ready :deep(.carousel__viewport) {
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
  position: relative;
  cursor: pointer;
  border-radius: 24px;
  overflow: hidden;
  line-height: 0;
  width: 100%;
  &__play {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 54px;
    cursor: pointer;
    transition: .3s;
  }
  @media(hover: hover) {
    &:hover .video__play {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  &__title {
    position: absolute;
    top: 32px;
    left: 32px;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    max-width: 285px;
    color: #fff;
    .lang-fr & {
      font-size: 24px;
      line-height: 32px;
    }
    @media(max-width: $sm) {
      font-size: 24px;
      line-height: 32px;
      max-width: 75%;
      .lang-fr & {
        font-size: 20px;
        line-height: 28px;
      }
    }

    &:deep(span) {
      background: linear-gradient(90deg, #5543AC 0%, #3A249F 100%);
      padding: 0 5px;
      height: 35px;
      display: inline-block;
      .lang-fr & {
        height: 29px;
      }
      @media(max-width: $sm) {
        height: 29px;
        .lang-fr & {
          height: 25px;
        }
      }
    }
  }
  &__poster {
    height: 390px;
    background-color: #B4ACA9;
    @media(max-width: $sm) {
      width: 100%;
      height: 82.5vw;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      min-width: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
}

.author {
  padding: 12px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(90deg, #5543AC 0%, #3A249F 100%);
  backdrop-filter: blur(1px);
  color: #fff;
  line-height: 1.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  &__company {
    line-height: 0;
    // @media(max-width: $sm) {
    //   max-width: 90px;
    // }
  }
  &__info {
    text-align: right;
  }
  &__name {
    @media(max-width: $sm) {
      font-size: 14px;
    }
  }
  &__position {
    margin-top: 2px;
    @media(max-width: $sm) {
      font-size: 12px;
    }
  }
}
</style>
