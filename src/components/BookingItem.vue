<script setup>
// import RoundedCard from './RoundedCard.vue';
import MyButton from './MyButton.vue';
import SectionCard from './SectionCard.vue';
</script>

<template>
    <SectionCard>
        <template #default>
            <div class="flex justify-between">
                <div>Bookings</div>
                <MyButton variant="danger">Cancel</MyButton>
            </div>
        </template>
    </SectionCard>
</template>