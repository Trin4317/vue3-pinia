import { defineStore } from 'pinia'

// Option Stores with similar syntax to Option API
export const useTaskStore = defineStore('taskStore', {
  // similar to data()
  state: () => ({
    tasks: [
      { id: 1, title: 'Buy Groceries', isFav: false },
      { id: 2, title: 'Play Guitar', isFav: true },
      { id: 3, title: 'Finish Homework', isFav: false }
    ],
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
    addTask(task) {
      this.tasks.push(task)
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== taskId
      })
    },
    toggleFavTask(taskId) {
      const task = this.tasks.find((t) => t.id === taskId)
      task.isFav = !task.isFav
    }
  }
})
