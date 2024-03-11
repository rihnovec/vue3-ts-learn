<script setup lang="ts">

</script>

<template>
  <section class="page-section">
    <header class="header">
      <slot name="header">

      </slot>
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <footer class="footer">
      <slot name="footer">

      </slot>
    </footer>
  </section>
</template>

<style scoped>

</style>