<script setup>
import { useTaskStore } from '../stores/TaskStore'

defineProps({
  task: {
    required: true,
    type: Object
  }
})

const taskStore = useTaskStore()
</script>

<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i @click="taskStore.deleteTask(task.id)" class="material-icons">delete</i>
      <i
        @click="taskStore.toggleFavTask(task.id)"
        class="material-icons"
        :class="{ active: task.isFav }"
        >favorite</i
      >
    </div>
  </div>
</template>
