<script setup lang="ts">
</script>

<template>
  <div class="home">
    <h1>Aulas</h1>
    <div class="content">
        <h2> Treine Conosco! </h2>
        <ul class="options">
            <li> SEGUNDA: Aula livre: 19:00 - 20:00 </li>
            <li> QUARTA: <i>Spada da Lato</i>: 19:00 - 20:00 </li>
            <li> SEXTA: Rapieira: 19:00 - 20:00 </li>
            <li> SÁBADO: Espada Longa: 10:00 - 12:00 </li>
        </ul>
        <h2> Preços </h2>
        <ul class="options">
            <li> 1 aula por semana: R$180,00</li>
            <li> 2 aulas por semana: R$240,00</li>
            <li> Ilimitado: R$300,00</li>
            <li> Aula particular: R$150,00</li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
.content{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    h2 {
        width: 100%;
        text-align: center;
        border-top-width: 0.1rem;
        border-color: #dc2d1e;
        border-top-style: solid;
    }
}
</style>
