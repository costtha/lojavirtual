<template>
  <div class="layout">
     <div class="contene">
       <div class="retangulo1">
         <h1 class="titulo">Carrinho de Compras</h1>
       </div>
 
       <!-- Produtos listados -->
       <div v-for="(produto, index) in produtos" :key="index" class="retangulo2">
         <div class="image-wrapper">
           <img :src="produto.imagemUrl" :alt="produto.nome" class="image1" />
         </div>
         <div class="retangulo22">
           <h1 class="titulo2">{{ produto.nome }}</h1>
           <div class="product-rating">
             <div class="stars">
               <span v-for="star in fullStars" :key="'full-' + star + index" class="star full">&#9733;</span>
               <span v-if="halfStar" class="star half">&#9733;</span>
               <span v-for="star in emptyStars" :key="'empty-' + star + index" class="star empty">&#9734;</span>
             </div>
             <span class="reviews">({{ produto.avaliacoes }} avaliações)</span>
           </div>
           <p class="price">{{ formatarPreco(produto.preco) }}</p>
         </div>
         <div class="bot">
           <button
             class="botao1"
             @click="adicionarAoCarrinho(produto)"
           >
             Adicionar ao Carrinho
           </button>
         </div>
       </div>
 
 
      
     </div>
 
     <div class="down">
         <router-link to="/carrinho">
           <button class="bott1">Ir para o Carrinho</button>
         </router-link>
       </div>
 
   </div>
 </template>
 
 <script>
 export default {
   name: "PaginaPrincipal",
   data() {
     return {
       carrinho: [],
       produtos: [
         {
           nome: "Teclado Logitech Silent Touch",
           preco: 199.9,
           imagemUrl: require("@/assets/teclado-logo.png"),
           avaliacoes: 935,
         },
         {
           nome: "Placa De Vídeo Gigabyte NVIDIA GeForce RTX 4090",
           preco: 13899.9,
           imagemUrl: require("@/assets/placadevideo-logo.png"),
           avaliacoes: 128,
         },
         {
           nome: "Pen Drive 128gb Cruzer Blade - Sandisk",
           preco: 79.89,
           imagemUrl: require("@/assets/pendrive-logo.png"),
           avaliacoes: 64,
         },
         {
           nome: "Mouse Logitech G502",
           preco: 359.99,
           imagemUrl: require("@/assets/mouse-logo.png"),
           avaliacoes: 432,
         },
         {
           nome: "Monitor Dell UltraSharp 27",
           preco: 2999.99,
           imagemUrl: require("@/assets/monitor-logo.png"),
           avaliacoes: 322,
         },
         {
           nome: "Headset Corsair HS50",
           preco: 849.99,
           imagemUrl: require("@/assets/headset-logo.png"),
           avaliacoes: 256,
         },
         {
           nome: "Cadeira Gamer DXRacer",
           preco: 1599.99,
           imagemUrl: require("@/assets/cadeira-logo.png"),
           avaliacoes: 180,
         },
         {
           nome: "SSD 500GB Kingston",
           preco: 1289.9,
           imagemUrl: require("@/assets/ssd-logo.png"),
           avaliacoes: 315,
         },
         {
           nome: "Webcam Logitech C920",
           preco: 249.99,
           imagemUrl: require("@/assets/webcam-logo.png"),
           avaliacoes: 452,
         },
         {
           nome: "Caixa de Som JBL Flip 5",
           preco: 3699.99,
           imagemUrl: require("@/assets/caixasom-logo.png"),
           avaliacoes: 509,
         },
       ],
       rating: 4,
       maxRating: 5,
     };
   },
   computed: {
     fullStars() {
       return Math.floor(this.rating);
     },
     halfStar() {
       return this.rating % 1 !== 0;
     },
     emptyStars() {
       return this.maxRating - this.fullStars - (this.halfStar ? 1 : 0);
     },
   },
   methods: {
     adicionarAoCarrinho(produto) {
       const produtoExistente = this.carrinho.find(
         (item) => item.nome === produto.nome
       );
 
       if (produtoExistente) {
         produtoExistente.quantidade += 1;
       } else {
         this.carrinho.push({ ...produto, quantidade: 1 });
       }
 
       localStorage.setItem("carrinho", JSON.stringify(this.carrinho));
     },
     formatarPreco(preco) {
   return new Intl.NumberFormat('pt-BR', {
     style: 'currency',
     currency: 'BRL'
   }).format(preco);
 },
   },
 };
 </script>
 
 <style scoped>
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 
 .layout {
   display: flex;
   flex-direction: column;
   justify-content: center; 
   align-items: center;
   height: 100vh;
   background-color: #14151D;
   overflow-x: hidden;
   overflow-y: auto;  
 }
 
 .contene {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start; 
   padding: 0%;
   width: 600px;
   max-height: 80vh;
   overflow-x: hidden;
   overflow-y: scroll;  
   scrollbar-width: thin; 
   scrollbar-color: transparent transparent;
 }
 
 .contene::-webkit-scrollbar {
   width: 8px; /* Defina a largura da barra de rolagem */
 }
 
 .contene::-webkit-scrollbar-thumb {
   background-color: transparent; /* Torna a parte rolante invisível */
 }
 
 .contene::-webkit-scrollbar-track {
   background-color: transparent; /* Torna a pista invisível */
 }
 
 
 .retangulo1 {
     width: 645px; 
     padding: 10px;
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
     padding-left: 5%;
     font-family: 'Inter', sans-serif; 
     font-size: 19px; 
     font-weight: 700;
     line-height: 24px; 
     text-align: left; 
   }
 
 .retangulo2 {
   width: 100%;
   height: 179px;
   background-color: #23242C;
   margin-bottom: 2px;
   display: flex;
   align-items: center;
   padding: 10px;
   box-sizing: border-box; 
 }
 
 .retangulo22 {
     width: 400px; 
     height: 120px; 
     margin: 0; 
     padding: 0; 
     display: flex;
     flex-direction: column;
 
     
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
   text-align: left;
 }
 
 .price {
     color: #A33AFF;
     font-family: 'inter', sans-serif;
     font-weight: bold;
     font-size: 25px;
     line-height: 24px;
     justify-content: center; 
     padding: 7px;
     margin-bottom: 10%;
     margin-left: 2%;
     
     
 }
 
 .botao1 {
   width: 167px;
   height: 37px;
   background-color: #39115c;
   border: 2px solid #A33AFF;
   color: white;
   font-family: 'Inter', sans-serif;
   font-weight: bold;
   border-radius: 8px;
   cursor: pointer;
   margin-top: 10px;
 }
 
 .down {
   display: flex;
   flex-direction: row;
   gap: 10px;
   justify-content: center;
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
 
 .product-rating {
   margin-left: 3%;
   display: flex;
   align-items: center;
 }
 
 .star {
   font-size: 20px;
   color: #FFAE00;
 }
 
 .reviews {
   color: white;
   margin-left: 5px;
 }
 </style>
 