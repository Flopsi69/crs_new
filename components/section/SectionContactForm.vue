<script setup lang="ts">
const { validateInput } = useValidateInput();

const form = reactive({
  name: '',
  url: '',
  email: '',
  monthly_revenue: '',
  marketing_budget: '',
  message: '',
});

const error = reactive({
  name: '',
  url: '',
  email: '',
});


function submitForm() {
  error.name = validateInput(form.name, 'name');
  error.url = validateInput(form.url, 'url');
  error.email = validateInput(form.email, 'email');

  if (error.name || error.url || error.email) return

  alert('submitted');
};
</script>

<template>
  <div class="form__wrap">
    <div class="form">
      <div class="form__title subtitle-1">Let us know how we can help</div>
      <div class="form__inputs">
        <BaseInput
          v-model="form.name"
          icon="fa6-solid:user"
          placeholder="Name"
          label="Name"
          small
          required
          :error="error.name"
          @click="error.name = ''"
        />
        <BaseInput
          v-model="form.email"
          icon="fa6-solid:envelope"
          placeholder="Business email"
          label="Business email"
          small
          required
          :error="error.email"
          @click="error.email = ''"
        />
        <BaseInput
          v-model="form.url"
          icon="fa6-solid:link"
          placeholder="URL"
          label="URL"
          small
          required
          :error="error.url"
          @click="error.url = ''"
        />
        <BaseInput
          v-model="form.monthly_revenue"
          icon="fa6-solid:coins"
          placeholder="Monthly Revenue"
          label="What is your monthly online revenue?"
          :items="['less than $250,000', '$250,000 - $1 million', '$1 million - $10 million', 'more than $10 million', 'I prefer not to say']"
          small
        />
        <BaseInput
          v-model="form.marketing_budget"
          icon="fa6-solid:coins"
          placeholder="Marketing Budget"
          label="What is your monthly digital marketing budget?"
          small
        />
        <BaseInput
          v-model="form.message"
          icon="fa6-solid:comment"
          placeholder="Message"
          label="Message"
          small
          textarea
        />
      </div>

      <button
        class="button button_yellow form__button"
        @click="submitForm"
      >
        Book a call to estimate ROI
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  position: sticky;
  top: 16px;
  display: grid;
  gap: 24px;
  &__wrap {
    position: relative;
    flex-grow: 1;
    padding: 40px 0 80px 80px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: -500%;
      bottom: 0;
      background: $bg--purple-light;
      z-index: -1;
    }
  }

  &__inputs {
    display: grid;
    gap: 16px;
    :deep(.input__error) {
      font-size: 12px;
    }
  }

  &__button {
  }
}
</style>
