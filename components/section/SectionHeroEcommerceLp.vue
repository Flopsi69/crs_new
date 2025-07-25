<script lang="ts" setup>
const { openModal } = useModal();

function handleOpenModal() {
  openModal({ id: 'ecommerce_lp_0', target: 'ecommerce-lp' });
}

onMounted(() => {
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
})
</script>

<template>
  <BaseSection
    background="purple-dark"
    class="hero"
  >
    <div class="row flex-center">
      <div class="info">
        <div class="info__title title-2">
          Get a <span class="color-yellow">20% increase</span> in your
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

      <button
        class="info__button info__button-mob button button_yellow"
        @click="handleOpenModal"
      >
        Book A cro strategy CALL
      </button>
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
    @media(max-width: $md) {
      display: none;
    }
  }
  &__subtitle {
    margin-top: 24px;
    @media(max-width: $md) {
      display: none;
    }
  }
  &__list {
    margin-top: 12px;
    @media(max-width: $md) {
      display: none;
    }
  }
  &__button {
    margin-top: 24px;
    width: 100%;
    font-size: 18px;
    min-height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    @media(max-width: $md) {
      display: none;
    }
    &-mob {
      display: none;
      @media(max-width: $md) {
        display: block;
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
  }
}
</style>
