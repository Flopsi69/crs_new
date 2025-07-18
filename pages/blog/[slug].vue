<script lang="ts" setup>
const route = useRoute();

const { slug } = route.params as any;

if (!slug) {
  await navigateTo('/blog');
}

const blogApi = useBlogApi();

const { data: post } = await blogApi.getPostBySlug(slug);
const { data: slugsList } = await blogApi.getPostsSlugs();

useSeoMeta({
  title: post.value?.metaTitle || post.value?.title,
  description: post.value?.metaDescription || post.value?.description,
});

const contentRef = ref<HTMLElement | null>(null)
const progress = ref<number>(0)

const handlerListArray = computed(() => {
  // return slugsList.value?.map((item: any) => item.url) || []
  return slugsList.value?.filter((i: any) => i.status === 'ACTIVE').map((item: any) => item.url) || []
});

const currentIndex = ref(handlerListArray.value.indexOf(slug));

const nextId = computed(() => {
  if (!handlerListArray.value.length) return null;

  const nextIndex =
    currentIndex.value < handlerListArray.value.length - 1
      ? currentIndex.value + 1
      : 0;

  return handlerListArray.value[nextIndex];
});

const prevId = computed(() => {
  if (!handlerListArray.value.length) return null;

  const prevIndex =
    currentIndex.value > 0
      ? currentIndex.value - 1
      : handlerListArray.value.length - 1;

  return handlerListArray.value[prevIndex];
});

const mainContent = computed(() => {
  return post.value?.content?.content || [];
});

const resultContent = computed(() => {
  return post.value?.content?.result || [];
});

