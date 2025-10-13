<script lang="ts" setup>
// const i18nHead = useLocaleHead()
// const { locale } = useI18n()

// useHead(() => ({
//   htmlAttrs: {
//     lang: i18nHead.value.htmlAttrs.lang
//   },
//   bodyAttrs: {
//     class: 'lang-' + locale.value
//   },
//   link: [...(i18nHead.value.link || [])],
//   meta: [...(i18nHead.value.meta || [])]
// }))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  filter: blur(2px);
  transform: scale(1.005);
}
</style>
