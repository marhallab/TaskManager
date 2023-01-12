<template>
  <main class="flex h-full">
    <Sidebar />
    <Board />
  </main>
</template>

<script setup lang="ts">
  import Sidebar from '@/components/Sidebar.vue';
  import Board from '@/components/Board.vue';
  
  import { watch, onBeforeMount } from 'vue';
  import { storeToRefs } from 'pinia'
  import { useTaskManagerStore } from '@/stores/index'


  const taskManager = useTaskManagerStore()
  const { listBoards } = storeToRefs(taskManager)

  watch(listBoards, () =>{
    taskManager.updateListBoards();
  })

  onBeforeMount(()=>{
    taskManager.initialize();
  })
</script>