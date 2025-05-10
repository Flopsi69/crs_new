<script lang="ts" setup>
const i18nHead = useLocaleHead()
const { locale } = useI18n()

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang
  },
  bodyAttrs: {
    class: 'lang-' + locale.value
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
}))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
