<script lang="ts" setup>
import { serviceLinks, menu} from '~/configs';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top flex-between">
        <NuxtLink
          to="/"
          class="logo lh-0"
        >
          <img
            src="img/logo.svg"
            alt="logo"
          />
        </NuxtLink>

        <nav
          v-if="menu.length"
          class="nav flex"
        >
          <NuxtLink
            v-for="menuItem in menu.filter(i => i.isActive)"
            :key="menuItem.title"
            :to="menuItem.url"
            class="nav__link"
            external
          >
            {{ menuItem.title }}
          </NuxtLink>
        </nav>
      </div>

      <div class="footer__bottom flex justify-between">
        <div class="copyright">
          &copy; Conversion Rate Store. All rights reserved.
          CONVERSIONRATE.STORE LIMITED Hong Kong, Glenealy street №1, Glenealy
          Tower, Unit 2A, 17/F
        </div>

        <div
          v-if="serviceLinks.length"
          class="meta flex"
        >
          <NuxtLink
            v-for="(linkItem, index) in serviceLinks"
            :key="index"
            :to="linkItem.url"
            class="meta__link"
            target="_blank"
            external
          >
            {{ linkItem.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 60px 0 20px;
  background: $font-primary;
  color: #fff;
  @media(max-width: $sm) {
    padding: 42px 0;
  }
  &__top {
    gap: 15px;
    @media(max-width: $md) {
      align-items: flex-start;
      flex-flow: column;
      gap: 32px;
    }
  }
  &__bottom {
    margin-top: 60px;
    @media(max-width: $md) {
      flex-flow: column-reverse;
      gap: 18px;
      margin-top: 32px;
    }
  }
}

.logo {
  line-height: 0;
  @media(max-width: $sm) {
    img {
      width: 200px
    }
  }
}

.nav {
  gap: 30px;
  @media(max-width: 1100px) {
    font-size: 14px;
    gap: 20px;
  }
  @media(max-width: $md) {
    gap: 16px;
  }
  @media(max-width: $sm) {
    flex-flow: column;
    font-size: 16px;
  }

  &__link:hover {
    transition: color 0.3s;
    @media(hover:hover) {
      color: $yellow;
    }
  }
}

.copyright {
  color: $font-secondary;
  font-size: 12px;
}

.meta {
  gap: 20px;
  &__link {
    font-size: 12px;
    text-decoration-line: underline;
    text-underline-offset: 3px;

    &:hover {
      @media(hover:hover) {
        color: $yellow;
      }
    }
  }
}
</style>