const breadcrumbs = reactive([
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Blog',
    href: '/blog'
  },
  {
    text: post.value?.breadcrumb || 'Post',
    href: ''
  }
]);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const toc = computed(() => {
  return mainContent.value?.filter((item: any) => item.type === "uiSubtitle" && item.props?.level === 2).map((item: any) => ({
    title: item.props?.content,
    id: item.props?.id
  }));
})

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const handleScroll = () => {
  // const el = contentRef.value

  // if (!el) return

  // const rect = el.getBoundingClientRect()
  // const windowHeight = window.innerHeight

  // const contentTop = rect.top + window.scrollY
  // const contentHeight = el.offsetHeight

  // const scrollTop = window.scrollY
  // const scrollBottom = scrollTop + windowHeight

  // const scrolled = Math.min(
  //   1,
  //   Math.max(0, (scrollBottom - contentTop) / contentHeight)
  // )

  // progress.value = Math.round(scrolled * 100)

  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight

  const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  progress.value = Math.min(100, Math.max(0, scrolled))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
  handleScroll() // initial update
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<template>
  <main
    class="post"
    :style="{ '--progress-bar-width': progress + '%' }"
  >
    <!-- Breadcrumbs -->
    <BaseBreadcrumbs
      class="container post__breadcrumbs"
      :items="breadcrumbs"
    />

    <!-- Content container -->
    <div
      v-if="post"
      class="container container_narrow"
    >
      <!-- Inner Content -->
      <div class="post__inner">
        <!-- Article -->
        <div
          ref="contentRef"
          class="post__content"
        >
          <!-- Title -->
          <h1
            class="post__title title-1"
            v-html="post.title"
          />

          <!-- Reading time -->
          <div
            v-if="post.readTime"
            class="post__reading reading text color-secondary"
          >
            <img
              class="reading__icon"
              src="@/assets/icons/clock.svg"
            />
            <span class="reading__value">
              Reading time: <strong>{{ post.readTime }} min</strong>
            </span>
          </div>

          <!-- TOC mobile -->
          <div class="mobile">
            <div
              v-if="toc.length"
              class="post__toc toc mobile__toc"
            >
              <div
                v-for="(item, index) in toc"
                :key="index"
                class="toc__item"
                @click="scrollToSection(item.id)"
              >
                {{ item.title }}
              </div>
            </div>

            <CtaBlogDetails class="mobile__cta" />
          </div>

          <!-- Article Content -->
          <div class="post__sections">
            <section
              v-if="mainContent"
              class="post__section"
            >
              <UiComponentBuilder :content="mainContent" />
            </section>

            <div
              v-if="resultContent?.length"
              class="results"
            >
              <section class="post__section">
                <UiComponentBuilder :content="resultContent" />
              </section>
            </div>
          </div>
        </div>

        <!-- Aside -->
        <div class="post__aside">
          <!-- CTA -->
          <CtaBlog form-id="blog_post_details_0" />
          <!-- <CtaBlogDetails class="post__cta" /> -->

          <!-- TOC -->
          <div
            v-if="toc.length"
            class="post__toc toc"
          >
            <div
              v-for="(item, index) in toc"
              :key="index"
              class="toc__item"
              @click="scrollToSection(item.id)"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>

      <div class="navigation">
        <template v-if="handlerListArray.length > 1">
          <NuxtLink
            v-if="prevId"
            :to="`/blog/${prevId}`"
            class="navigation__arrow button button_trans-purple subtitle-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="#5954A0"
            >
              <path
                d="M6.03204e-07 8.01784C6.17238e-07 7.69677 0.105572 7.41137 0.316716 7.19732L7.07331 0.347826C7.4956 -0.115942 8.2346 -0.115942 8.65689 0.347826C9.11437 0.77592 9.11437 1.52508 8.65689 1.95318L2.70968 8.01784L8.65689 14.0468C9.11437 14.4749 9.11437 15.2241 8.65689 15.6522C8.2346 16.1159 7.4956 16.1159 7.07331 15.6522L0.316716 8.80267C0.105572 8.58863 5.90728e-07 8.30323 6.03204e-07 8.01784Z"
              />
            </svg>
            Previous article
          </NuxtLink>

          <NuxtLink
            v-if="nextId"
            :to="`/blog/${nextId}`"
            class="navigation__arrow button button_trans-purple subtitle-3"
          >
            Next article
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="#5954A0"
            >
              <path
                d="M9.5 7.98216C9.5 8.30323 9.39443 8.58863 9.18328 8.80268L2.42669 15.6522C2.0044 16.1159 1.2654 16.1159 0.843108 15.6522C0.385631 15.2241 0.385631 14.4749 0.843108 14.0468L6.79032 7.98216L0.843109 1.95318C0.385631 1.52508 0.385631 0.77592 0.843109 0.347827C1.2654 -0.115942 2.0044 -0.115942 2.42669 0.347827L9.18328 7.19732C9.39443 7.41137 9.5 7.69677 9.5 7.98216Z"
              />
            </svg>
          </NuxtLink>
        </template>

        <button
          class="navigation__up button button_trans-purple subtitle-3 flex-center"
          :class="{ 'navigation__up-solo': handlerListArray.length <= 1 }"
          @click="scrollToTop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="#5954A0"
          >
            <path
              d="M13.9822 8.5C14.3032 8.5 14.5886 8.60557 14.8027 8.81672L21.6522 15.5733C22.1159 15.9956 22.1159 16.7346 21.6522 17.1569C21.2241 17.6144 20.4749 17.6144 20.0468 17.1569L13.9822 11.2097L7.95318 17.1569C7.52508 17.6144 6.77592 17.6144 6.34783 17.1569C5.88406 16.7346 5.88406 15.9956 6.34783 15.5733L13.1973 8.81672C13.4114 8.60557 13.6968 8.5 13.9822 8.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.post {
  position: relative;
  overflow: clip;
  &__breadcrumbs {
    margin-top: 20px;;
  }
  &:before {
    content: '';
    position: sticky;
    display: block;
    width: var(--progress-bar-width, 0%);
    left: 0;
    top: 0;
    height: 8px;
    transition:  width 0.1s linear;
    background-color: #3C2FB0;
    z-index: 10;
    pointer-events: none;
  }
  &__head {
    margin: 42px 0;
  }
  &__image {
    margin-top: 24px;
  }
  &__inner {
    display: flex;
    // align-items: flex-start;
    gap: 100px;
    margin-top: 30px;
    @media(max-width: $lg) {
      gap: 25px;
    }
    @media(max-width: $md) {
      margin-top: 30px;
      display: block;
    }
  }
  &__content {
    flex-grow: 1;
    width: 100%;
    min-width: 0;
  }
  &__title {
    font-weight: 400;
  }
  &__title {
    @media(max-width: $md) {
      font-size: 30px;
      line-height: 38px;
    }
  }
  &__reading {
    margin-top: 12px;
  }
  &__aside {
    max-width: 380px;
    flex-shrink: 0;
    width: 100%;
    // position: sticky;
    // top: 20px;
    // margin-bottom: 60px;
    @media (max-width: $md) {
      max-width: 100%;
      margin-top: 40px;
      margin-bottom: 20px;
      .toc {
        display: none;
      }
      // display: none;
    }
  }
  &__sections {
    display: grid;
    gap: 60px;
    margin-top: 30px;
    @media(max-width: $md) {
      margin-top: 40px;
      gap: 40px;
    }
    &:deep(* + h2) {
      padding-top: 30px;
      @media(max-width: $sm) {
        padding-top: 15px;
      }
    }
    &:deep(b) {
      font-weight: bold;
    }
    &:deep(p) {
      font-size: 18px;
      font-weight: 400;
      color: $font-secondary;
      & + p {
        margin-top: -12px;
        @media(max-width: $md) {
          margin-top: -8px;
        }
      }
    }
    &:deep(.post__title span) {
      background-color: white;
    }
    &:deep(.results .post__title span) {
      background-color: $bg--purple-light;
    }
  }
  &__section {
    display: grid;
    gap: 24px;
    @media(max-width: $md) {
      gap: 20px;
    }
  }
}

