<template>
  <router-view /> 
</template>

<script>
import { defineComponent } from 'vue';
import router from '../router'; // Certifique-se de importar o roteador

export default defineComponent({
  name: 'App',
  setup() {
    return {
      router,
    };
  },
});
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
