<template>
    <transition name="fade">
      <div class="modal" v-show="open">
        <transition name="drop-in">
          <div class="modal__inner" v-show="open">
            <div class="modal__content">
              <slot />
              <button type="button" @click="close">Close</button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
</template>
  
<script setup lang="ts">
    import { onMounted, onUnmounted } from "vue";

    const props =  defineProps({
        open: {
            type: Boolean,
            required: true,
        }
    })

    const emit = defineEmits(['close'])

    const close = () => {
        emit('close')
    }

    const handleKeyup = (event) => {
        if (event.keyCode === 27) {
        close();
        }
    };
    
    onMounted(() => document.addEventListener("keyup", handleKeyup));
    onUnmounted(() => document.removeEventListener("keyup", handleKeyup));
  

</script>
  
<style lang="scss" scoped>  
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 2;

        &__inner{
            max-width: 500px;
            margin: 2rem auto;
        }

        &__content{
            position: relative;
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, 0.3);
            background-clip: padding-box;
            border-radius: 0.3rem;
            padding: 1rem;
        }
    }
    
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }
    
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    
    .drop-in-enter-active,
    .drop-in-leave-active {
        transition: all 0.3s ease-out;
    }
    
    .drop-in-enter-from,
    .drop-in-leave-to {
        opacity: 0;
        transform: translateY(-50px);
    }
</style>
  