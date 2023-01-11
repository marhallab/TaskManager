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

<template>
  <main class="flex h-full">
    <Sidebar />
    <div>
      <div v-for="(board, idx) in listBoards" :key="idx">
        <p class="text-3xl font-bold underline">{{ board.name }}</p>
      </div>
    </div>
  </main>
</template>