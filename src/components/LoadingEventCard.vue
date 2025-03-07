<script setup>
import SectionCard from './SectionCard.vue';
</script>

<template>
    <SectionCard>
        <template #header>
            <div class="skeleton h-6 w-3/4"></div>
        </template>
        <template #default>
            <div class="space-y-4">
                <div class="skeleton h-3 w-[20%]"></div>
            </div>
        </template>
        <template #footer>
            <div class="space-y-4">
                <div class="skeleton h-4 w-1/2"></div>
                <div class="skeleton h-4 w-3/5"></div>
                <div class="skeleton h-4 w-1/4"></div>
            </div>
        </template>
    </SectionCard>
</template>
