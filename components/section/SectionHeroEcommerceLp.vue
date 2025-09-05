<script lang="ts" setup>
const { openModal } = useModal();

function handleOpenModal() {
  openModal({ id: 'ecommerce_lp_0', target: 'ecommerce-lp' });
}

const isMobile = ref(false);
const showMobileButton = ref(false);

// Setup scroll listener for mobile button visibility
let ticking = false;
const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const heroSection = document.querySelector('.hero') as HTMLElement;
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        showMobileButton.value = scrollTop > heroBottom;
      }
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 992;

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  if (isMobile.value) return;

  // Vidalytics embed script
  (function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}let vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){const vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){const vec=v[d][ve];t=new vec();t.run(a);});});
  })(window, document, 'Vidalytics', 'vidalytics_embed_RSLsg5j62pc_p0wI', 'https://fast.vidalytics.com/embeds/dsieM9by/RSLsg5j62pc_p0wI/');

   (function(v, i, d, a, l, y, t, c, s) {
      c=function(u,cb){s=i.createElement('script');s.type='text/javascript';s.async=1;s.src=u;s.onload=function(){cb();};
        i.getElementsByTagName('head')[0].appendChild(s);};c(a+'conversion.min.js?cid=cKL4SGdL',function(){
      l=new v[d]['ConversionTracking']({url:'https://stats.vidalytics.com'});l.track('dsieM9by',{conversionId:'cKL4SGdL'});});
      })(window, document, 'VidalyticsC', 'https://fast.vidalytics.com/js/');
});

// Cleanup on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <BaseSection
    background="purple-dark"
    class="hero"
  >
    <div class="row flex-center">
      <div class="info">
        <div class="info__title title-2">
          Get a
          <span class="color-yellow">20% increase</span> in your
          E&#8209;Commerce store’s conversion rate within 4 months - Guaranteed
        </div>

        <div class="info__caption text">
          If we don’t achieve a 20% uplift based on A/B test results within 4
          months, we’ll continue for FREE
        </div>

        <div class="info__subtitle subtitle-2">
          Schedule a free CRO strategy call
        </div>

        <div class="info__list list-brand text">
          <div class="info__item list-brand__item">
            Get an actionable conversion rate optimization plan for your
            e-commerce store, based on insights from 4,200 A/B tests.
          </div>
          <div class="info__item list-brand__item">
            Receive a quote for achieving a 20% conversion rate uplift.
          </div>
        </div>

        <button
          class="info__button info__button-desk button button_yellow"
          @click="handleOpenModal"
        >
          Book A cro strategy CALL
        </button>
      </div>

      <div class="video">
        <div
          id="vidalytics_embed_RSLsg5j62pc_p0wI"
          style="width: 100%; position:relative; padding-top: 56.25%;"
        ></div>
      </div>

      <Transition name="mobile-button-fade">
        <button
          v-show="showMobileButton"
          class="info__button info__button-mob button button_yellow"
          @click="handleOpenModal"
        >
          Book A cro strategy CALL
        </button>
      </Transition>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>
.hero {
  padding: 55px 0;
  @media(max-width: $md) {
    padding: 30px 0 40px;
  }
  @media(max-width: $sm) {
    padding: 20px 0 32px;
  }
  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: url('img/bg-pixel-left.png') bottom left no-repeat;
    background-size: contain;
    mix-blend-mode: lighten;
    @media(max-width: $md) {
      display: none;
    }
  }
}

.info {
  max-width: 530px;
  @media(max-width: $md) {
    max-width: 100%;
  }
  &__title {
    @media(max-width: $sm) {
      font-size: 30px;
    }
  }
  &__caption {
    margin-top: 12px;
    max-width: 500px;
    // @media(max-width: $md) {
    //   display: none;
    // }
  }
  &__subtitle {
    margin-top: 24px;
    // @media(max-width: $md) {
    //   display: none;
    // }
  }
  &__list {
    margin-top: 12px;
    // @media(max-width: $md) {
    //   display: none;
    // }
  }
  &__button {
    margin-top: 24px;
    width: 100%;
    font-size: 18px;
    min-height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    @media(max-width: $md) {
      // display: none;
    }
    &-mob {
      display: none;
      @media(max-width: $md) {
        position: fixed;
        z-index: 99;
        top: 20px;
        left: 20px;
        right: 20px;
        display: block;
        width: auto;
        margin-top: 0;
      }
    }
  }
  &__item {
    &:before {
      background-color: #fff;
    }
  }
}

.row {
  position: relative;
  gap: 40px;
  @media(max-width: $md) {
    display: block;
  }
}

.video {
  line-height: 0;
  border-radius: 22px;
  overflow: hidden;
  flex-grow: 1;
  @media(max-width: $md) {
    margin-top: 24px;
    display: none;
  }
}

// Mobile button smooth animations
.mobile-button-fade-enter-active,
.mobile-button-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.mobile-button-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.mobile-button-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.mobile-button-fade-enter-to,
.mobile-button-fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
