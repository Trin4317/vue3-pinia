<script setup>
import { useTaskStore } from './stores/TaskStore'
import TaskDetails from './components/TaskDetails.vue'
import { ref } from 'vue'
import TaskForm from './components/TaskForm.vue'
import { storeToRefs } from 'pinia';

const taskStore = useTaskStore()

const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore)

// fetch tasks
taskStore.getTasks()

const toggle = ref('all')
</script>

<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="pinia logo" />
      <h1>Pinia Tasks</h1>
      <h4>by {{ name }}</h4>
    </header>

    <div class="new-task-form">
      <TaskForm />
    </div>

    <nav class="filter">
      <button @click="toggle = 'all'">All Tasks</button>
      <button @click="toggle = 'fav'">Favorites Tasks</button>
    </nav>

    <div class="loading" v-if="loading">Loading tasks...</div>

    <div class="task-list" v-if="toggle === 'all'">
      <p>You have {{ totalCount }} tasks left to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="toggle === 'fav'">
      <p>You have {{ favCount }} favorited tasks</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="filter">
      <button @click="taskStore.$reset">Reset State</button>
    </div>
  </main>
</template>
