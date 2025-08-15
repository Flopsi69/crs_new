<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  small: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array,
    default: [],
  },
  error: {
    type: String,
    default: null,
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: null,
  },
})

const isOpen = ref(false);
// const error = ref(false);

const model = defineModel();

const toggleDropdown = () => {
  if (!props.items?.length) return;

  isOpen.value = !isOpen.value;
};

const target = ref(null)

onClickOutside(target, () => {
  if (isOpen.value) {
    isOpen.value = false
  }
})
</script>

<template>
  <!-- v-on-click-outside="toggleDropdown" -->
  <label
    :id="id + '_wrap'"
    ref="target"
    class="input__group"
    :class="{ group_required: required, group_icon: icon, group_error: error, group_small: small, group_dropdown: items?.length, active: isOpen}"
  >
    <span
      v-if="label"
      class="input__label"
      >{{ label }}&nbsp;</span
    >

    <div
      class="input__wrap"
      :class="{ 'textarea__wrap': textarea }"
    >
      <Icon
        v-if="icon"
        class="input__icon"
        :name="icon"
        width="18"
        :height="small ? 14 : 18"
      />

      <template v-if="items?.length">
        <Icon
          v-if="!isOpen"
          name="line-md:chevron-down"
          class="dropdown__icon color-purple"
          size="20"
        />
        <Icon
          v-else
          name="line-md:chevron-up"
          class="dropdown__icon color-purple"
          size="20"
        />
      </template>

      <textarea
        v-if="textarea"
        :id="id"
        v-model="model"
        class="input textarea"
        v-bind="$attrs"
        :placeholder="placeholder"
      />

      <input
        v-else
        :id="id"
        v-model="model"
        type="text"
        class="input"
        v-bind="$attrs"
        :autocomplete="items?.length ? 'off' : 'on'"
        :placeholder="placeholder"
        :readonly="!!items?.length"
        @click="toggleDropdown"
      />
    </div>

    <div
      v-if="error"
      class="input__error"
    >
      {{ error }}
    </div>

    <div
      v-if="items?.length"
      class="input__dropdown dropdown"
      :class="{ active: isOpen }"
    >
      <div
        v-for="(item, index) of items"
        :key="index"
        class="dropdown__item"
        :class="{ 'active': model === item }"
        @click="model = item"
      >
        {{ item }}
      </div>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.input {
  border-radius: 100px;
  border: 1px solid $border;
  background: #fff;
  width: 100%;
  min-height: 50px;
  padding: 13px 24px 11px;
  transition: 0.3s;
  outline: none;
  height: 100%;

  &:focus, .active & {
    border-color: $purple;
  }

  &::placeholder {
    color: $font-light;
  }

  .group_small & {
    font-size: 14px;
  }

  .group_dropdown & {
    padding-right: 40px;
    cursor: pointer;
  }

  .group_icon & {
    padding-left: 50px;
  }

  .group_error & {
    border-color: #F40000;
  }


  &__group {
    position: relative;
    display: grid;
    gap: 4px;
    flex-grow: 1;
  }

  &__label {
    color: $font-secondary;
    font-size: 14px;
    cursor: pointer;
    .group_required & {
      &::after {
        content: '*';
        margin-left: 4px;
      }
    }
  }

  &__wrap {
    position: relative;
    z-index: 1;
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    color: $purple;
    pointer-events: none;
  }

  &__error {
    position: absolute;
    top: 101%;
    right: 20px;
    color: #F40000;
    font-size: 14px;
    text-align: right;
    @media(max-width: $sm) {
      font-size: 13px;
    }
  }
}

.textarea {
  resize: vertical;
  min-height: 110px;
  line-height: normal;
  border-radius: 32px;
  padding: 12px 24px;
  &__wrap {
    line-height: 0;
  }
}

.dropdown {
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  // top: calc(100% - 25px);
  top: 100%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 1px solid $purple;
  border-top: none;
  padding-top: 8px;
  padding-bottom: 16px;
  background: #fff;
  font-size: 14px;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease-out;
  &:before, &:after {
    content: "";
    position: absolute;
    left: -1px;
    top: -25px;
    width: 1px;
    height: 30px;
    background: #5c51a5;
  }
  &:after {
    left: auto;
    right: -1px;
  }
  &.active {
    transform: scaleY(1);
  }
  &__icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    color: $purple;
    pointer-events: none;
  }

  &__item {
    padding: 8px 16px;
    transition: .3s;
    cursor: pointer;
    &:hover {
      background: $bg--purple-light;
    }
    &.active {
      background: $bg--purple-dark;
      color: #fff;
    }
  }
}
</style>
