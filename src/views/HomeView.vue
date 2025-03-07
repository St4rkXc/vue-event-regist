<script setup>
import EventCard from '@/components/EventCard.vue'
import BookingItem from '@/components/BookingItem.vue';
import { ref, onMounted } from 'vue';

const events = ref([])

const fetchEvents = async () => {
    const response = await fetch('http://localhost:3001/events')
    events.value = await response.json()
    console.log(events.value)
}

onMounted( () => {
    fetchEvents()
})

</script>

<template>
    <div class="container mx-auto my-8 space-y-8">
        <h1 class="text-4xl font-medium">Event Booking App</h1>
        <h2 class="text-2xl font-medium">All Events</h2>
        <div class="grid grid-cols-2 gap-6">
            <EventCard
                v-for="event in events"
                :key="event.id"
                :title="event.title"
                :when="event.date"
                :desc="event.description"
                @register="console.log('Registering...')"
            />
        </div>
        <h2 class="text-2xl font-medium">Your Bookings</h2>
        <div class="space-y-4">
            <BookingItem v-for=" i in 3" :key="i" />
        </div>
    </div>
</template>
