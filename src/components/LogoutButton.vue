<template>
  <button class="logout-button" type="button" @click="onClick">Выйти</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {ILogoutEmit} from '../interfaces/logoutEmitInterface'

export default defineComponent({
  emits: {
    logout(payload: ILogoutEmit | undefined = undefined) {
      return payload && payload.id > 0
    }
  },
  setup (props, ctx) {
    function onClick() {
      ctx.emit('logout', {
        id: 0,
        login: 'a.rihnovec'
      })
    }

    return {
      onClick
    }
  }
})
</script>

<style scoped>

</style>