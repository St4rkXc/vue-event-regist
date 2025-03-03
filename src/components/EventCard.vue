<script setup>
import Button from '@/components/MyButton.vue'
import RoundedCard from '@/components/RoundedCard.vue'
defineProps({
    title: String,
    when: String,
    desc: String,
})
defineEmits(['register'])
</script>

<template>
    <RoundedCard>
        <h3 class="p-4 border-b border-gray-200 font-medium text-xl">{{ title }}</h3>
        <p class="border-b border-gray-200 p-4">{{ when }}</p>
        <p class="p-4">{{ desc }}</p>
        <div class="flex justify-end p-4">
            <Button @click="$emit('register')"  >Register</Button>
        </div>
    </RoundedCard>
</template>
