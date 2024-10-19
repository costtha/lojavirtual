<template>
  <div class="layout">
    <div class="contene">
      <div class="retangulo1">
        <h1 class="titulo">Carrinho de Compras</h1>
      </div>
    </div>
    <div class="down">
      <button class="bott">Finalizar pedido</button>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarrinhoCompras',
};
</script>

<style scoped>
.layout {
  width: 100%; 
  height: 100vh; 
  background-color: #14151D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contene {
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  min-height: 200px;
  max-height: 500px;
  width: 600px;
}

.retangulo1 {
  width: 100%; /* Use 100% para torná-lo responsivo */
  height: 57px;
  border-radius: 8px 8px 0px 0px;
  background-color: #23242C;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}

.titulo {
  color: white;
  margin: 0;
  padding-left: 2%;
  font-family: 'Inter', sans-serif;
  font-size: 19px;
  font-weight: 700;
}

.down {
  display: flex;
  gap: 10px; /* Ajuste o espaçamento */
}
</style>
