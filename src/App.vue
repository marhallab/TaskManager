<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useTaskManagerStore } from '@/stores/index'

const taskManager = useTaskManagerStore()

onBeforeMount(()=>{
  taskManager.initialize();
  console.log(taskManager.getBoardById(2))
})
</script>

<template>
  <main>
    <p>test</p>
  </main>
</template>