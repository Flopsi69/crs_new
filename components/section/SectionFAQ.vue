<script lang="ts" setup>
const { locale } = useI18n();

const { items } = defineProps({
  items: {
    type: Array,
    default: () => null
  }
})

let faqs = items || [];

if (!faqs.length) {
  try {
    const module = await import(`~/locales/${locale.value}/faqs.json`);
    faqs = module.default;
  } catch (error) {
    console.log(`Failed to load faq for locale ${locale.value}`);
  }
}

const sanitizeText = (text: string | (string | string[])[]): string => {
  if (!Array.isArray(text)) {
    return `<p>${text}</p>`;
  }

  return text.map((item) => {
    if (typeof item === 'string') {
      return `<p>${item}</p>`;
    }

    return `<ul>${item.map((listItem) => `<li>${listItem}</li>`).join('')}</ul>`;
  }).join('');

};

useSchemaOrg([
  defineWebPage({
    '@type': 'FAQPage',
  }),
  ...faqs.map(faq =>
    defineQuestion({
      name: faq.question,
      acceptedAnswer: sanitizeText(faq.answer)
    })
  )
])

const activeFaq = ref<number | null>(0);
</script>

<template>
  <BaseSection
    v-if="faqs.length"
    id="faq"
    class="faq"
  >
    <BasePlate
      background="purple-light"
      class="faq__inner"
    >
      <h2 class="section-title title-2 text-center">
        {{ $t('sectionFAQ.title') }}
      </h2>

      <div
        v-if="faqs.length"
        class="faq__list"
      >
        <BasePlate
          v-for="(faq, index) of faqs"
          :key="index"
          v-auto-animate
          class="faq__item"
          :class="{active: activeFaq === index}"
          background="white"
          solid-border
          @click="activeFaq = activeFaq === index ? null : index"
        >
          <h3 class="faq__item-title subtitle-3">
            {{ faq.question }}
          </h3>
          <div
            v-if="activeFaq === index"
            :key="index"
            class="faq__item-content text color-secondary"
          >
            <template v-if="Array.isArray(faq.answer)">
              <template
                v-for="(item, subIndex) in faq.answer"
                :key="subIndex"
              >
                <p v-if="typeof item === 'string'">{{ item }}</p>
                <ul
                  v-else-if="Array.isArray(item)"
                  class="list-brand"
                >
                  <li
                    v-for="(listItem, listIndex) in item"
                    :key="listIndex"
                    class="list-brand__item"
                  >
                    {{ listItem }}
                  </li>
                </ul>
              </template>
            </template>
            <p v-else>
              {{ faq.answer }}
            </p>
          </div>
        </BasePlate>
      </div>
    </BasePlate>
  </BaseSection>
</template>

<style lang="scss" scoped>
.faq {
  @media(max-width: $sm) {
    padding: 40px 0;
    background: $bg--purple-light;
  }
  &__inner {
    padding: 60px 30px;
    @media(max-width: $sm) {
      padding: 0;
      border-radius: 0;
    }
  }

  &__list {
    margin: 40px auto 0;
    max-width: 720px;
    @media(max-width: $sm) {
      margin-top: 30px;
    }
  }

  &__item {
    padding: 16px 32px;
    cursor: pointer;
    @media(max-width: $sm) {
      border-radius: 12px;
      padding: 12px 16px;
    }
    & + & {
      margin-top: 12px;
    }

    &-title {
      position: relative;
      padding-right: 40px;
      @media (max-width: $sm) {
        padding-right: 25px;
        font-size: 16px;
      }
      &:before {
        content: '';
        background: url('@/assets/icons/chevron-down.svg') no-repeat center;
        background-size: contain;
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 9px;
        transition: .3s;
        @media (max-width: $sm) {
          right: 0;
        }
        .active & {
          transform: translateY(-50%) rotate(180deg);
        }
      }
      // &:after {
      //   transform: translateY(-50%) rotate(90deg);
      //   .active & {
      //     transform: translateY(-50%) rotate(180deg);
      //   }
      // }
    }

    &-content {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px dashed $border;
      &:deep(p + p) {
        margin-top: 12px;
      }
      &:deep(ul) {
        padding-left: 15px;
        margin-top: 12px;
        @media(max-width: $sm) {
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
