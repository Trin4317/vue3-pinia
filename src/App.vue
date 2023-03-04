<script setup>
import { useTaskStore } from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue'
import { ref } from 'vue'
import TaskForm from './components/TaskForm.vue'

const taskStore = useTaskStore()

const toggle = ref('all')
</script>

<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
      <h4>by {{ taskStore.name }}</h4>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="toggle = 'all'">All Tasks</button>
      <button @click="toggle = 'fav'">Favorites Tasks</button>
    </nav>

    <div class="task-list" v-if="toggle === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="toggle === 'fav'">
      <p>You have {{ taskStore.favCount }} favorited tasks</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
