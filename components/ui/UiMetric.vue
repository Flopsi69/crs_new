<script lang="ts" setup>
type Metric = {
  label: string;
  value: string;
};

const props = defineProps({
  description: {
    type: String,
    default: '',
  },
  dark: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  metrics: {
    type: Array as PropType<Metric[]>,
    default: () => []
  },
  id: {
    type: String,
    default: '',
  }
});



const metricBackground = computed(() => {
  if (props.light) {
    return 'purple'
  } else if (props.dark && !props.description) {
    return 'violet'
  }

  return 'purple-light';
})

const metricColorValue =  computed(() => {
  if (props.light) {
    return 'color-white'
  } else if (props.dark && !props.description) {
    return 'color-white'
  }

  return 'color-violet'
});


const metricColorLabel =  computed(() => {
  if (props.light || props.dark && !props.description) {
    return 'color-white'
  }

  return 'color-primary'
});
</script>

<template>
  <div
    class="box"
    :class="{
      'bg--violet': dark && description,
      'bg--purple-light': light && description,
      'box_flat': !description
    }"
  >
    <div
      class="box__description subtitle-2"
      :class="{ 'color-violet': !dark }"
      v-if="description"
    >
      {{ description }}
    </div>

    <div
      class="box__metrics"
      v-if="metrics.length"
    >
      <BasePlate
        v-for="(metric, index) in metrics"
        :key="index"
        class="metric text-center"
        :background="metricBackground"
      >
        <div
          class="metric__value"
          :class="metricColorValue"
        >
          {{ metric.value }}
        </div>
        <div
          class="metric__label "
          :class="metricColorLabel"
        >
          {{ metric.label }}
        </div>
      </BasePlate>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  &:not(.box_flat) {
    padding: 28px;
    border-radius: 20px;
    border: 2px solid #EDE8F6;
    @media (max-width: $sm) {
      padding: 20px;
    }
  }


  &__description {
    line-height: 1.4;
    & + .box__metrics {
      margin-top: 20px;
      @media(max-width: $lg) {
        margin-top: 16px;
      }
    }
  }

  &__metrics {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
    @media(max-width: $lg) {
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  }
}


.metric {
  padding: 16px;
  border-radius: 10px;
  line-height: 1;
  .box_flat & {
    padding: 24px 28px;
  }
  &__value {
    font-size: 28px;
    .box_flat & {
      font-size: 42px;
    }
  }
  &__label {
    margin-top: 8px;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}
</style>
