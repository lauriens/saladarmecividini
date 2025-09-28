<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
  <div class="home">
    <div class="content">
      <p>
        A Sala d'Arme Cividini é uma escola de artes marciais focada em esgrima histórica, também conhecida pelo nome de HEMA (Artes Marciais Hitóricas Europeias). 
        Com foco na tradição italiana, estudamos mestres como Fiore de'i Liberi, Salvator Fabris, Achille Marozzo, entre outros.
      </p>
      <p>
        Temos aulas de Espada Longa, <i>Spada da Lato</i> e Rapieira. Venha nos conhecer!
      </p>
      <button class="know-more">
        Conheça a Escola
      </button>
    </div>
  </div>
</template>

<style scoped>
p, h1 {
  text-align: center;
}
p {
  font-size: 1rem;
  color: #FFFFFF;
}
.home {
  
}
.content {
  background-color: rgba(75,75,75, 0.7);
  display: grid;
  justify-items: center;
  align-content: center;
}
.know-more {
  width: 8rem;
  border: none;
  border-radius: 0.3rem;
  background-color: #4B4B4B;
  color: #FFFFFF;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
