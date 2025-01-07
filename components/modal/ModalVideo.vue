<script lang="ts" setup>
const { modalTarget, modalData, closeModal } = useModal();

interface Body {
  audience: 'lead' | 'prelead'
  data: {
    name: string
    email: string
    title?: string
  }
}

const form = reactive({
  name: '',
  url: '',
  email: '',
  metadata: {
    page: location.href,
    form_title: `Watch our founders share actionable CRO tactics straight from the stage - ${modalData.value?.title || ''}`,
    id: modalData.value?.id || ''
  }
});

const error = reactive({
  name: '',
  url: '',
  email: '',
  agree: false
});

const toast = useToast()
const gtm = useGtm()
const mailchimp = useMailchimp()
const excel = useExcel()
const mailer = useMailer()

const isLoading = ref(false)

onMounted(() => {
  setTimeout(() => {
    gtm?.trackEvent({
      event: 'popup_video_open'
    })
  }, 7000);
})

function validateInputs() {
  error.name = validateInput(form.name, 'name');
  error.url = validateInput(form.url, 'url');
  error.email = validateInput(form.email, 'email');

  if (error.name || error.url || error.email) return false

  return true
}

async function saveLead() {
  if (!validateInputs()) return false;

  const toastLoading = toast.loading('Submitting your data...');

  isLoading.value = true;

  gtm?.trackEvent({
    event: 'gtm_hubspot',
    data:  { ...toRaw(form) }
  })

  const body: Body = {
    audience: 'lead',
    data: { ...form, title: form.metadata.form_title }
  }

  mailchimp.save(body)
  mailer.send(form)
  await excel.save(body)

  isLoading.value = false;

  if (excel.error.value) {
    toast.update(toastLoading, {
      type: 'error',
      render: 'Error submitting data',
      autoClose: true,
      isLoading: false
    });

    return;
  }

  toast.update(toastLoading, {
    type: 'success',
    render: 'Data submitted successfully',
    autoClose: true,
    isLoading: false
  });

  if (modalData.value?.meeting) {
    window.open(
      modalData.value?.meeting.replace('<name>', form.name).replace('<email>', form.email)
    );
  }

  modalTarget.value = 'success';
}
</script>

<template>
  <div
    data-aos="zoom-in"
    class="modal__inner bg-purple_dark"
  >
    <button
      class="modal__close button button_flat"
      @click="closeModal"
    >
      <Icon
        name="solar:close-circle-linear"
        size="36"
        class="color-white"
      ></Icon>
    </button>

    <div
      class="video__wrap"
      v-if="modalData"
    >
      <div class="video__inner">
        <div class="video__title">
          {{ modalData.title}}
        </div>
        <div class="video bg--purple">
          <div class="video__loader"></div>
          <iframe
            :src="modalData.src"
            allow="autoplay"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <BasePlate
        background="white"
        class="form"
      >
        <div
          class="form__author author"
          v-if="modalData.author"
        >
          <div class="author__photo">
            <img
              :src="`images/${modalData.author.photo}`"
              alt=""
            />
          </div>
          <div class="author__info">
            <div class="author__name color-purple">
              {{ modalData.author.name }}
            </div>
            <div class="author__position">
              {{ modalData.author.position }}
            </div>
          </div>
        </div>

        <BasePlate
          background="purple-dark"
          class="form__note note color-white subtitle-2"
        >
          <img
            class="note__icon"
            src="img/modal-note-arrow-purple.svg"
            alt=""
          />

          Thanks for watching! <br />
          Schedule a free СRO strategy session call with me
          <span>
            below
            <img
              class="note__arrow"
              src="img/modal-note-arrow-yellow.png"
              alt=""
            />
          </span>
        </BasePlate>

        <div class="form__inner">
          <BaseInput
            v-model="form.name"
            small
            label="Full name"
            required
            placeholder="Your full name"
            icon="fa6-solid:user"
            :error="error.name"
            @click="error.name = ''"
            id="modal_video_name"
          />

          <BaseInput
            v-model="form.url"
            small
            label="Company URL"
            required
            placeholder="Company URL"
            icon="fa6-solid:link"
            :error="error.url"
            @click="error.url = ''"
            id="modal_video_url"
          />

          <BaseInput
            v-model="form.email"
            small
            label="Business email"
            required
            type="email"
            placeholder="Business email"
            icon="fa6-solid:envelope"
            :error="error.email"
            @click="error.email = ''"
            id="modal_video_email"
          />
        </div>

        <button
          :disabled="isLoading"
          @click.prevent="saveLead"
          class="button button_yellow form__btn subtitle-3"
        >
          Schedule a FREE call
        </button>
      </BasePlate>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal__close svg {
  color: #C8C0FF;
}
.modal__inner {
  background-color: $bg--purple-dark;
  &:before {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: url('img/bg-pixel-left.png') bottom left no-repeat;
    background-size: 50%;
    mix-blend-mode: lighten;
    @media(max-width: $md) {
      display: none;
    }
  }
}
.video {
  position: relative;
  margin-top: 12px;
  border-radius: 8px;
  overflow: hidden;
  line-height: 0;
  padding-top: 56.15%;
  background: rgba(#000, .5);
  @media(max-width: $sm) {
    margin-top: 16px;
  }
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
  }
  &__loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid $purple;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform:translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  &__wrap {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: flex-start;
    width: 100%;
    gap: 80px;
    padding: 72px 60px 82px;
    @media(max-width: $lg) {
      padding: 72px 30px 50px;
      gap: 35px;
    }
    @media(max-width: $md) {
      flex-flow: column;
      gap: 24px;
    }
    @media(max-width: $sm) {
      padding: 30px 20px 20px;
    }
  }
  &__inner {
    flex-grow: 1;
    @media(max-width: $md) {
      width: 100%;
    }
  }
  &__title {
    font-size: 32px;
    @media(max-width: $sm) {
      font-size: 18px;
    }
  }
}

.form {
  flex-shrink: 0;
  width: 405px;
  max-width: 100%;
  padding: 24px;
  color: $font-primary;
  @media(max-width: $lg) {
    width: 375px;
  }
  @media(max-width: $md) {
    width: 100%;
  }
  @media(max-width: $sm) {
    padding: 20px;
  }
  &__note {
    margin-top: 25px;
  }

  &__inner {
    display: grid;
    gap: 16px;
    margin-top: 32px;
  }

  &__btn {
    min-height: 60px;
    margin-top: 32px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
}

.author {
  display: flex;
  align-items: center;
  gap: 24px;
  @media(max-width: $sm) {
    gap: 12px;
  }
  &__name {
    font-size: 32px;
    line-height: 36px;
    @media(max-width: $sm) {
      font-size: 16px;
      line-height: 1.3;
    }
  }
  &__position {
    @media(max-width: $sm) {
      font-weight: 400;
      line-height: 1.3;
    }
  }
  &__photo {
    flex-shrink: 0;
    line-height: 0;
    width: 60px;
    @media(max-width: $sm) {
      width: 44px;
    }
  }
}

.note {
  &.plate {
    overflow: visible;
  }
  position: relative;
  padding: 16px;
  @media(max-width: $sm) {
    font-size: 18px;
  }
  &__icon {
    position: absolute;
    left: 24px;
    top: 2px;
    transform: translateY(-100%);
  }
  span {
    position: relative;
  }

  &__arrow {
    position: absolute;
    height: 105px;
    left: 40%;
    max-width: initial;
    max-height: initial;
  }
}
</style>
