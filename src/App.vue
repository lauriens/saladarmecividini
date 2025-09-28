<script setup lang="ts">
</script>

<template>
  <header class="header">
    <img src="./assets/marcaHorizontalBranca.png" alt="Sala d'Arme Cividini Marca Horizontal"/>
  </header>
  <div class="menu-nav">
    <RouterLink to="/">
      A Escola
    </RouterLink>
    <RouterLink to="/aulas">
      Aulas
    </RouterLink>
    <RouterLink to="/contato">
      Contato
    </RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>

</style>
