<script setup lang="ts">
</script>

<template>
  <div class="home">
    <h1>Contato</h1>
    <div class="content">
        <p> Fale conosco! </p>
        <div class="options">
            <p> Whatsapp: (51) 99449-0014 </p>
            <div class="networks">
                Instagram: <a href="https://www.instagram.com/saladarmecividini/">@saladarmecividini</a> 
            </div>
            <p> Email: <a href="mailto:contato@saladarmecividini.com.br">contato@saladarmecividini.com.br</a></p>
        </div>
        
    </div>
  </div>
</template>

<style scoped>
.content {
    border-top-width: 0.1rem;
    border-color: #dc2d1e;
    border-top-style: solid;
    justify-content: center;
}
.options {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    a { color: rgba(255, 255, 255, 0.87); }

    .networks {
        margin-block-start: 1em;
        margin-block-end: 1em;
    }
}
</style>
