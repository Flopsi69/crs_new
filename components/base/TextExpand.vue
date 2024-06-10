<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  lines: {
    type: Number,
    default: 5
  },
  text: {
    type: String,
    default: ''
  }
})

const textDiv = ref(null);
const rows = ref(0);
const isExpandClicked = ref(false);

const css = reactive({
  display: '-webkit-box',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  webkitBoxOrient: 'vertical',
  webkitLineClamp: props.lines || 5
});

const toggleText = () => {
  isExpandClicked.value = !isExpandClicked.value;
};

const isExapnd = computed(() => rows.value > props.lines && !isExpandClicked.value);

onMounted(() => {
  if (textDiv.value) {
    rows.value = getNumberOfRows(textDiv.value);
  }
});
</script>

<template>
  <div
    class="text-expand"
    :style="{ visibility: rows ? 'visible' : 'hidden' }"
  >
    <div
      ref="textDiv"
      v-bind="$attrs"
      v-html="text"
      :style="[!isExapnd ? '' : css]"
    ></div>
    <template v-if="isExapnd">
      <slot
        name="trigger"
        @click="toggleText"
      >
        <span
          class="link"
          @click="toggleText"
          >Read more</span
        >
      </slot>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.link {
  font-size: 18px;
  margin-top: 5px;
}
</style>
