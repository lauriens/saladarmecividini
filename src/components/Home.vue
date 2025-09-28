<script setup lang="ts">

</script>

<template>
  <div class="home">
    <h1>A Escola</h1>
    <div class="content">
      <div class="column">
        <img src="../assets/Fiore.jpg"/>
        <footer>Fonte: https://wiktenauer.com/wiki/File:Fiore_delli_Liberi.jpg</footer>
      </div>
      <div class="column text">
        <p>
          A Sala d'Arme Cividini é uma escola de artes marciais focada em esgrima histórica, também conhecida pelo nome de HEMA (Artes Marciais Hitóricas Europeias). 
          Com foco na tradição italiana, estudamos mestres como Fiore de'i Liberi, Salvator Fabris, Achille Marozzo, entre outros.
        </p>
        <p>
          Temos aulas de Espada Longa, <i>Spada da Lato</i> e Rapieira. Venha nos conhecer!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
p, h1 {
  text-align: center;
}
.content {
  display: grid;
  .column {
    display: flex;
    flex-flow: column;
  }
}
@media (min-width: 700px) {
  .content { 
    grid-template-columns: 1fr 2fr; 
    gap: 1rem;
    .text { 
      display: flex;
      justify-content: center; 
      align-items: center;
    }
  }
}
</style>
