<script setup lang="ts">
// import reviews_all from '@/configs/feedbacks'

const isMobile = ref(false)

onMounted(() => {
  if (window.innerWidth < 768) {
    isMobile.value = true
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      isMobile.value = true
    }
    else {
      isMobile.value = false
    }
  })
})
</script>

<template>
  <main class="main contacts">
    <SectionContactUsHero class="contacts__hero" />
    <SectionClientVideos class="contacts__videos" />
    <SectionFeedbacks class="contacts__feedbacks" />
  </main>
</template>

<style lang="scss" scoped>
.contacts {
  &__videos {
    margin-top: 90px;
    @media(max-width: $md) {
      margin-top: 60px;
    }
  }
  &__feedbacks {
    margin-top: 40px;
    margin-bottom: 90px;
    @media(max-width: $md) {
      margin-top: 24px;
      margin-bottom: 60px;
    }
  }
}
</style>
