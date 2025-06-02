<script lang="ts" setup>
import menu from '~/configs/menu';

const { t, locale } = useI18n();
const route = useRoute();

const isBurgerActive = ref(false);

const toggleBurger = () => {
  if (isBurgerActive.value) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  isBurgerActive.value = !isBurgerActive.value;
};

const closeBurger = () => {
  if (isBurgerActive.value) {
    isBurgerActive.value = false;
    document.body.style.overflow = 'auto';
  }
};

const isPurple = computed(() => {
  return route.path === `/${locale.value}` || route.path === '/'
})

const isDarkPurple = computed(() => {
  return route.path.includes(`/${locale.value}/cro-services`) || route.path.includes('/cro-services')
})
</script>

<template>
  <header
    class="header"
    :class="{
      header_purple: isPurple,
      header_purple_dark: isDarkPurple,
    }"
  >
    <div class="container header__container">
      <NuxtLink
        to="/"
        class="logo lh-0"
      >
        <img
          src="img/logo.svg"
          alt="logo"
          height="30"
        />
      </NuxtLink>

      <nav
        v-if="menu?.navigation?.length"
        class="nav flex"
        :class="{active: isBurgerActive}"
      >
        <NuxtLink
          v-for="menuItem in menu.navigation.filter(i => i.isActive)"
          :key="menuItem.title"
          :to="menuItem.url"
          class="nav__link"
          :external="menuItem.url.includes('http')"
          @click="closeBurger()"
        >
          {{ t(menuItem.title) }}
        </NuxtLink>
      </nav>

      <!-- <LanguageToggler
        v-if="isPurple"
        :dark="isPurple"
        class="header__lang-toggler"
      /> -->

      <button
        class="header__trigger button button_flat"
        @click="toggleBurger()"
      >
        <Transition name="slide-up">
          <Icon
            v-if="!isBurgerActive"
            name="radix-icons:hamburger-menu"
            size="28"
            :color="isPurple || isDarkPurple ? '#fff' : '#000'"
          ></Icon>
          <Icon
            v-else
            name="solar:close-circle-linear"
            size="28"
            :color="isPurple || isDarkPurple ? '#fff' : '#000'"
          ></Icon>
        </Transition>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.header {
  // transition: background .2s;
  padding: 18px 0 16px;
  border-bottom: 1px solid $border;
  &_purple {
    border-color: transparent;
    background-color: $bg--purple-dark;
    color: #fff;
  }
  &_purple_dark {
    border-color: transparent;
    background-color: #3219AF;
    color: #fff;
  }
  &__container {
    display: flex;
    align-items: center;
    gap: 32px;
    @media(max-width: $md) {
      gap: 24px;
    }
  }
  &__lang-toggler {
    @media(max-width: $md) {
      margin-left: auto;
    }
  }
  &__trigger {
    position: relative;
    color: #fff;
    display: none;
    width: 28px;
    height: 28px;
    svg {
      position: absolute;
      top: 0;
      left: 0;
    }
    @media(max-width: $md) {
      display: block;
    }
  }
}

.logo {
  filter: invert(1);
  .header_purple &, .header_purple_dark & {
    filter: invert(0);
  }
  @media(max-width: $md) {
    img {
      height: 34px;
    }
  }
}

.nav {
  margin-left: auto;
  gap: 32px;
  @media(max-width: 1100px) {
    gap: 30px;
    font-size: 14px;
  }
  @media(max-width: $md) {
    padding: 24px 20px;
    position: fixed;
    z-index: 2;
    flex-flow: column;
    left: 0;
    top: 68px;
    background-color: $bg--purple-light;
    right: 0;
    gap: 40px;
    bottom: 0;
    transform: translateX(-100%);
    overflow: auto;
    &.active {
      transform: translateX(0);
    }

    .header_purple & {
      background: $bg--purple-dark;
    }

    .header_purple_dark & {
      background: #3219AF;
    }

    // TODO remove
    & + .header__trigger {
      margin-left: auto;
    }
  }

  &__link {
    transition: color .5s;
    &.router-link-exact-active {
      color: $yellow;
      pointer-events: none;
    }
    @media(hover: hover) {
      &:hover {
        color: $yellow;
      }
    }
    @media(max-width: $md) {
      font-size: 24px;
    }
  }
}
</style>
