<script setup>

defineEmits(['click'])
</script>

<template>
    <div>
        <button class="py-2 px-3 text-sm font-semibold border border-gray-200 rounded-sm hover:bg-gray-600 hover:text-white duration-150"
            @click="$emit('click')">
                <slot></slot>
            </button>
    </div>
</template>