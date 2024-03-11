<template>
  <div class="client-page">
    <BaseLayout>
      <template #header>
        <ToggleButton @toggle="onToggle" />
      </template>
      <MyButton @click="onClick">Проверка атрибутов</MyButton>
      <template #footer>
        <LogoutButton @logout="onLogout" />
      </template>
    </BaseLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoutButton from '../components/LogoutButton.vue'
import ToggleButton from '../components/ToggleButton.vue'
import MyButton from '../components/MyButton.vue'
import BaseLayout from '../components/BaseLayout.vue'

export default defineComponent({
  components: {
    BaseLayout,
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