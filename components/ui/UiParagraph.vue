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
  <!-- TODO create table component -->
  <div
    v-if="content?.includes('<table>')"
    v-html="content"
  ></div>
  <p
    v-else-if="content"
    v-html="content"
  ></p>
</template>
