<script setup>
import SectionCard from './SectionCard.vue';
</script>

<template>
    <SectionCard>
        <template #default>
            <div class="flex justify-between items-center">
                <div class="skeleton h-4 w-2/3"></div>
                <div class="skeleton h-4 w-1/4"></div>
            </div>
        </template>
    </SectionCard>
</template>