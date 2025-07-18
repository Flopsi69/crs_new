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

interface HeaderConfig {
  isDark: boolean;
  background?: string;
}

const headerConfig: Record<string, HeaderConfig> = {
  'index': {
    isDark: true,
    background: '#4d3a98'
  },
  'cro-services': {
    isDark: true,
    background: '#3219AF'
  },
  'app-conversion-rate-optimization-services': {
    isDark: true,
    background: '#3219AF'
  },
  'ecommerce-conversion-rate-optimization-services': {
    isDark: true,
    background: '#3219AF'
  },
  'saas-conversion-rate-optimization-services': {
    isDark: true,
    background: '#3219AF'
  },
  'shopify-conversion-rate-optimization-services': {
    isDark: true,
    background: '#3219AF'
  },
  'about-us': {
    isDark: true,
    background: 'linear-gradient(90deg, #5543AC 0%, #3A249F 100%)'
  }
};

const pageName = computed(() => {
  const originalName = route.name?.toString() || '';
  const nameWithoutLocale = originalName.replace(`___${locale.value}`, '');

  return nameWithoutLocale;
});

const styleConfig = computed(() => {
  return headerConfig[pageName.value] || { isDark: false };
});
</script>

<template>
  <header
    class="header"
    :class="{
      header_dark: styleConfig.isDark,
    }"
    :style="{ background: styleConfig.background }"
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
        :style="{'--nav-bg': styleConfig.background}"
      >
        <NuxtLink
          v-for="menuItem in menu.navigation.filter(i => i.isActive)"
          :key="menuItem.title"
          :to="menuItem.url"
          class="nav__link"
          :class="{
            'button button_yellow nav__link--yellow flex-center': menuItem.title.includes('contactUs'),
          }"
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
        <!-- <Transition name="slide-up"> -->
        <Icon
          v-if="!isBurgerActive"
          name="radix-icons:hamburger-menu"
          size="28"
        ></Icon>
        <Icon
          v-else
          name="solar:close-circle-linear"
          size="28"
        ></Icon>
        <!-- </Transition> -->
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// .slide-up-enter-active,
// .slide-up-leave-active {
//   transition: transform 0.25s ease-out, opacity 0.25s ease-out;
// }

// .slide-up-enter-from {
//   opacity: 0;
//   // transform: translateY(10px);
// }

// .slide-up-leave-to {
//   opacity: 0;
//   // transform: translateY(-10px);
// }

.header {
  position: relative;
  z-index: 20;
  // transition: background .2s;
  padding: 12px 0;
  border-bottom: 1px solid $border;
  @media(max-width: $md) {
    padding: 18px 0 16px;
  }
  &_dark {
    color: #fff;
    background-color: $bg--purple-dark;
    border-color: transparent;
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
    display: none;
    width: 28px;
    height: 28px;
    .header_dark & {
      color: #fff;
    }
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
  .header:not(.header_dark) & {
    filter: invert(1);
  }
  // filter: invert(1);
  // .header_dark & {
  //   filter: invert(0);
  // }
  @media(max-width: $md) {
    img {
      height: 34px;
    }
  }
}

.nav {
  align-items: center;
  margin-left: auto;
  gap: 32px;
  @media(max-width: 1100px) {
    gap: 30px;
    font-size: 14px;
  }
  @media(max-width: $md) {
    padding: 24px 20px;
    position: fixed;
    z-index: 99;
    flex-flow: column;
    align-items: flex-start;
    left: 0;
    top: 68px;
    background: $bg--purple-light;
    right: 0;
    gap: 30px;
    bottom: 0;
    transform: translateX(-100%);
    overflow: auto;
    transition: transform .3s ease-out, background .3s ease-out;
    opacity: 0;
    &.active {
      transform: translateX(0);
      opacity: 1;
    }

    .header_dark & {
      background: var(--nav-bg);
    }

    & + .header__trigger {
      margin-left: auto;
    }
  }

  &__link {
    transition: color .25s;
    &:not(.nav__link--yelow).router-link-exact-active {
      color: $yellow;
      pointer-events: none;
    }
    &--yellow {
      min-height: 42px;
      padding-left: 24px;
      padding-right: 24px;
      text-transform: none;
      @media(max-width: $md) {
        width: 100%;
        min-height: 48px;
      }
    }
    @media(hover: hover) {
      &:hover {
        color: $yellow;
      }
    }
    @media(max-width: $md) {
      font-size: 22px;
      width: 100%;
    }
  }
}
</style>
