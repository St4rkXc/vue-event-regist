<script setup lang="js">
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import LaodingEvent from '@/components/LoadingEventCard.vue';

const events = ref([])
const Loading = ref(false)

const fetchEvents = async () => {
    Loading.value = true
    try {
        const response = await fetch('http://localhost:3001/events')
        events.value = await response.json()
    } finally {
        Loading.value = false
    }
}

defineEmits(['register'])

onMounted(() => {
    fetchEvents()
})

</script>

<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <template v-if="!Loading">
                <EventCard
                    v-for="event in events"
                    :key="event.id"
                    :title="event.title"
                    :when="event.date"
                    :desc="event.description"
                    @register="$emit('register', event)"
                />
            </template>
            <template v-else>
                <LaodingEvent v-for="i in 4" :key="i"/>
            </template>
        </div>
    </div>
</template>