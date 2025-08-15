<script lang="ts" setup>
import menu from '~/configs/menu';

interface FooterConfig {
  background?: string;
}
// import { serviceLinks, menu} from '~/configs';
const { t, locale } = useI18n();
const route = useRoute();

const pageName = computed(() => {
  const originalName = route.name?.toString() || '';
  const nameWithoutLocale = originalName.replace(`___${locale.value}`, '');

  return nameWithoutLocale;
});


const footerConfig: Record<string, FooterConfig> = {
  // 'contact-us': {
  //   background: '#4d3a98'
  // }
};

const styleConfig = computed(() => {
  return footerConfig[pageName.value] || { isDark: false };
});
</script>

<template>
  <footer
    class="footer"
    :style="{ background: styleConfig.background }"
  >
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
          v-if="menu?.navigation?.length"
          class="nav flex"
        >
          <NuxtLink
            v-for="menuItem in menu.navigation.filter(i => i.isActive)"
            :key="menuItem.title"
            :to="menuItem.url"
            class="nav__link"
            external
          >
            {{ t(menuItem.title) }}
          </NuxtLink>
        </nav>
      </div>

      <div class="footer__bottom flex justify-between">
        <div class="copyright">
          {{ t('general.copyright') }}
        </div>

        <div
          v-if="menu?.serviceLinks?.length"
          class="meta flex"
        >
          <NuxtLink
            v-for="(linkItem, index) in menu.serviceLinks"
            :key="index"
            :to="linkItem.url"
            class="meta__link"
            target="_blank"
            external
          >
            {{ t(linkItem.title) }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 60px 0;
  color: #fff;
  background: repeating-linear-gradient(
    to right,
    rgba(255, 255, 255, 0.11) 0,
    rgba(255, 255, 255, 0.11) 0.5px,
    transparent 0.5px,
    transparent 100px
  ), linear-gradient(180deg, #392DAC 0%, #5E4EDF 100%);
  @media(max-width: $sm) {
    padding-top: 42px;
    padding-bottom: 25px;
    background: linear-gradient(180deg, #392DAC 0%, #5E4EDF 100%);
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
    margin-top: 55px;
    @media(max-width: $md) {
      flex-flow: column-reverse;
      gap: 18px;
      margin-top: 32px;
    }
  }
}

.logo {
  line-height: 0;
  img {
    width: 141px;
  }
}

.nav {
  gap: 40px;
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
  font-size: 12px;
}

.meta {
  gap: 20px;
  &__link {
    font-size: 12px;
    &:hover {
      @media(hover:hover) {
        color: $yellow;
      }
    }
  }
}
</style>
