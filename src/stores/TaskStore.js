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
  })
})
