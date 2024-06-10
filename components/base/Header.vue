<script lang="ts" setup>
import { menu } from '~/configs';

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
</script>

<template>
  <header class="header bg--purple-dark">
    <div class="container flex-between">
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
        v-if="menu.length"
        class="nav flex"
        :class="{active: isBurgerActive}"
      >
        <NuxtLink
          v-for="menuItem in menu"
          :key="menuItem.title"
          :to="menuItem.url"
          target="_blank"
          class="nav__link"
          external
        >
          {{ menuItem.title }}
        </NuxtLink>
      </nav>

      <button
        class="header__trigger button button_flat"
        @click="toggleBurger"
      >
        <Transition name="slide-up">
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
  padding: 18px 0 16px;
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
  @media(max-width: $md) {
    img {
      height: 34px;
    }
  }
}

.nav {
  gap: 40px;
  @media(max-width: 1100px) {
    gap: 30px;
  }
  @media(max-width: $md) {
    padding: 24px 20px;
    position: fixed;
    z-index: 2;
    background: $bg--purple-dark;
    flex-flow: column;
    left: 0;
    top: 68px;
    right: 0;
    gap: 40px;
    bottom: 0;
    transform: translateX(-100%);
    transition: .5s;
    overflow: auto;
    &.active {
      transform: translateX(0);
    }
  }

  &__link {
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
