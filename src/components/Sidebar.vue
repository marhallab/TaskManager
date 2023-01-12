<template>
    <aside :class="isNavBarOpen ? 'sidebar' : 'sidebar -close'">
        <div class="font-bold text-4xl flex flex-col justify-center items-center" style="height: 7%;">Task Manager</div>
        <div class="flex flex-col justify-between" style="height: 90%;">
            <div>
                <h5 class="pl-8 py-6">ALL BOARDS ({{ listBoards.length }})</h5>
                <div class="sidebar__board flex items-center pl-8 py-4" v-for="(board, idx) in listBoards" :key="idx">
                    <BoardIcon />
                    <h4 class="ml-4" @click="currentBoard = board">{{ board.name }}</h4>
                </div> 
                <div class="sidebar__add flex items-center pl-8 py-4">
                    <BoardIcon />
                    <h4 class="ml-4">+ Create New Board</h4>
                </div> 
            </div> 
            <div class="pl-8 flex items-center cursor-pointer" @click="isNavBarOpen = !isNavBarOpen">
                <EyeIcon/>
                <h4 class="ml-4">Hide Sidebar</h4>
            </div> 
        </div>
    </aside>
</template>


<script setup lang="ts">
    import BoardIcon from '@/assets/icons/BoardIcon.vue'
    import EyeIcon from '@/assets/icons/EyeIcon.vue'

    import { ref } from 'vue'
    import { useTaskManagerStore } from '@/stores/index'
    import { storeToRefs } from 'pinia'

    const taskManager = useTaskManagerStore()
    const { listBoards, currentBoard, isNavBarOpen } = storeToRefs(taskManager)

</script>