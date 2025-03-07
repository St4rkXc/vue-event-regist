<script setup>
import EventCard from '@/components/EventCard.vue'
import BookingItem from '@/components/BookingItem.vue';
import LaodingEvent from '@/components/LoadingEventCard.vue';
import LoadingBookingEvent from '@/components/LoadingBookingEvent.vue';
import { ref, onMounted } from 'vue';

// variables
const events = ref([])
const eventsLoading = ref(false)
const bookings = ref([])
const bookingsLoading = ref(false)

// function to fetch events
const fetchEvents = async () => {
    eventsLoading.value = true
    try {
        const response = await fetch('http://localhost:3001/events')
        events.value = await response.json()
    } finally {
        eventsLoading.value = false
    }
}

// function to handle registration
const HandleRegistration = async (event) => {
    const newBooking = {
        id: Date.now().toString,
        userID: 1,
        eventID: event.id,
        eventTitle: event.title,
    };

    await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...newBooking,
            status : 'confirmed',

        }),
    });
}

// function to fetch bookings
const FetchBooking = async () => {
    bookingsLoading.value = true
    try {
        const response = await fetch('http://localhost:3001/bookings')
        bookings.value = await response.json()
    } finally {
        bookingsLoading.value = false
    }
}

// need to fetch events and bookings on component mount
onMounted( () => {
    fetchEvents()
    FetchBooking()
})

</script>

<template>
    <div class="container mx-auto my-8 space-y-8 px-2 ">
        <h1 class="text-4xl font-medium">Event Booking App</h1>
        <h2 class="text-2xl font-medium">All Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <template v-if="!eventsLoading">
                <EventCard
                    v-for="event in events"
                    :key="event.id"
                    :title="event.title"
                    :when="event.date"
                    :desc="event.description"
                    @register="HandleRegistration(event)"
                />
            </template>
            <template v-else>
                <LaodingEvent v-for="i in 4" :key="i"/>
            </template>
        </div>
        <h2 class="text-2xl font-medium">Your Bookings</h2>
        <div class="space-y-4">
            <template v-if="!bookingsLoading">
                <BookingItem v-for=" booking in bookings" :key="booking.id" 
                :title="booking.eventTitle"
                />
            </template>
            <template v-else>
                <LoadingBookingEvent v-for="i in 2" :key="i"/>
            </template>
        </div>
    </div>
</template>

