<template>
  <button class="toggle-button" type="button" @click="onClick">Переключатель: {{toggleTextValue}}</button>
</template>

<script setup lang="ts">
  import {computed} from 'vue'
  import {useToggle} from '../composables/toggle'

  const {isChecked, onClick} = useToggle(false)
  const toggleTextValue = computed(() => isChecked.value ? 'ON' : 'OFF')
</script>

<style scoped>
  .toggle-button {
    margin-top: 16px;
  }
</style>