.reading {
  display: flex;
  align-items: center;
  gap: 6px;
  &__icon {
    flex-shrink: 0;
    width: 14px;
    margin-top: -2px;
  }
}

.results {
  position: relative;
  background-color: $bg--purple-light;
  padding: 60px 0;
  display: grid;
  gap: 60px;
  @media(max-width: $sm) {
    padding: 40px 0;
  }
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -400%;
    width: 400%;
    height: 100%;
    background-color: $bg--purple-light;
  }
  &:after {
    left: 100%;
  }
}

.navigation {
  position: relative;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  gap: 115px;
  @media(max-width: $md) {
    padding: 40px 0;
    gap: 50px;
  }
  @media(max-width: $sm) {
    gap: 12px;
    flex-flow: column;
    padding-right: 75px;
  }
  &__arrow {
    text-transform: none;
    padding: 15px 12px 13px;
    display: flex;
    justify-content: center;
    gap: 10px;
    max-width: 235px;
    width: 100%;
    @media(max-width: $sm) {
      max-width: 100%;
    }
  }
  &__up {
    width: 50px;
    height: 50px;
    border-radius: 60px;
    padding: 0;
    margin-left: auto;
    @media(max-width: $sm) {
      position: absolute;
      right: 0;
      top: 40px;
      &-solo {
        top: 15px;
      }
    }
  }
}

.toc {
  position: sticky;
  top: 20px;
  margin-top: 32px;
  padding: 0 28px;
  @media(max-width: $md) {
    position: static;
    padding: 0;
    margin: 0;
    top: 0;
  }
  &__item {
    position: relative;
    padding-left: 18px;
    color: #545454;
    font-size: 18px;
    font-weight: 400;
    line-height: 160%;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: $purple;
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 11px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: $purple;
    }

    & + & {
      margin-top: 8px;
    }
  }
}

.mobile {
  display: none;
  padding: 20px;
  margin: 30px -20px 10px;
  background-color: #F3F1F7;
  @media(max-width: $md) {
    display: block;
  }
  &__toc {
    margin-bottom: 20px;
  }
}
</style>
