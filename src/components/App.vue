<template>
  <router-view /> 
</template>

<script>
import { defineComponent } from 'vue';
import router from '../router'; 

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

html, body {
  margin: 0; 
  padding: 0; 
  height: 100%;
  overflow: hidden; 
}
</style>
