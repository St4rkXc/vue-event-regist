<script setup>
import RoundedCard from './RoundedCard.vue'
</script>

<template>
    <RoundedCard>
        <h3 class="p-4 border-b border-gray-200 font-medium text-xl">
            <slot name="header"></slot>
        </h3>
        <div class="border-b border-gray-200 p-4">
            <slot></slot>
        </div>
        <div class="p-4" >
            <slot name="footer"></slot>
        </div>
    </RoundedCard>
</template>
