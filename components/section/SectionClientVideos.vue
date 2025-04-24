<script lang="ts" setup>
const { openModal } = useModal();
const { t } = useI18n();

const videos = [
  {
    preview: '/images/video-review-lemieux.png',
    src: 'https://drive.google.com/file/d/13TUkRekJtqrgv8ZsIEDLw41wkau4ri7y/preview',
    title: 'Lemieux Review',
    previewTitle: 'Over 2 years we<br/> see growth<br/> <span>+30%</span> in<br/> ARPU YoY',
    note: 'We’ve been driving consistent, measurable ARPU uplift for Le Mieux—let’s explore how we can deliver similar uplift for you.',
    author: {
      id: 'shaun-loughlin',
      name: 'Shaun Loughlin',
      position: 'Head of Ecomm & Tech',
      company: 'leMieux.svg'
    },
    id: 'homepage_video-client_0',
    isOwnerForm: true,
  },
  {
    preview: '/images/video-review-hunter.png',
    src: 'https://drive.google.com/file/d/1HAuH0yYADsTiD6pGqljFC-tjXgQvcQVT/preview',
    title: 'Hunter Galloway Review',
    previewTitle: 'They have increased our CvR by <span>+60%</span> sitewide',
    note: 'We’ve been driving consistent, measurable CvR uplift for Hunter Galloway—let’s explore how we can deliver similar uplift for you.',
    author: {
      id: 'jaydan-vecchio',
      name: 'Jaydan Vecchio',
      position: 'Director',
      company: 'hunterGalloway-white.svg'
    },
    id: 'homepage_video-client_1',
    isOwnerForm: true,
  },
  {
    preview: '/images/video-review-natpat.png',
    src: 'https://drive.google.com/file/d/1oW1JRscEaaGiLD5hxUPpTIk3Yqw4D5Jt/preview',
    title: 'NatPat Review',
    previewTitle: 'For past 12<br/> month our ARPU<br/> increased up to <span>+140%</span>',
    note: 'We’ve been driving consistent, measurable ARPU uplift for NATPAT—let’s explore how we can deliver similar uplift for you.',
    author: {
      id: 'andrei-safonov',
      name: 'Andrei Safonov',
      position: 'Co-founder',
      company: 'natPat.svg'
    },
    id: 'homepage_video-client_2',
    isOwnerForm: true,
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
    <h2 class="section-title title-2 text-center">
      {{ t('sectionClientVideos.title') }}
    </h2>

    <Carousel
      class="videos__carousel"
      ref="carousel"
      :items-to-show="1.1"
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
              <img :src="`/images/logo/${video.author.company}`" />
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
    @media(max-width: $sm) {
      font-size: 24px;
      line-height: 32px;
      max-width: 60%;
    }

    &:deep(span) {
      background: linear-gradient(90deg, #5543AC 0%, #3A249F 100%);
      padding: 0 5px;
      height: 35px;
      display: inline-block;
      @media(max-width: $sm) {
        height: 29px;
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
