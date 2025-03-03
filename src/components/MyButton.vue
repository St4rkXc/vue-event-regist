<script setup>
defineEmits(['click'])

const variants = {
    default: 'border-gray-200  hover:bg-gray-600 hover:text-white',
    danger: 'bg-red-200 enabled:hover:bg-red-100 text-red-800',
}

defineProps({
    variant: {
        type: String,
        default: 'default'
    }
})
</script>

<template>
    <!-- untuk ganti style button based on variants -->
    <div>
        <button :class="['py-2 px-3 text-sm font-semibold border duration-150 rounded-xl', variants[variant] ?? variants.default]"
            @click="$emit('click')">
                <slot></slot>
            </button>
    </div>
</template>