<script lang="ts" setup></script>

<template>
  <BaseSection class="feedbacks">
    <h2 class="section-title title-2">
      What do our clients say about&nbsp;us?
    </h2>

    <FeedbackList />
  </BaseSection>
</template>

<style lang="scss" scoped>
.list-wrap {
  margin-top: 40px;

  @media(max-width: $sm) {
    margin-top: 24px;
  }
}
</style>
