<script setup>
defineProps({
  task: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>
