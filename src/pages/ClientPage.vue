<template>
  <div class="client-page">
    <LogoutButton @logout="onLogout" />
    <ToggleButton @toggle="onToggle" />
    <MyButton label="Тестировать атрибуты" @click="onClick" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import LogoutButton from '../components/LogoutButton.vue'
import ToggleButton from '../components/ToggleButton.vue'
import MyButton from '../components/MyButton.vue'

export default defineComponent({
  components: {
    LogoutButton,
    ToggleButton,
    MyButton
  },
  setup () {
    function onLogout() {
      console.log('logout...')
    }

    function onToggle() {
      console.log('toggle...')
    }

    function onClick() {
      console.log('my button click')
    }

    function nativeOnClick() {

    }

    return {
      onLogout,
      onToggle,
      onClick
    }
  }
})
</script>

<style scoped>

</style>