<template>
  <div class="client-page">
    <LogoutButton @logout="onLogout" />
    <ToggleButton @toggle="onToggle" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoutButton from '../components/LogoutButton.vue'
import ToggleButton from '../components/ToggleButton.vue'

export default defineComponent({
  components: {
    LogoutButton,
    ToggleButton
  },
  setup () {
    function onLogout() {
      console.log('logout...')
    }

    function onToggle() {
      console.log('toggle...')
    }

    return {
      onLogout,
      onToggle
    }
  }
})
</script>

<style scoped>

</style>