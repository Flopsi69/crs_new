<script lang="ts" setup>
defineProps({
  feedback: {
    type: Object,
    required: true,
    default: () => ({
      name: String,
      position: String,
      company: String,
      avatar: String,
      text: String,
    }),
  },
})
</script>

<template>
  <BasePlate class="feedback">
    <div class="feedback__info flex">
      <div class="avatar">
        <img
          :src="`/images/avatar/${feedback.avatar}`"
          :alt="`Avatar of ${feedback.name}`"
        />
      </div>

      <div class="feedback__author-mob">
        <div class="feedback__author-name subtitle-3">{{ feedback.name }}</div>
        <div class="feedback__author-position text text-sm">
          {{ feedback.position }}
        </div>
      </div>

      <BaseTextExpand
        class="text lh-15"
        :text="feedback.text"
      >
      </BaseTextExpand>
    </div>

    <div class="feedback__footer flex-between">
      <div class="feedback__author">
        <div class="feedback__author-name subtitle-3">{{ feedback.name }}</div>
        <div class="feedback__author-position text text-sm">
          {{ feedback.position }}
        </div>
      </div>

      <div
        v-if="feedback.logo"
        class="feedback__company flex align-center justify-end"
      >
        <img
          :src="`/images/logo/${feedback.logo}`"
          alt=""
        />
      </div>
    </div>
  </BasePlate>
</template>

<style lang="scss" scoped>
.text-expand {
  flex-grow: 1;
}

.feedback {
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding: 30px;
  @media(max-width: $xs) {
    padding: 24px 16px;
  }
  &__info {
    gap: 20px;
    @media(max-width: $xs) {
      flex-wrap: wrap;
      align-items: center;
    }
  }
  &__footer {
    margin-top: auto;
    gap: 20px;
  }
  &__author {
    &-mob {
      display: none;
      flex: 1;
      @media(max-width: $xs) {
        display: block;
      }
    }
    @media(max-width: $xs) {
      .feedback__footer & {
        display: none;
      }
    }
    &-position {
      font-size: 14px;
      font-weight: 400;
      margin-top: 3px;
    }
  }
  &__company {
    height: 40px;
    width: 175px;
    @media(max-width: $xs) {
      justify-content: flex-start;
      height: auto;
      width: auto;
      img {
        max-height: 40px;
        max-width: 160px;
      }
    }
  }
}

.avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: rgba($purple, .1);
  flex-shrink: 0;
  overflow: hidden;
  @media(max-width: $xs) {
    width: 80px;
    height: 80px;
  }
}
</style>
