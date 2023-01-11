<template>
    <aside class="sidebar">
        <div>Task Manager</div>
        <div>
            <h5>ALL BOARDS (3)</h5>
            <div v-for="(board, idx) in listBoards" :key="idx">
                <p @click="currentBoard = board">{{ board.name }}</p>
            </div>    
        </div>
    </aside>
</template>


<script setup lang="ts">
  import { useTaskManagerStore } from '@/stores/index'
  import { storeToRefs } from 'pinia'

  const taskManager = useTaskManagerStore()
  const { listBoards, currentBoard } = storeToRefs(taskManager)

</script>