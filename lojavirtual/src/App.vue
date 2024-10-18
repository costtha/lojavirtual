<template>
  <PaginaPrincipal />
</template>

<script>
import PaginaPrincipal from './components/PaginaPrincipal.vue';

export default {
  name: 'App',
  components: {
    PaginaPrincipal
  }
}
</script>

<style>
/* Certifique-se de que não haja outros estilos interferindo */
html, body {
  margin: 0; /* Remove margens padrão */
  padding: 0; /* Remove preenchimentos padrão */
  height: 100%; /* Garante que o corpo preencha toda a altura */
  overflow: hidden; /* Remove barras de rolagem */
}
</style>

