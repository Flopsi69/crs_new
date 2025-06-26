<script lang="ts" setup></script>

<template>
  <div class="line">
    <svg
      class="line__second"
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="526"
      viewBox="0 0 1440 526"
      fill="none"
    >
      <path
        d="M-39.727 -43.8593L1666.57 525.475L1681.03 482.13L-25.2642 -87.2044L-39.727 -43.8593Z"
        fill="#9372DC"
      />
    </svg>

    <svg
      class="line__first"
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="517"
      viewBox="0 0 1440 517"
      fill="none"
    >
      <path
        d="M-533.69 -218.165L1669.26 516.886L1678.43 489.409L-524.522 -245.641L-533.69 -218.165Z"
        fill="url(#paint0_linear_3348_1359)"
        fill-opacity="0.56"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3348_1359"
          x1="1673.84"
          y1="503.147"
          x2="-529.106"
          y2="-231.903"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.46"
            stop-color="white"
            stop-opacity="0.6"
          />
          <stop
            offset="1"
            stop-color="#9372DC"
          />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;;
  svg {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
  &__first {
    opacity: 0.9;
    filter: blur(45px);
    width: 100%;
  }
  &__second {
    opacity: 0.2;
    filter: blur(100px);
    width: 100%;
  }
}
</style>
