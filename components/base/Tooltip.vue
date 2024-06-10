<script lang="ts" setup></script>

<template>
  <div class="tooltip">
    <TooltipProvider>
      <TooltipRoot :delay-duration="0">
        <TooltipTrigger class="tooltip__trigger button">
          <Icon
            class="color-purple"
            name="fa-solid:info-circle"
            size="14"
          />
        </TooltipTrigger>

        <TooltipContent
          class="tooltip__content border bg--white"
          :side-offset="4"
          align="start"
          :align-offset="-50"
        >
          <slot />

          <TooltipArrow
            class="tooltip__arrow"
            :width="12"
            :height="6"
          />
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  &__trigger {
    padding: 0;
    min-height: auto;
    line-height: 0;
    &:not([data-state="closed"]) svg {
      color: $yellow;
    }
  }

  &:deep(.tooltip__content) {
    padding: 12px;
    border-radius: 12px;
    font-weight: 400;
    max-width: 254px;
  }

  :deep(.tooltip__arrow) {
    fill: #fff;
    stroke: $border;
    stroke-width: 2px;
    margin-top: -1px;
  }
}
</style>
