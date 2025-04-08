<script lang="ts" setup>
const { t, locale } = useI18n();

let faqs = [];

try {
  const module = await import(`~/i18n/locales/${locale.value}/faqs.json`);
  faqs = module.default;
} catch (error) {
  console.log(`Failed to load table faq for locale ${locale.value}`);
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
    class="faq"
    id="faq"
    v-if="faqs.length"
  >
    <BasePlate
      background="purple-light"
      class="faq__inner"
    >
      <h2 class="section-title title-2 text-center">
        {{ $t('sectionFAQ.title') }}
      </h2>

      <div
        class="faq__list"
        v-if="faqs.length"
      >
        <BasePlate
          v-for="(faq, index) of faqs"
          :key="index"
          class="faq__item"
          :class="{active: activeFaq === index}"
          @click="activeFaq = activeFaq === index ? null : index"
          background="white"
          solid-border
          v-auto-animate
        >
          <h3 class="faq__item-title subtitle-3">
            {{ faq.question }}
          </h3>
          <div
            v-if="activeFaq === index"
            class="faq__item-content text color-secondary"
            :key="index"
          >
            <template v-if="Array.isArray(faq.answer)">
              <template
                v-for="(item, subIndex) in faq.answer"
                :key="subIndex"
              >
                <p v-if="typeof item === 'string'">{{ item }}</p>
                <ul
                  class="list-brand"
                  v-else-if="Array.isArray(item)"
                >
                  <li
                    class="list-brand__item"
                    v-for="(listItem, listIndex) in item"
                    :key="listIndex"
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
