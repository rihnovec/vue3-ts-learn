<template>
  <button type="button" ref="btn">
    <span><slot :text="buttonText"></slot></span>
  </button>
</template>

<script setup lang="ts">
  import {ref, useAttrs, onMounted} from 'vue'
  import type {Ref} from 'vue'

  const btn: Ref<HTMLElement | null> = ref(null)
  const buttonText: Ref<string> = ref('Текст на кнопке by ref')

  const attrs = useAttrs()

  defineOptions({
    inheritAttrs: false
  })

  onMounted(() => {
    console.log(attrs)

    if (btn.value) {
      btn.value.addEventListener('click', () => {
        console.log('native on click')        
      })
    }
  })
</script>

<style scoped>

</style>