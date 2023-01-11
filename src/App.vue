<template>
  <main class="flex h-full">
    <Sidebar />
  </main>
</template>

<script setup lang="ts">
  import { watch, onBeforeMount } from 'vue';
  import { storeToRefs } from 'pinia'
  import { useTaskManagerStore } from '@/stores/index'
  import Sidebar from './components/Sidebar.vue';

  const taskManager = useTaskManagerStore()
  const { listBoards } = storeToRefs(taskManager)

  watch(listBoards, () =>{
    taskManager.updateListBoards();
  })

  onBeforeMount(()=>{
    taskManager.initialize();
  })
</script>