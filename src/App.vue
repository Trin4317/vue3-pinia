<script setup>
import { useTaskStore } from './stores/TaskStore'

const taskStore = useTaskStore()
</script>

<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
      <h4>by {{ taskStore.name }}</h4>
    </header>

    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <p>{{ task.title }}</p>
      </div>
    </div>
  </main>
</template>
