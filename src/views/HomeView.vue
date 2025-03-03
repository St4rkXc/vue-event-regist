<script setup>
import EventCard from '@/components/EventCard.vue'
import BookingItem from '@/components/BookingItem.vue';
</script>

<template>
    <div class="container mx-auto my-8 space-y-8">
        <h1 class="text-4xl font-medium">Event Booking App</h1>
        <h2 class="text-2xl font-medium">All Events</h2>
        <div class="grid grid-cols-2 gap-6">
            <EventCard
                v-for="i in 8"
                :key="i"
                title="Makan Nasi Goreng"
                when="Today at 6:00 PM"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
        </div>
        <h2 class="text-2xl font-medium">Your Bookings</h2>
        <div class="space-y-4">
            <BookingItem v-for=" i in 3" :key="i" />
        </div>
    </div>
</template>
