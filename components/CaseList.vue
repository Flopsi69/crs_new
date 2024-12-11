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

const isShowMore = ref(false);

const caseFiltered: CaseStudy[] = props.items.filter((item) => item.status !== 'ACTIVE');

const casesToShow = computed(() => {
  return  isShowMore.value || !props.expand ? caseFiltered : caseFiltered.slice(0, 3);
});

// const { data, status, error } = await useFetch('https://jsonplaceholder.typicode.com/todos')

const itemTest =
{
  "id": 1,
  "url": "new-case-study-1",
  "title": "New Case Study",
  "description": null,
  "metaDescription": null,
  "metaKeywords": null,
  "clientId": 1,
  "preview1": {},
  "preview2": {},
  "status": "INACTIVE",
  "location": {},
  "createdAt": "2024-12-09T10:33:01.410Z",
  "updatedAt": "2024-12-09T10:53:22.444Z",
  "client": {
    "id": 1,
    "name": "Dr Golly",
    "siteUrl": "https://drgolly.com/",
    "logo": "https://stageserver.conversionrate.store/static/media/1732120138340-398508544-logo-drgolly.svg",
    "type": "E-com",
    "baseInfo": "Project start date: 8 Nov 2024",
    "status": "ACTIVE",
    "createdAt": "2024-11-20T15:12:56.837Z",
    "updatedAt": "2024-11-20T15:12:56.837Z",
    "assets": null
  }
};

// console.log('data', data.value, status.value, error.value)
</script>

<template>
  <div
    class="list"
    :class="`cols-${cols}`"
    v-bind="$attrs"
  >
    <CaseItem1 :caseStudy="itemTest" />
    <CaseItem
      v-for="(caseStudy, index) in casesToShow"
      :key="index"
      :caseStudy="caseStudy"
      data-aos="fade-up"
      data-aos-once="true"
    />
  </div>

  <div
    v-if="!isShowMore && expand"
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
