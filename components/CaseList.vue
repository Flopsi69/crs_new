<script lang="ts" setup>
import { cases } from '~/configs';

const isShowMore = ref(false);

const caseFiltered = cases.filter((c) => !c.isHidden);

const casesToShow = computed(() => {
  return  isShowMore.value ? caseFiltered : caseFiltered.slice(0, 3);
});
</script>

<template>
  <div class="list">
    <CaseItem
      v-for="(caseStudy, index) in casesToShow"
      :key="index"
      :caseStudy="caseStudy"
      data-aos="fade-up"
      data-aos-once="true"
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
      View all
    </button>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 24px;
  @media(max-width: $md) {
    grid-template-columns: 1fr;
  }
  @media(max-width: $sm) {
    gap: 16px;
  }
}

.control {
  margin-top: 40px;
  @media(max-width: $sm) {
    margin-top: 24px;
  }
}

.button {
  font-size: 18px;
}
</style>
