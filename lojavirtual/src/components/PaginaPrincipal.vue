<template>
  <div class="layout">
    <div class="contene">
      <div class="retangulo1">
        <h1 class="titulo">Carrinho de Compras</h1>
      </div>

      <!-- Teclado -->
      <div class="retangulo2">
        <div class="image-wrapper">
          <img src="@/assets/teclado-logo.png" alt="Teclado" class="image1" />
        </div>
        <div class="retangulo22">
          <h1 class="titulo2">Teclado Logitech Silent Touch</h1>
          <div class="avaliacao">
               <span class="estrelas">⭐ ⭐ ⭐ ⭐ ⭐</span> 
               <span class="avaliacoes">(935 avaliações)</span>
          </div>
          <p class="price">R$ 199,90</p>
        </div>
        <div class="bot">
          <button class="botao1" @click="adicionarAoCarrinho({
              nome: 'Teclado Logitech Silent Touch',
              preco: 199.90,
              imagemUrl: require('@/assets/teclado-logo.png') 
          })">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <!-- Placa de Vídeo -->
      <div class="retangulo3">
        <div class="image-wrapper">
          <img src="@/assets/placadevideo-logo.png" alt="Placa De Vídeo" class="image2" />
        </div>
        <div class="retangulo22">
          <h1 class="titulo3">Placa De Vídeo Gigabyte NVIDIA GeForce RTX 4090 AORUS MASTER, 24GB...</h1>
          <div class="avaliacao">
               <span class="estrelas">⭐ ⭐ ⭐ ⭐ ⭐</span> 
               <span class="avaliacoes">(128 avaliações)</span> 
          </div>
          <p class="price">R$ 13.899,90</p>
        </div>
        <div class="bot">
          <button class="botao1" @click="adicionarAoCarrinho({ 
              nome: 'Placa De Vídeo Gigabyte NVIDIA GeForce RTX 4090', 
              preco: 13899.90,
              imagemUrl: require('@/assets/placadevideo-logo.png') 
          })">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <!-- Pen Drive -->
      <div class="retangulo4">
        <div class="image-wrapper">
          <img src="@/assets/pendrive-logo.png" alt="Pen Drive" class="image3" />
        </div>
        <div class="retangulo22">
          <h1 class="titulo4">Pen Drive 128gb Cruzer Blade - Sandisk</h1>
          <div class="avaliacao">
               <span class="estrelas">⭐ ⭐ ⭐ ⭐ ⭐</span> 
               <span class="avaliacoes">(128 avaliações)</span> 
          </div>
          <p class="price">R$ 79,80</p>
        </div>
        <div class="bot">
          <button class="botao1" @click="adicionarAoCarrinho({
              nome: 'Pen Drive 128gb Cruzer Blade - Sandisk',
              preco: 79.80,
              imagemUrl: require('@/assets/pendrive-logo.png')
          })">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>

    <div class="down">
      <button class="bott">Carregar mais produtos</button>
      <router-link to="/carrinho">
        <button class="bott1">Ir para o Carrinho</button>
      </router-link>
    </div>
  </div>
</template>



  
<script>
export default {
  name: 'PaginaPrincipal',
  data() {
    return {
      carrinho: [] 
    };
  },
  mounted() {
  const carrinhoSalvo = localStorage.getItem('carrinho');
  if (carrinhoSalvo) {
    this.carrinho = JSON.parse(carrinhoSalvo);
  }
},
  methods: {
  adicionarAoCarrinho(produto) {
    const produtoExistente = this.carrinho.find(item => item.nome === produto.nome);
    
    if (produtoExistente) {
      
      produtoExistente.quantidade += 1;
    } else {
      
      this.carrinho.push({ ...produto, quantidade: 1 });
    }
    
   
    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  },
}
}
</script>

  
  
  <style scoped>
  .layout {
    width: 1920;
    height: 1080px;
    background-color: #14151D; 
    height: 100vh;             
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
    width: 645px;
    height: 57px;
    border-radius: 8px 8px 0px 0px;
    opacity: 1;
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
    line-height: 24px; 
    text-align: left; 
  }

  .title {
    
    border: 3px solid red;  
    width: 440px; 
    height: 118px;

  }
  
  .retangulo2 { 
    width: 645px;
    height: 179px;
    background-color: #23242C;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
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
    line-height: 24px; 
    text-align: left;
  }


  .price {
    color: #A33AFF;
    font-family: 'inter', sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin-left: 3%;
  }
 
  .botao1 {

    width: 167px;
    height: 37px;
    background-color: #39115c;
    border: 2px solid #A33AFF;
    color: white;
    font-family: 'inter', sans-serif;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    
  
   

  }
  
  .retangulo3 {
    width: 645px;
    height: 179px;
    background-color: #23242C;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }

  .titulo3 {
    color: white;
    margin-left: 10px; 
    padding: 0; 
    font-family: 'Inter', sans-serif; 
    font-size: 10px; 
    font-weight: 400; 
    line-height: 24px; 
    text-align: left; 
  }

  .image-wrapper {
  padding-left: 2%;          
}

  .image2 {
    width: 122px;
    height: 122px;
    background-color: white;    
    border-radius: 6px;        
  }
  
  .retangulo4 {
    width: 645px;
    height: 179px;
    background-color: #23242C;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }

  .image-wrapper {
  padding-left: 2%;          
}

  .image3 {
    width: 122px;
    height: 122px;
    background-color: white;   
    border-radius: 6px;         
  }

  .titulo4 {
    color: white;
    margin-left: 10px; 
    padding: 0; 
    font-family: 'Inter', sans-serif; 
    font-size: 12px; 
    font-weight: 400; 
    line-height: 24px; 
    text-align: left; 
  }

  .retangulo22 {

     
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    width: 400px; 
    height: 120px; 
    justify-content: space-between;
  }

  .bot {
  
    
    display: flex;
    margin-right: 10px;
   
  }



  .down {
  
    display: flex;         
    flex-direction: row;    
    gap: 10px;              
    justify-content: center; 

  }


  .bott {        
    width: 237px;
    height: 47px;
    background-color: #39115c;
    border: none;
    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    
  }

  .bott1 {
  
    width: 237px;
    height: 47px;
    background: #39CC33;
    border: none;
    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    
  }

  .estrelas {
    color: #FFD700; 
    font-size: 16px;
    margin-top: 4px;
    margin-left: 10px;
  }


  .avaliacao {
    display: flex; 
    align-items: center; 
    
  }

  .avaliacoes {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 400;
    color: #646464;
    line-height: 24px;
    text-align: left; 
    margin-left: 5px; 
    padding: 2px; 
    border-radius: 4px; 
    display: inline-block; 
    vertical-align: middle; 
  }

  

  </style>
  