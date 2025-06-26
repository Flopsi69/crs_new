<script setup lang="ts">
// import reviews_all from '@/configs/feedbacks'

const { locale } = useI18n();

const { data: feedbacks } = await useAsyncData('i18n-locale-feedbacks', async () => {
  const json = await import(`~/i18n/locales/${locale.value}/feedbacks.json`)

  return json.default
})

const feedbacksList = [
  'ariel-geifman.png',
  'alina-volchek.png',
  'jayden-v.png'
]

const feedbacksToShow = computed(() =>
  feedbacksList
    .map(avatar =>
      feedbacks.value?.find((feedback: any) => feedback.avatar === avatar) || []
    )
);

const isMobile = ref(false)

onMounted(() => {
  if (window.innerWidth < 768) {
    isMobile.value = true
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      isMobile.value = true
    } else {
      isMobile.value = false
    }
  })
})

const breadcrumbsItems = [
  { href: '/', text: 'Home' },
  { href: '/contact-us', text: 'Contacts' }
]
</script>

<template>
  <div class="contacts">
    <div class="container flex contacts__container">
      <div class="contacts__info">
        <!-- Breadcrumbs -->
        <BaseBreadcrumbs
          class="contacts__breadcrumbs"
          :items="breadcrumbsItems"
        />

        <!-- Header -->
        <div class="contacts__header flex-between">
          <h1 class="contacts__title title-2 ">Contact Us</h1>

          <a
            class="contacts__link"
            href="mailto:i@conversionrate.store"
          >
            <Icon
              size="20"
              name="fa6-solid:envelope"
            />
            i@conversionrate.store
          </a>
        </div>

        <!-- Reviews -->
        <div
          v-if="feedbacksToShow?.length"
          class="contacts__feedbacks"
        >
          <div class="contacts__feedbacks-title subtitle-1">
            What do our clients say about us?
          </div>

          <div
            v-if="feedbacksToShow?.length"
            class="contacts__feedbacks-list"
          >
            <FeedbackItem
              v-for="(feedback, index) in feedbacksToShow"
              :key="index"
              class="contacts__feedback"
              :feedback="feedback"
            />
          </div>
        </div>
      </div>

      <!-- Form -->
      <SectionContactForm class="contacts__form" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  overflow-x: clip;
  &__container {
    width: 100%;
  }
  &__info {
    max-width: 720px;
    width: 100%;
    padding: 24px 80px 80px 0
  }
  &__header {
    margin-top: 16px;
  }
  // TODO
  &__link {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #222;
    padding: 10px 16px;
    background: $bg--purple-light;
    border-radius: 20px;
    transition: .3s;
    span {
      color: $purple;
    }
    &:hover {
      opacity: .8;
    }
  }

  &__feedbacks {
    margin-top: 24px;
    &-list {
      display: grid;
      gap: 30px;
      margin-top: 24px;
    }
  }

  &__feedback {
    @media(min-width: 767px) {
      padding: 0;
      border-radius: 0;
      background-color: transparent;
    }
    :deep(.avatar) {
      height: 90px;
      width: 90px;
    }
    :deep(.feedback__company) {
      height: 30px;
    }
  }
}
</style>
