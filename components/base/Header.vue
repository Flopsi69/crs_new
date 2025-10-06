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
  'conversion-rate-optimization-services': {
    isDark: true,
    background: '#3219AF'
  },
  'e-commerce-lp': {
    isDark: true,
    background: '#4d3a98'
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
  'landing-page-optimization-services': {
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
  },
  'contact-us': {
    isDark: true,
    background: '#4d3a98'
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
        v-if="menu?.headerNavigation?.length"
        class="nav flex"
        :class="{active: isBurgerActive}"
        :style="{'--nav-bg': styleConfig.background}"
      >
        <div
          v-for="menuItem in menu.headerNavigation"
          :key="menuItem.title"
          class="nav__item"
          :class="{ 'nav__item--has-submenu': menuItem.subMenu?.length }"
        >
          <NuxtLink
            :to="menuItem.url"
            class="nav__link"
            :class="{
              'button button_yellow nav__link--yellow flex-center': menuItem.title.includes('contactUs'),
              'nav__link--has-submenu': menuItem.subMenu?.length
            }"
            :external="menuItem.url.includes('http')"
            @click="closeBurger()"
          >
            {{ t(menuItem.title) }}
            <Icon
              v-if="menuItem.subMenu?.length"
              class="nav__link-icon"
              name="mdi:chevron-up"
              size="20"
            ></Icon>
          </NuxtLink>

          <div 
            v-if="menuItem.subMenu?.length"
            class="nav__submenu"
          >
            <NuxtLink
              v-for="submenuItem in menuItem.subMenu"
              :key="submenuItem.title"
              :to="submenuItem.url"
              class="nav__submenu-link"
              :external="submenuItem.url.includes('http')"
              @click="closeBurger()"
            >
              {{ t(submenuItem.title) }}
            </NuxtLink>
          </div>
        </div>
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
  gap: 40px;
  @media(max-width: 1200px) {
    gap: 25px;
  }
  @media(max-width: $md) {
    padding: 24px 20px;
    position: fixed;
    z-index: 99;
    flex-flow: column;
    left: 0;
    top: 68px;
    background: $bg--purple-light;
    right: 0;
    gap: 22px;
    bottom: 0;
    transform: translateX(-100%);
    overflow: auto;
    transition: background .3s ease-out;
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

  &__item {
    position: relative;
    @media(max-width: $md) {
      width: 100%;
    }
    @media(hover: hover) {
      &:hover .nav__submenu {
        display: block;
      }
    }
  }

  &__submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    border-radius: 12px;
    border: 1px solid #EFECFE;
    background: #FFF;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12);
    padding: 16px;
    min-width: 250px;
    @media(max-width: $md) {
      display: block;
      min-width: auto;
      position: relative;
      top: 0;
      box-shadow: none;
      background: transparent;
      border: none;
      padding: 12px 0 0 30px;
      &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 12px;
        bottom: 0;
        width: 1px;
        background-color: #574FA4;
      }
    }
    &-link {
      position: relative;
      display: block;
      color: #393939;
      font-size: 14px;
      &.router-link-exact-active {
        color: $yellow;
        pointer-events: none;
        @media(max-width: $md) {
          &:before {
            position: absolute;
            content: '';
            left: -19px;
            width: 3px;
            top: 0;
            bottom: 0;
            background: $yellow;
          }
        }
      }
      @media(max-width: $md) {
        font-size: 16px;
        padding: 7px 0;
        .header_dark & {
          color: #fff;
        }
      }
      @media(hover: hover) {
        &:hover {
          color: $yellow;
        }
      }
      & + & {
        margin-top: 12px;
        @media(max-width: $md) {
          margin-top: 0;
        }
      }
    }
  }

  &__link {
    font-size: 18px;
    transition: color .25s;
    padding: 5px 0;
    @media(max-width: 1200px) {
      font-size: 14px;
    }
    @media(hover: hover) {
      &:hover {
        color: $yellow;
      }
    }
    @media(max-width: $md) {
      font-size: 18px;
      width: 100%;
      line-height: 26px;
      padding: 0;
    }
    &:not(.nav__link--yellow).router-link-exact-active {
      color: $yellow;
      pointer-events: none;
    }
    &--has-submenu {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    &--yellow {
      min-height: 42px;
      padding-left: 24px;
      padding-right: 24px;
      text-transform: none;
      @media(max-width: $md) {
        text-transform: uppercase;
        min-height: 60px;
        width: 100%;
        margin-top: 12px;
      }
    }
    &-icon {
      transition: transform .25s;
      transform: rotate(180deg);
      @media(max-width: $md) {
        display: none;
      }
      .nav__item:hover & {
        transform: rotate(0deg);
      }
    }
  }
}
</style>
