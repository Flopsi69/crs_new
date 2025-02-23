<script lang="ts" setup>
defineProps({
  content: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <p v-if="content">{{ content }}</p>
</template>
