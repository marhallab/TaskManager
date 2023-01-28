<!--
    TODO: handle sidebar responsiveness
    TODO: Add modal to create new board
    TODO: Add logic to create new board
-->
<template>
    <aside :class="isNavBarOpen ? 'sidebar' : 'sidebar -close'">
        <div class="font-bold text-4xl flex flex-col justify-center items-center" style="height: 7%; min-height: 75px;">Task Manager</div>
        <div class="flex flex-col justify-between" style="height: 90%;">
            <div class="sidebar__content">
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
            <button @click="isOpen = true">Show modal</button>
            <div class="pl-8 my-2 flex items-center cursor-pointer" style="min-height:20px;" @click="isNavBarOpen = !isNavBarOpen">
                <EyeIcon/>
                <h4 class="ml-4">Hide Sidebar</h4>
            </div> 
        </div>
        
        <Modal :open="isOpen" @close="isOpen = !isOpen">
                <p>test</p>
        </Modal>
    </aside>
</template>


<script setup lang="ts">
    import BoardIcon from '@/assets/icons/BoardIcon.vue'
    import EyeIcon from '@/assets/icons/EyeIcon.vue'
    import Modal from '@/components/Modal.vue'


    import { ref } from 'vue'
    import { useTaskManagerStore } from '@/stores/index'
    import { storeToRefs } from 'pinia'

    const taskManager = useTaskManagerStore()
    const { listBoards, currentBoard, isNavBarOpen } = storeToRefs(taskManager)

    const isOpen = ref(false);

</script>