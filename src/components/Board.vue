<!-- TODO: Create a disable/enable system for header__settings that depends on if the board has a column  -->
<!-- TODO: Add an absolute button in board section to show sidebar if closed  -->

<template>
    <main class="board w-full h-full">
        <header class="header w-full flex justify-between items-center px-6" style="height: 7%; min-height:75px;" >
            <h2>{{ currentBoard.name }}</h2>
            <div class="header__settings flex items-center">
                <div class="mr-4">Button</div>
                <SettingsIcon />
            </div>
        </header>
        <section class="board__content relative" style="height: 93%;" >
            <div v-if="!isNavBarOpen" class="sidebar__toggle" @click="isNavBarOpen = true">
                <OpenEyeIcon />
            </div>
        </section>
    </main>
</template>


<script setup lang="ts">
    import SettingsIcon from '@/assets/icons/SettingsIcon.vue'
    import OpenEyeIcon from '@/assets/icons/OpenEyeIcon.vue'

    import { ref } from 'vue'
    import { useTaskManagerStore } from '@/stores/index'
    import { storeToRefs } from 'pinia'

    const taskManager = useTaskManagerStore()
    const { listBoards, currentBoard, isNavBarOpen } = storeToRefs(taskManager)

</script>