<script lang="ts" setup>
defineProps({
    bgClass: {
        type: String,
        required: true,
    },
    borderClass: {
        type: String,
        required: true,
    },
    alertClass: {
        type: String,
        required: true,
    },
    iconClass: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div :class="['box', 'flex', bgClass, borderClass, alertClass, iconClass]">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.box {
    padding: 28px;
    border-radius: 20px;
}

.box_description {
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
    margin: 0 0 20px;
}

.box_list {
    gap: 16px;
}

.box_item {
    width: calc(50% - 16px);
    border-radius: 10px;
    gap: 8px;
    padding: 16px 2px;
}

.box_label {
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.box_percent {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 100%;
}

@media (max-width: $sm) {
    .box {
        padding: 20px;
    }

    .box_description {
        margin-bottom: 16px;
    }

    .box_list {
        flex-wrap: wrap;
    }

    .box_item {
        width: 100%;
    }
}
</style>
