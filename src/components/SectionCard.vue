<script setup>
import RoundedCard from './RoundedCard.vue'
</script>

<template>
    <RoundedCard>
        <h3 v-if="$slots.header" class="p-4 border-b border-gray-200 font-medium text-xl"> <!-- Fungsinya untuk ngedect kalo ada data ga, klo ga, ga di pake slotnya -->
            <slot name="header"></slot>
        </h3>
        <div v-if="$slots.default" class="border-b border-gray-200 p-4">
            <slot></slot>
        </div>
        <div v-if="$slots.footer" class="p-4" >
            <slot name="footer"></slot>
        </div>
    </RoundedCard>
</template>
