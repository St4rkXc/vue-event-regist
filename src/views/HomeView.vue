<script setup>
import BookingItem from '@/components/BookingItem.vue';
import LoadingBookingEvent from '@/components/LoadingBookingEvent.vue';
import EventList from '@/components/eventList.vue'
import { ref, onMounted } from 'vue';

// variables
const bookings = ref([])
const bookingsLoading = ref(false)


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

const findBookingId = (id) => {
    bookings.value.findIndex(booking => booking.id === id)
}

// function to handle registration
const HandleRegistration = async (event) => {
    if(bookings.value.some( booking => booking.eventID === event.id && booking.userID === 1)){
        alert('You have already registered for this event')
        return
    }
    const newBooking = {
        id: Date.now().toString(),
        userID: 1,
        eventID: event.id,
        eventTitle: event.title,
        status : 'pending'
    };
    try{
        const response = await fetch('http://localhost:3001/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...newBooking,
                status : 'confirmed',
    
            }),
        });
        if (response.ok){
            const index = findBookingId(newBooking.id)
            bookings.value[index] = await response.json()
        } else {
            throw new Error('Failed to create booking')
        }
    } catch (e){
        console.error(`Failed to register for event: ${e}`)
        bookings.value = bookings.value.filter(booking => booking.eventID !== event.id)
    }
}

const cancelBooking = async (bookingID) => {
    const index = findBookingId(bookingID)
    const originalBooking = bookings.value[index]
    bookings.value.splice(index, 1)

    try {
        const response = await fetch(`http://localhost:3001/bookings/${bookingID}`, {method: 'DELETE'})
        if (!response.ok) {
            throw new Error('Failed to cancel booking')
        }
    } catch (e){
        console.error(`Failed to cancel booking : ${e}`)
        bookings.value.splice(index, 0, originalBooking)
    }
}

// need to fetch events and bookings on component mount
onMounted( () => {
    FetchBooking()
})

</script>

<template>
    <div class="container mx-auto my-8 space-y-8 px-2 ">
        <h1 class="text-4xl font-medium">Event Booking App</h1>
        <h2 class="text-2xl font-medium">All Events</h2>
        <EventList @register="HandleRegistration($event)"/>
        <h2 class="text-2xl font-medium">Your Bookings</h2>
        <div class="space-y-4">
            <template v-if="!bookingsLoading">
            <BookingItem v-for=" booking in bookings" :key="booking.id" 
                :title="booking.eventTitle" :status="booking.status" @cancelled="cancelBooking(booking.id)" 
                />
            </template>
            <template v-else>
                <LoadingBookingEvent v-for="i in 2" :key="i"/>
            </template>
        </div>
    </div>
</template>

