<template>
  <button type="button" ref="btn">Тестировать атрибуты</button>
</template>

<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  import type {Ref} from 'vue'

  const btn: Ref<HTMLElement | null> = ref(null)

  onMounted(() => {
    if (btn.value) {
      btn.value.addEventListener('click', () => {
        console.log('native on click')        
      })
    }
  })
</script>

<style scoped>

</style>