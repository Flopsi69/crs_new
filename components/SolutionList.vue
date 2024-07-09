<script lang="ts" setup>
const props = defineProps({
  items: {
    type: Array<{ problem: Object }>,
    required: true,
    default: () => []
  },
  itemsToShow: {
    type: Number,
    default: -1
  },
  mobItems: {
    type: Number,
    default: -1
  }
});

const isShowAll = ref(false);
const showItems = ref(props.itemsToShow);

const filterItems = computed(() => {
  if (showItems.value === -1 || isShowAll.value) {
    return props.items;
  }

  return props.items.slice(0, showItems.value);
});

onMounted(() => {
  const { width } = useWindowSize()
  watchEffect(() => {
    if (width.value < 768 && props.mobItems > -1) {
      showItems.value = props.mobItems
    }
  });
});
</script>

<template>
  <div class="list-wrap">
    <div class="list">
      <SolutionItem
        v-for="(item, index) in filterItems"
        :key="index"
        :item="item"
        @setActiveSolution="$emit('setActiveSolution', $event)"
        :data-aos="`fade-${index % 2 ? 'left' : 'right'}`"
        data-aos-once="true"
      />
    </div>

    <div
      v-if="filterItems.length < items.length"
      class="control"
      :class="{'control_offset': mobItems > 1 && !isShowAll }"
    >
      <button
        @click="isShowAll = true"
        class="button"
        :class="[`button_trans-${mobItems > 1 && !isShowAll ? 'yellow' : 'purple'}`]"
      >
        {{ mobItems > 1 ? 'Show more' : 'View all' }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  border-radius: 12px;
  overflow: hidden;
}

.control {
  margin-top: 24px;
  @media(max-width: $sm) {
    &_offset {
      position: relative;
      z-index: 1;
      padding: 85px 0 2px;
      background: linear-gradient(0deg, #FFF 59%, rgba(255, 255, 255, 0.00) 100%);
      margin: -70px -20px -34px;
    }
    text-align: center;
  }

}

.button {
  @media(max-width: $sm) {
    .control_offset & {
      height: 60px;
      font-size: 18px;
      background: #fff;
    }
  }
}
</style>
