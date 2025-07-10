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
    :data-id="post.id"
    @click="navigate"
  >
    <div class="post__banner">
      <img
        v-if="post.banner && post.bannerImage"
        :src="post.bannerImage"
        class="post__banner-img"
      />
      <img
        v-else
        src="@/assets/images/blog-post-placeholder.png"
      />
    </div>
    <div class="post__body">
      <div class="post__title subtitle-1">{{ post.title ?? 'Blog Post' }}</div>

      <div
        v-if="post.readTime"
        class="post-reading text color-secondary"
      >
        <img
          class="post-reading__icon"
          src="@/assets/icons/clock.svg"
        />
        <span class="post-reading__value">
          Reading time: <strong>{{ post.readTime }} min</strong>
        </span>
      </div>
      <p>{{ post.url }}</p>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-flow: column;
  cursor: pointer;
  @media(max-width: $sm) {
  }
  &__body {
    padding: 30px;
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    gap: 12px;
  }
  &__banner {
    height: 155px;
    line-height: 0;
    border-bottom: 1px solid $border;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
  }
  &__title {
    display: -webkit-box;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  &-reading {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: auto;
    &__icon {
      flex-shrink: 0;
      width: 14px;
      margin-top: -2px;
    }
  }
}
</style>
