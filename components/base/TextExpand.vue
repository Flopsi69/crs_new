<script lang="ts" setup>
defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  lines: {
    type: Number,
    default: -1
  },
  text: {
    type: String,
    default: ''
  }
})

const { t } = useI18n();

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

const isExpandVisible = computed(() => props.lines > 0 && rows.value > props.lines && !isExpandClicked.value);

onMounted(() => {
  if (textDiv.value) {
    rows.value = getNumberOfRows(textDiv.value);
  }
});
</script>

<template>
  <div
    class="text-expand"
    :style="{ opacity: rows ? '1' : '0.2' }"
  >
    <div
      ref="textDiv"
      v-bind="$attrs"
      v-html="text"
      :style="[!isExpandVisible || lines < 0 ? '' : css]"
    ></div>
    <template v-if="isExpandVisible">
      <slot
        name="trigger"
        @click="toggleText"
      >
        <span
          class="link"
          @click="toggleText"
          >{{ t('sectionFeedbacks.readMore') }}</span
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
