<script lang="ts" setup>
import type { CaseStudy } from '~/types';
// import { cases } from '~/configs';
// import useApiService from '@/services/api.js';
const props = defineProps({
  cols: {
    type: Number,
    default: 1
  },
  expand: {
    type: Boolean,
    default: true
  },
  items: {
    type: Array as PropType<CaseStudy[]>,
    required: true,
    default: () => []
  }
});

const { t } = useI18n();

const isShowMore = ref(false);

// const caseFiltered: CaseStudy[] = props.items.filter((item) => isDevMode || (item.status && item.status !== 'INACTIVE') || (!item.status && !item.isHidden) );

const casesToShow = computed(() => {
  return  isShowMore.value || !props.expand ? props.items : props.items.slice(0, 3);
});
</script>

<template>
  <div>
    <div
      class="list"
      :class="`cols-${cols}`"
    >
      <template v-if="!items.length">
        <div class="empty text color-secondary">No case studies found</div>
      </template>
      <template v-else-if="items[0].status">
        <CaseItem
          v-for="(caseStudy) in casesToShow"
          :key="caseStudy.url"
          :case-study="caseStudy"
        />
      </template>
      <template v-else>
        <CaseItemOld
          v-for="(caseStudy, index) in casesToShow"
          :key="index"
          :case-study="caseStudy"
          data-aos="fade-up"
          data-aos-once="true"
        />
      </template>
    </div>

    <div
      v-if="!isShowMore && expand"
      class="control flex-center"
    >
      <button
        class="button button_trans-yellow"
        @click="isShowMore = !isShowMore"
      >
        {{ t('sectionCaseStudies.viewAll') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media(max-width: $md) {
    grid-template-columns: 1fr;
  }
  @media(max-width: $sm) {
    gap: 16px;
  }
  &.cols-2 {
    grid-template-columns: repeat(2, 1fr);
    @media(max-width: $md) {
      grid-template-columns: 1fr;
    }
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
