<script lang="ts" setup>
import { feedbacks } from '~/configs';

const isShowMore = ref(false)
const initShow = ref(4)

const feedbacksToShow = computed(() => isShowMore.value ? feedbacks : feedbacks.slice(0, initShow.value));

onMounted(() => {
  const { width } = useWindowSize()

  watchEffect(() => {
    initShow.value = width.value > 992 ? 6 : 4
  })
})
</script>

<template>
  <div class="list-wrap">
    <div class="list">
      <FeedbackItem
        v-for="(feedback, index) in feedbacksToShow"
        :key="feedback.logo"
        :feedback="feedback"
        data-aos="fade-up"
      />
    </div>

    <div
      class="control flex-center"
      v-if="!isShowMore"
    >
      <button
        class="button button_trans-yellow"
        @click="isShowMore = !isShowMore"
      >
        Show more
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
