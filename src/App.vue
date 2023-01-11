<script setup lang="ts">
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

<template>
  <main>
    <div v-for="(board, idx) in listBoards" :key="idx">
      <p>{{ board.name }}</p>
    </div>
  </main>
</template>