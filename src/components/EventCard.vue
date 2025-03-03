<script setup>
import Button from '@/components/Button.vue'

defineProps({
    title: String,
    when: String,
    desc: String,
})
defineEmits(['register'])
</script>

<template>
    <div class="border border-gray-200 bg-white rounded-md">
        <h3 class="p-4 border-b border-gray-200 font-medium text-xl">{{ title }}</h3>
        <p class="border-b border-gray-200 p-4">{{ when }}</p>
        <p class="p-4">{{ desc }}</p>
        <div class="flex justify-end p-4">
            <Button @click="emit('register')" label="Register" />
        </div>
    </div>
</template>
