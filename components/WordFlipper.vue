<script lang="ts" setup>
// @ts-ignore
const props = defineProps({
  words: {
    type: Array,
    required: true,
    default: ['eCommerce', 'SaaS', 'App', 'LeadGen']
  },
  delay: Number
})

let interval: any;
let currentWord = ref(0);

function updateWord() {
  currentWord.value = (currentWord.value + 1) % props.words.length;
}

onMounted(() => {
  updateWord();
  interval = setInterval(updateWord, props.delay || 3000);
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div
    class="word__wrapper"
    v-if="words"
  >
    &nbsp;
    <Transition :duration="{ enter: 3800, leave: 3200 }">
      <span
        :key="currentWord"
        class="word"
      >
        <span
          v-for="(letter, letterIndex) in words[currentWord]"
          class="letter"
          :key="letter + letterIndex"
          :style="{'--letterIndex': letterIndex}"
        >
          <!-- :style="{
            transitionDelay: `${words[currentWord][letterIndex] === letter ? letterIndex * 0.08 : letterIndex * 0.08 + 0.34}s`
          }" -->
          {{ letter }}
        </span>
      </span>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.word {
  position: absolute;
  white-space: nowrap;
  &__wrapper {
    display: inline-block;
    position: relative;
    line-height: 1;
    margin-left: -5px;
  }
}

.letter {
  display: inline-block;
  transform-origin: 60% 60% 0;
}

.v-enter-from .letter {
  transform: rotateX(-90deg);
}

.v-enter-active .letter {
  transition: all 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition-delay: calc(var(--letterIndex) * 0.08s + 0.34s);
}

.v-enter-to .letter {
  transform: rotateX(0deg);
}

.v-leave-from .letter {
  opacity: 0;
  transform: rotateX(0);
}

.v-leave-active .letter {
  transition: all 0.38s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-delay: calc(var(--letterIndex) * 0.08s);
}

.v-leave-to .letter {
  transform: rotateX(90deg);
  opacity: 0;
}
</style>
