<script setup>
import Button from '@/components/MyButton.vue'
// import RoundedCard from '@/components/RoundedCard.vue'
import SectionCard from './SectionCard.vue'
defineProps({
    title: String,
    when: String,
    desc: String,
})
defineEmits(['register'])
</script>

<template>
    <SectionCard>
        <template #header>
            {{ title }}
        </template>
        <template #default>
            <div class="text-md text-gray-500">{{ when }}</div>
        </template>
        <template #footer>
            <p>{{ desc }}</p>
            <div class="flex justify-end p-4">
                <Button @click="() => $emit('register')">Register</Button>
            </div>
        </template>
    </SectionCard>
</template>
