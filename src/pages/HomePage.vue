<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {ref} from "vue";

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};
</script>

<template>
<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-4xl font-bold">Home Page</h1>
  <p class="text-2xl mt-4">Waarde: {{ count }}</p>
  <div class="mt-4">
    <Button @click="increment">+</Button>
    <Button @click="decrement" class="ml-2">-</Button>
    <Button @click="reset" class="ml-2">Reset</Button>
  </div>
</div>
</template>

<style scoped>

</style>