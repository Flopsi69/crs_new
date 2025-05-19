<script>

</script>

<template>
  <div class="form">
    <div class="form__content">
      <h3>Let us know how we can help</h3>
      <div class="form__inputs">
        <BaseInput icon="fa6-solid:user" placeholder="Name" label="Name" />
        <BaseInput icon="fa6-solid:envelope" placeholder="Business email" label="Business email" />
        <BaseInput icon="fa6-solid:link" placeholder="URL" label="URL" />
        <BaseInput icon="fa6-solid:coins" placeholder="Annual Revenue" label="What is your annual online revenue?"
          :items="['less than $250,000', '$250,000 - $1 million', '$1 million - $10 million', 'more than $10 million', 'I prefer not to say']" />
        <BaseInput icon="fa6-solid:coins" placeholder="Marketing Budget"
          label="What is your monthly digital marketing budget?" />
        <BaseInput icon="fa6-solid:comment" placeholder="Message" label="Message" />
      </div>
      <button class="button button_yellow form__button">Book a call to estimate ROI</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: calc(480px + ((100vw - 1200px) / 2));
  background: $bg--purple-light;

  @include w768 {
    width: 100%;
  }

  &__content {
    padding: 40px 0 40px 80px;
    width: 100%;
    max-width: 480px;

    @include w768 {
      max-width: 100%;
      padding: 32px 20px;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 24px;
    }
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__button {
    width: 100%;
    margin-top: 24px;
  }
}
</style>