import { defineStore } from 'pinia'

// Option Stores with similar syntax to Option API
export const useTaskStore = defineStore('taskStore', {
  // similar to data()
  state: () => ({
    tasks: [],
    loading: false,
    name: 'Yoshi'
  }),
  // similar to computed()
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav)
    },
    favCount() {
      return this.tasks.reduce((accumulator, currentTask) => {
        return currentTask.isFav ? accumulator + 1 : accumulator
      }, 0)
    },
    // using arrow function
    totalCount: (state) => {
      return state.tasks.length
    }
  },
  // similar to methods()
  actions: {
    async getTasks() {
      this.loading = true
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      this.tasks = data
      this.loading = false
    },
    async addTask(task) {
      this.tasks.push(task)

      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
      })

      if (res.error) {
        console.log(res.error)
      }
    },
    async deleteTask(taskId) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== taskId
      })

      const res = await fetch('http://localhost:3000/tasks/' + taskId, {
        method: 'DELETE'
      })

      if (res.error) {
        console.log(res.error)
      }
    },
    async toggleFavTask(taskId) {
      const task = this.tasks.find((t) => t.id === taskId)
      task.isFav = !task.isFav

      const res = await fetch('http://localhost:3000/tasks/' + taskId, {
        method: 'PATCH',
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { 'Content-Type': 'application/json' }
      })

      if (res.error) {
        console.log(res.error)
      }
    }
  }
})
