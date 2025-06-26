<script lang="ts" setup>
const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  level: {
    type: Number,
    default: 1
  }
});
</script>

<template>
  <template v-if="content">
    <h2
      v-if="level === 2"
      :id="id"
      class="post__title title-3"
    >
      <span>{{ content }}</span>
    </h2>

    <h3
      v-else
      class="post__subtitle subtitle-2"
    >
      {{ content }}
    </h3>
  </template>
</template>

<style lang="scss" scoped>
.post {
  &__title {
    position: relative;
    font-size: 28px;
    line-height: 1.3;
    span {
      position: relative;
      padding-right: 8px;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10px;
      background-color: #EDE8F6;
      height: 2px;
      border-radius: 2px;
    }
  }

  &__subtitle {
    margin-bottom: -12px;
  }
}
</style>
