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
  <h1 class="text-4xl font-bold">Cas - Vue Starter Template</h1>

  <hr class="my-4 w-full container my-6" />
  <ul class="mt-4 flex flex-col items-center">
    <li class="mb-3 font-bold text-2xl">
      Vue 3 - <a href="https://vuejs.org/" target="_blank" class="text-blue-500">https://v3.vuejs.org/</a>
    </li>
    <li class="mb-3 font-bold text-2xl">
      Vite - <a href="https://vitejs.dev/" target="_blank" class="text-blue-500">https://vitejs.dev/</a>
    </li>
    <li class="mb-5 font-bold text-2xl">
      TypeScript - <a href="https://www.typescriptlang.org/" target="_blank" class="text-blue-500">https://www.typescriptlang.org/</a>
    </li>
    <li class="mb-2 font-bold">
      Tailwind CSS - <a href="https://tailwindcss.com/" target="_blank" class="text-blue-500">https://tailwindcss.com/</a>
    </li>
    <li class="mb-2 font-bold">
      Vue Router - <a href="https://next.router.vuejs.org/" target="_blank" class="text-blue-500">https://next.router.vuejs.org/</a>
    </li>
    <li class="mb-2 font-bold">
      Shadcn Vue by Radix Vue - <a href="https://www.shadcn-vue.com" target="_blank" class="text-blue-500">https://www.shadcn-vue.com/</a>
    </li>
    <li class="mb-2 font-bold">
      AutoAnimate by Formkit - <a href="https://auto-animate.formkit.com/" target="_blank" class="text-blue-500">https://auto-animate.formkit.com/</a>
    </li>
  </ul>

  <hr class="my-4 w-full container" />

  <h2 class="text-3xl font-bold mt-4">Counter Example</h2>
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