<script lang="ts" setup>
const { locale } = useI18n();


let competencies = [];
try {
  const module = await import(`~/i18n/locales/${locale.value}/competencies.json`);
  competencies = reactive(module.competencies);
} catch (error) {
  console.log(`Failed to load competencies for locale ${locale.value}`);
}

const { width } = useWindowSize();
const isReady = ref(false);


const setActive = (index: number) => {
  if (width.value > 768) return;

  competencies.forEach((item, i) => {
    if (i === index) {
      item.isActive = !item.isActive;
    } else {
      item.isActive = false;
    }
  });
};

onMounted(() => {
  isReady.value = true;
});
</script>

<template>
  <BaseSection
    class="competencies"
    id="9-essential-competencies"
  >
    <h2 class="section-title title-2">
      {{ $t('sectionCompetencies.title') }}
    </h2>

    <div class="caption text color-secondary">
      {{ $t('sectionCompetencies.caption') }}
    </div>

    <!-- TODO Components -->
    <!-- :class="{ 'active': isActive }" -->

    <div class="cards">
      <BasePlate
        v-for="({title, caption, isActive}, index) in competencies"
        :key="index"
        class="card"
        solid-border
        data-aos="zoom-in"
        data-aos-offset="20"
      >
        <div
          class="card__item"
          v-auto-animate
        >
          <h3
            class="card__title subtitle-1"
            @click="setActive(index)"
          >
            {{ title }}
            <Icon
              v-if="!isActive"
              name="line-md:chevron-down"
              class="card__title-icon color-purple"
              size="28"
            />
            <Icon
              v-else
              name="line-md:chevron-up"
              class="card__title-icon color-purple"
              size="28"
            />
          </h3>
          <div
            :key="title"
            class="card__caption text color-secondary"
            v-if="isReady && (isActive || width > 768)"
          >
            {{ caption }}
          </div>
        </div>
      </BasePlate>
    </div>
  </BaseSection>
</template>

<style lang="scss" scoped>

// .slide-fade-enter-active,
// .slide-fade-leave-active {
//   transition: all 0.5s ease;
// }

// .slide-fade-enter-from,
// .slide-fade-leave-to {
//   max-height: 0;
//   opacity: 0;
//   padding: 0;
// }

// .slide-fade-enter-to,
// .slide-fade-leave-from {
//   max-height: 500px;
//   opacity: 1;
// }
.caption {
  font-size: 18px;
  margin-top: 12px;
  transform-origin: top;
  transition: transform .4s ease-in-out;
  overflow: hidden;
  @media(max-width: $sm) {
    font-size: 16px;
  }
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  @media(max-width: $md) {
    grid-template-columns: 1fr;
  }
  @media(max-width: $sm) {
    margin-top: 20px;
  }
}

.card {
  padding: 30px 30px 28px;
  @media(max-width: $sm) {
    padding: 16px 16px 14px;
    border-radius: 12px;
  }
  &__title {
    position: relative;
    padding-left: 45px;
    @media(max-width: $sm) {
      display: flex;
      justify-content: space-between;
      padding-left: 28px;
      font-size: 20px;
    }
    &-icon {
      display: none;
      @media(max-width: $sm) {
        display: block;
      }
    }
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 15px;
      width: 33px;
      height: 2px;
      background-color: $purple;
      @media(max-width: $sm) {
        width: 16px;
      }
    }
  }

  &__caption {
    margin-top: 12px;
    @media(max-width: $sm) {
      // display: none;
    }
  }
}
</style>
