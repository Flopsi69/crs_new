<script setup lang="ts">
import reviews_all from '@/configs/feedbacks'
const reviews = reviews_all.slice(0, 3)
const isMobile = ref(false)

onMounted(() => {
  if (window.innerWidth < 768) {
    isMobile.value = true
  }
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      isMobile.value = true
    } else {
      isMobile.value = false
    }
  })
})
</script>

<template>
  <div class="contact_us">
    <div class="main_part">
      <div class="main_part__content">
        <Breadcrumbs :items="[
          { href: '/', text: 'Home' },
          { href: '/contact-us', text: 'Contacts' }
        ]" />
        <div class="heading">
          <h1>Contact Us</h1>
          <a href="mailto:i@conversionrate.store">
            <Icon name="fa6-solid:envelope" />
            i@conversionrate.store
          </a>
        </div>
        <SectionContactForm v-if="isMobile" />
        <p class="client_reviews__title">What do our clients say about us?</p>
        <ul class="client_reviews">
          <li class="client_reviews__item" v-for="(item, index) in reviews" :key="index">
            <div class="client_reviews__text">
              <div class="client_reviews__top">
                <img :src="`/images/avatar/${item.avatar}`" :alt="item.name" />
                <div v-if="isMobile">
                  <p class="client_reviews__name">{{ item.name }}</p>
                  <p class="client_reviews__position">{{ item.position }}</p>
                </div>
              </div>
              <p>{{ item.text }}</p>
            </div>
            <div class="client_reviews__info">
              <div v-if="!isMobile">
                <p class="client_reviews__name">{{ item.name }}</p>
                <p class="client_reviews__position">{{ item.position }}</p>
              </div>
              <img :src="`/images/logo/${item.logo}`" alt="logo" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <SectionContactForm v-if="!isMobile" />
  </div>
</template>

<style lang="scss" scoped>
.contact_us {
  display: flex;
}

.main_part {
  width: calc(720px + ((100vw - 1200px) / 2));
  display: flex;
  flex-direction: row-reverse;

  @include w768 {
    width: 100%;
  }

  &__content {
    padding: 0 80px 0 0;
    width: 100%;
    max-width: 720px;

    @include w768 {
      padding: 0;
    }
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0 33px;

    @include w768 {
      flex-direction: column;
      align-items: flex-start;
      margin: 0 0 20px;
      gap: 16px;
      padding: 0 20px;
    }

    h1 {
      font-size: 36px;
    }

    a {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      color: #222;
      padding: 10px 16px;
      background: $bg--purple-light;
      border-radius: 20px;

      svg {
        width: 20px;
        height: 20px;
        color: $purple;
      }
    }
  }
}

.client_reviews {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 60px;

  @include w768 {
    padding: 0 20px;

    &__item {
      padding: 24px 16px;
      background: $bg--purple-light;
      border-radius: 24px;
    }
  }

  &__title {
    font-size: 24px;
    margin-bottom: 24px;

    @include w768 {
      padding: 0 20px;
      margin-top: 40px;
      font-size: 28px;
    }
  }

  &__top {
    flex-shrink: 0;

    @include w768 {
      display: flex;
      gap: 12px;
      align-items: center;
    }
  }

  &__text {
    display: flex;
    gap: 20px;
    width: 100%;
    margin-bottom: 9px;

    @include w768 {
      flex-direction: column;
      gap: 12px;
      margin-bottom: 16px;
    }

    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;

      @include w768 {
        width: 80px;
        height: 80px;
      }
    }

    p {
      line-height: 24px;
      font-size: 16px;
      font-weight: 400;
      color: #545454;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 30px;
      width: auto;
    }
  }

  &__name {
    font-size: 18px;
  }

  &__position {
    font-size: 14px;
    font-weight: 400;
    color: #545454;
  }

}
</style>