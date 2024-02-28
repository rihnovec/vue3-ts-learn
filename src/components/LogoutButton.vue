<template>
  <button class="logout-button" type="button" @click="onClick">Выйти</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['logout'],
  setup (props, ctx) {
    function onClick() {
      ctx.emit('logout')
    }

    return {
      onClick
    }
  }
})
</script>

<style scoped>

</style>