<template>
  <div
    class="img-comp-container"
    ref="containerRef"
  >
    <div class="img-comp-img">
      <img
        src="https://img-comparison-slider.sneas.io/demo/images/after.webp"
        alt="Snow"
      />
    </div>
    <div
      class="img-comp-img img-comp-overlay"
      ref="overlayRef"
    >
      <img
        src="https://img-comparison-slider.sneas.io/demo/images/before.webp"
        alt="Forest"
      />
    </div>
    <div
      class="img-comp-slider"
      ref="sliderRef"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const containerRef = ref(null);
const overlayRef = ref(null);
const sliderRef = ref(null);

const initComparisons = () => {
  let clicked = false;
  let containerWidth = 0;

  const startSlide = (event) => {
    event.preventDefault();
    clicked = true;
    window.addEventListener("mousemove", moveSlide);
    window.addEventListener("mouseup", stopSlide);
    window.addEventListener("touchmove", moveSlide);
    window.addEventListener("touchend", stopSlide);
  };

  const stopSlide = () => {
    clicked = false;
    window.removeEventListener("mousemove", moveSlide);
    window.removeEventListener("mouseup", stopSlide);
    window.removeEventListener("touchmove", moveSlide);
    window.removeEventListener("touchend", stopSlide);
  };

  const moveSlide = (event) => {
    if (!clicked) return;

    const cursorPos = getCursorPos(event);
    const width = Math.max(0, Math.min(containerWidth, cursorPos));
    overlayRef.value.style.width = `${width}px`;
    sliderRef.value.style.left = `${width - sliderRef.value.offsetWidth / 2}px`;
  };

  const getCursorPos = (event) => {
    const rect = containerRef.value.getBoundingClientRect();
    const pageX = event.touches?.[0]?.pageX || event.pageX;
    return pageX - rect.left - window.pageXOffset;
  };

  const setupSlider = () => {
    const container = containerRef.value;
    const overlay = overlayRef.value;
    const slider = sliderRef.value;

    if (!container || !overlay || !slider) return;

    containerWidth = container.offsetWidth;

    overlay.style.width = `${containerWidth / 2}px`;
    slider.style.left = `${containerWidth / 2 - slider.offsetWidth / 2}px`;
    slider.style.top = `${container.offsetHeight / 2 - slider.offsetHeight / 2}px`;

    slider.addEventListener("mousedown", startSlide);
    slider.addEventListener("touchstart", startSlide);
  };

  setupSlider();
};

onMounted(() => {
  initComparisons();
});
</script>

<style scoped>
.img-comp-container {
  position: relative;
  height: 300px; /* should match the image height */
}

.img-comp-img {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.img-comp-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: initial;
  max-height: initial;
  min-width: 100%;
}

.img-comp-overlay {
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.img-comp-slider {
  position: absolute;
  z-index: 9;
  cursor: ew-resize;
  width: 40px;
  height: 40px;
  background-color: #2196F3;
  opacity: 0.7;
  border-radius: 50%;
}
</style>
