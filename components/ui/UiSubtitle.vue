<script lang="ts" setup>
defineProps({
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
  <h3
    class="post__subtitle subtitle-2"
    v-if="content"
  >
    {{ content }}
  </h3>
</template>
