<script setup>
// import RoundedCard from './RoundedCard.vue';
import MyButton from './MyButton.vue';
import SectionCard from './SectionCard.vue';

defineProps ({
    title : String
})
</script>

<template>
    <SectionCard>
        <template #default>
            <div class="flex justify-between items-center">
                <div>{{ title }}</div>
                <MyButton variant="danger">Cancel</MyButton>
            </div>
        </template>
    </SectionCard>
</template>