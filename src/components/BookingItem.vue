<script setup>
// import RoundedCard from './RoundedCard.vue';
import MyButton from './MyButton.vue';
import SectionCard from './SectionCard.vue';
import { defineEmits } from 'vue';

defineProps ({
    title : String,
    status : String
})

defineEmits (['cancelled'])
</script>

<template>
    <SectionCard>
        <template #default>
            <div class="flex justify-between items-center">
                <div class="flex space-x-2">
                    <div>{{ title }}</div>
                    <div>{{ status}}</div>
                </div>
                <MyButton variant="danger" @click="$emit('cancelled')">Cancel</MyButton>
            </div>
        </template>
    </SectionCard>
</template>