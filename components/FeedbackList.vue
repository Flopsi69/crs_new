<script lang="ts" setup>
// import { feedbacks } from '~/configs';
const { t, locale } = useI18n();

// let feedbacks = [];

// try {
//   const module = await import(`~/i18n/locales/${locale.value}/feedbacks.json`);
//   feedbacks = module.default;
// } catch (error) {
//   console.log(`Failed to load feedbacks for locale ${locale.value}`);
// }

const { data: feedbacks } = await useAsyncData('i18n-locale-feedbacks', async () => {
  const json = await import(`~/i18n/locales/${locale.value}/feedbacks.json`)

  return json.default
})

const isShowMore = ref(false)
const initShow = ref(4)

const feedbacksToShow = computed(() => isShowMore.value ? feedbacks.value : feedbacks.value.slice(0, initShow.value));

onMounted(() => {
  const { width } = useWindowSize()

  watchEffect(() => {
    initShow.value = width.value > 992 ? 6 : 4
  })
})
</script>

<template>
  <div
    v-if="feedbacks.length"
    class="list-wrap"
  >
    <div class="list">
      <FeedbackItem
        v-for="(feedback, index) in feedbacksToShow"
        :key="feedback.logo"
        :feedback="feedback"
        data-aos="fade-up"
        :text-lines="5"
      />
    </div>

    <div
      v-if="!isShowMore"
      class="control flex-center"
    >
      <button
        class="button button_trans-yellow"
        @click="isShowMore = !isShowMore"
      >
        {{ t('sectionFeedbacks.buttonShowMore') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media(max-width: $md) {
    grid-template-columns: 1fr;
  }
}

.control {
  margin-top: 40px;
}

.button {
  font-size: 18px;
}
</style>
