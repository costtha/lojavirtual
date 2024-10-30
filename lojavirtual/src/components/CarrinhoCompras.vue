<template>
  <div class="layout">
    <div class="contene">
      <div class="retangulo1">
        <h1 class="titulo">Carrinho de Compras</h1>
      </div>

      <div class="retangulo2" v-if="carrinho.length > 0">
        <div v-for="(produto, index) in carrinho" :key="index" class="item-carrinho">
          <div class="image-wrapper">
            <img :src="produto.imagemUrl" alt="Product Image" class="image1" />
          </div>
          <div class="retangulo22">
            <h1 class="titulo2">{{ produto.nome }}</h1>
            <p class="price">R$ {{ produto.preco.toFixed(2) }}</p>
            <p class="quantity">Quantidade: {{ produto.quantidade }}</p>
          </div>
        </div>
      </div>

      <div v-else>
        <p class="empty-cart">Seu carrinho está vazio!</p>
      </div>

      <div class="total">
        <h2 class="titulo">Total: <span class="valor-total">R$ {{ valorTotal.toFixed(2) }}</span></h2>
    </div>

    </div>

    <div class="down">
      <button class="bott" @click="finalizarPedido">Finalizar pedido</button>
      <button class="bott1" @click="voltarParaListagem">Voltar para listagem</button>
      <button class="bott2" @click="limparCarrinho">Limpar carrinho</button>
    </div>

    <div v-if="pedidoFinalizado" class="container-confirmacao">
      <h1>Sucesso!</h1>
      <p class="mensagem-confirmacao">
        Seu pedido foi aceito! Em instantes você receberá um e-mail de confirmação com o código de rastreamento para a sua entrega.
      </p>
      <button class="botao-confirmacao" @click="fecharConfirmacao">Ok</button>
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'CarrinhoCompras',
  data() {
    return {
      carrinho: [],
      pedidoFinalizado: false 
    };
  },
  mounted() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      this.carrinho = JSON.parse(carrinhoSalvo);
    }
  },
  computed: {
    valorTotal() {
      return this.carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
    },
  },
  methods: {
    voltarParaListagem() {
      this.$router.push('/');
    },
    limparCarrinho() {
      this.carrinho = [];
      localStorage.removeItem('carrinho');
    },
    finalizarPedido() {
      this.pedidoFinalizado = true; 
    },
    fecharConfirmacao() {
      this.pedidoFinalizado = false; 
    },
    adicionarAoCarrinho(produto) {
      const produtoExistente = this.carrinho.find(item => item.nome === produto.nome);
      if (produtoExistente) {
        produtoExistente.quantidade += 1; 
      } else {
        this.carrinho.push({
          ...produto,
          quantidade: 1, 
        });
      }
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho)); 
      produto.adicionado = true; 
    },
  },
}
</script>


<style scoped>
.layout {
    width: 100vw; 
    height: 100vh; 
    background-color: #14151D; 
    position: relative;
    display: flex;
    flex-direction: column;  
    justify-content: center; 
    align-items: center;
}

.contene {
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
    width: 100%; 
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

.item-carrinho {
    width: 100%; 
    background-color: #23242C;
    margin-bottom: 2px; 
    display: flex; 
    align-items: center;
    padding: 10px; 
}

.image-wrapper {
    padding-left: 2%;          
}

.image1 {
    width: 122px;
    height: 122px;
    background-color: white;    
    border-radius: 6px;      
}

.titulo2 {
    color: white;
    margin-left: 10px; 
    padding: 0; 
    font-family: 'Inter', sans-serif; 
    font-size: 16px; 
    font-weight: 400; 
}

.price {
    color: #A33AFF;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 20px;
    margin-left: 3%;
}

.quantity {
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 14px; 
}

.empty-cart {
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    margin-top: 20px;
}

.down {
    display: flex;         
    flex-direction: row;    
    gap: 10px;              
    justify-content: center; 
}

.bott, .bott1, .bott2 {
    width: 237px;
    height: 47px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    color: white;
}

.bott {
    background-color: #39115c;
}

.bott1 {
    background: #39CC33;
}

.bott2 {
    background: #971111;
}

.total {
  width: 100%;
  display: flex; 
  justify-content: flex-end; 
  padding: 10px; 
  background-color: #23242C;
  border-radius: 8px;
  

}

.total h2 {
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 19px;
    font-weight: 700; 
    padding-left: 20px; 
    display: flex; 
}

.valor-total {
    color: #A33AFF; 
    font-family: 'Inter', sans-serif;
    font-size: 19px;
    font-weight: 700;
    margin-left: 10px;
}

.container-confirmacao {
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  width: 736.67px; 
  height: 87.66px; 
  background: #23242C; 
  font-family: 'Inter', sans-serif; 
  font-size: 21.25px; 
  font-weight: 400; 
  line-height: 25.72px; 
  text-align: center; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  margin-top: 20px; 
}

.mensagem-confirmacao {
    margin: 0; 
    padding: 10px; 
}

.botao-confirmacao {
    width: 122px; 
    height: 56px; 
    border-radius: 10.63px 0px 0px 0px; 
    background: #39CC33; 
    color: white; 
    font-family: 'Inter', sans-serif; 
    font-size: 19px;
    
}

</style>
