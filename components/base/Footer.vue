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
    <div class="container footer__container flex align-center">
      <div class="footer__info">
        <NuxtLink
          to="/"
          class="logo lh-0"
        >
          <img
            src="img/logo.svg"
            alt="logo"
          />
        </NuxtLink>

        <div class="copyright copyright_desk">
          {{ t('general.copyright') }}
        </div>
      </div>

      <div class="footer__column">
        <div class="footer__column-title">Our Services</div>
        <nav
          v-if="menu?.footerServices?.length"
          class="footer__nav nav"
        >
          <NuxtLink
            v-for="menuItem in menu.footerServices"
            :key="menuItem.title"
            :to="menuItem.url"
            class="nav__link"
            :external="menuItem.external"
          >
            {{ t(menuItem.title) }}
          </NuxtLink>
        </nav>
      </div>

      <div class="footer__column">
        <div class="footer__column-title">About Us</div>
        <nav
          v-if="menu?.footerAbout?.length"
          class="footer__nav nav"
        >
          <NuxtLink
            v-for="menuItem in menu.footerAbout"
            :key="menuItem.title"
            :to="menuItem.url"
            class="nav__link"
            :external="menuItem.external"
          >
            {{ t(menuItem.title) }}
          </NuxtLink>
        </nav>
      </div>

      <div class="copyright copyright_mob">
        {{ t('general.copyright') }}
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 60px 0;
  color: #fff;
  background: #3E3596;
  // background: repeating-linear-gradient(
  //   to right,
  //   rgba(255, 255, 255, 0.11) 0,
  //   rgba(255, 255, 255, 0.11) 0.5px,
  //   transparent 0.5px,
  //   transparent 100px
  // ), linear-gradient(180deg, #392DAC 0%, #5E4EDF 100%);
  @media(max-width: $sm) {
    padding: 32px 0;
    // background: linear-gradient(180deg, #392DAC 0%, #5E4EDF 100%);
  }
  &__container {
    gap: 40px;
    @media(max-width: $md) {
      gap: 20px;
    }
    @media(max-width: $sm) {
      flex-flow: column;
      align-items: flex-start;
      gap: 32px;
    }
  }
  &__info {
    max-width: 454px;
    width: 100%;
    margin-right: auto;
  }
}


.logo {
  line-height: 0;
  img {
    width: 200px;
    @media(max-width: $sm) {
      width: 141px;
    }
  }
}

.copyright {
  margin-top: 28px;
  font-size: 14px;
  line-height: 24px;
  @media(max-width: $sm) {
    font-size: 12px;
    margin-top: 0;
    line-height: normal;
  }
  &_mob {
    display: none;
    @media(max-width: $sm) {
      display: block;
    }
  }
  &_desk {
    @media(max-width: $sm) {
      display: none;
    }
  }
}

.nav {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 16px;
  min-width: 220px;
  margin-top: 16px;
  @media(max-width: $md) {
    min-width: 180px;
  }
  &__link {
    font-size: 14px;
    font-weight: 400;
    @media(hover:hover) {
      &:hover {
        transition: color 0.3s;
        color: $yellow;
      }
    }
  }
}
</style>
