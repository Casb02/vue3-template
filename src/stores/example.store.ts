import { defineStore } from 'pinia'

interface ExampleStore {
  example: string
}

export const useExampleStore = defineStore('example', {
  state() {
    return {
      example: 'Hello World'
    } as ExampleStore
  },
})