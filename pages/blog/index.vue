<script lang="ts" setup>

// TODO add meta
useSeoMeta({
  // title: '25+ Real Conversion Rate Optimization Case Studies',
  // description: 'Get inspired by real-world CRO case studies—see how Conversionrate.store delivers guaranteed growth',
})

const route = useRoute()

const isDevMode = useCookie('isDevMode')

if (import.meta.client) {
  isDevMode.value = isDevMode.value || route.query.mode === 'dev' ? 'true' : '';
}

const { data: posts } = await useBlogApi().getPosts()
console.log('posts', posts.value)

const newsletterText = {
  title: 'Sign up for our newsletter to get early updates',
  subtitle: 'Stay ahead of the game',
  button: 'Sign up',
}

const breadcrumbsItems = [
  { href: '/', text: 'Home' },
  { href: '/blog', text: 'Blog' }
]

const publishedPosts = computed(() => {
  return posts.value
  // return posts.value?.filter((item) => item.status !== 'INACTIVE') || []
});
</script>

<template>
  <main class="main blog">
    <div class="container">
      <BaseBreadcrumbs :items="breadcrumbsItems" />

      <ClientOnly>
        <button
          v-if="isDevMode"
          class="dev-mode button button_yellow"
          @click="isDevMode = ''"
        >
          DevMode - Off
        </button>
      </ClientOnly>

      <div class="blog__inner">
        <div class="blog__content">
          <div class="blog__head">
            <h1 class="blog__title title-2">Blog</h1>
            <div class="blog__caption subtitle-2">Blog caption</div>
          </div>

          <CtaBlog class="blog__cta blog__cta-mob" />

          <BlogList
            class="blog__list"
            :cols="2"
            :expand="false"
            :items="publishedPosts"
          />

          <CtaRecieveAccess
            flat
            class="blog__newsletter"
            form-id="blog_newsletter_0"
            :text="newsletterText"
          />
        </div>

        <div class="blog__aside">
          <CtaBlog class="blog__cta" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.dev-mode {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 1000;
  border-radius: 25px;
  width: 100px;
  padding: 0;
  font-size: 10px;
  min-height: 30px;
}

.blog {
  padding: 12px 0 90px;
  @media(max-width: $sm) {
    padding-bottom: 60px;
  }

  &__caption {
    margin-top: 12px;
    @media(max-width: $sm) {
      font-size: 16px;
    }
  }

  &__list {
    margin-top: 20px;
  }

  &__inner {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-top: 40px;
    @media(max-width: $md) {
      flex-flow: column;
      gap: 30px;
    }
    @media(max-width: $sm) {
      margin-top: 30px;
    }
  }
  &__content {
    flex-grow: 1;
    max-width: 100%;
    min-width: 0;
    @media(max-width: $md) {
      width: 100%;
    }
  }
  &__newsletter {
    margin-top: 60px;
    &:deep(.info_submitted) {
      max-width: 560px;
    }
    @media(max-width: $md) {
      margin-top: 30px;
    }
  }
  &__aside {
    max-width: 380px;
    width: 100%;
    position: sticky;
    top: 12px;
    flex-shrink: 0;
    @media (max-width: 1200px) {
      max-width: 300px;
    }
    @media (max-width: $md) {
      display: none;
    }
  }
  &__cta {
    &-mob {
      display: none;
      margin-top: 24px;
      @media (max-width: $md) {
        display: block;
      }
    }
  }
}

.filter {
  position: sticky;
  z-index: 10;
  top: 0;
  background: #fff;
  margin-top: 20px;
  &__inner {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 -20px;
    padding: 12px 20px;
    overflow-x: auto;
  }
  &__item {
    min-width: 70px;
    flex-shrink: 0;
    @media(max-width: $md) {
      white-space: nowrap;
    }
  }
  &__amount {
    padding-top: 3px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #E6E2FD;
  }
}
</style>
