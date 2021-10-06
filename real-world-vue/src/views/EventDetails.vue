<template>
  <div v-if="event">
    <span> @id {{ $route.params.id }}</span>
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
// @ts-ignore
import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((res) => {
        console.log(res)
        this.event = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
