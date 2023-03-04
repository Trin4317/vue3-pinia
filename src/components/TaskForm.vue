<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/TaskStore'

const taskStore = useTaskStore()

const newTask = ref('')

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: taskStore.totalCount + 1
    })

    newTask.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="newTask" placeholder="I need to ..." />
    <button>Add</button>
  </form>
</template>
