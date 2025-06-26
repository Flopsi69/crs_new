<script lang="ts" setup>
import type { CaseStudy } from '~/types';

const { post } = defineProps<{
  post: CaseStudy
}>();

const router = useRouter();

const navigate = () => {
  router.push(`/blog/${post.url}`)
}
</script>

<template>
  <!-- :data-id="caseStudy.id" -->
  <!-- {{ caseStudy }} -->
  <!-- {{ preview }} -->
  <BasePlate
    class="post"
    solid-border
    background="white"
    @click="navigate"
  >
    <h2>{{ post.title }} -- {{ post.url }}</h2>
    <p>{{ post.description }}</p>
  </BasePlate>
</template>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-flow: column;
  padding: 35px 30px 30px;
  gap: 20px;
  cursor: pointer;
  @media(max-width: $sm) {
    padding: 30px 20px;
  }
}
</style>
