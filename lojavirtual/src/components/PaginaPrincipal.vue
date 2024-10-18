<template>
    <div class="layout"> 
      <div class="contene">
        <div class="retangulo1">
          <h1 class="titulo"> 
            Carrinho de Compras 
          </h1>
        </div>
        <div class="retangulo2">
          <div class="image-wrapper">
            <img src="@/assets/teclado-logo.png" alt="Teclado" class="image1"/>
            
          </div>
          <div class="retangulo22">
            
            <h1 class="titulo2"> Teclado Logitech Silent Touch</h1> 
            <p class="price">R$ 199,90</p>
            <button class="botao1"> Adicionar ao Carrinho</button>

          </div> 
        </div>
        <div class="retangulo3">
                <div class="image-wrapper">
                <img src="@/assets/placadevideo-logo.png" alt="Placa De Vídeo" class="image2"/>
                   
          </div>
                    
            <div class="retangulo22">
                 <h1 class="titulo3"> Placa De Vídeo Gigabyte NVIDIA GeForce <br>
                                    RTX 4090 AORUS MASTER, 24GB...</h1>
                 <p class="price">R$ 13.899,90</p>
                 <button class="botao1"> Adicionar ao Carrinho</button>
            </div>
          

        </div>
        <div class="retangulo4">
            <div class="image-wrapper">
                <img src="@/assets/pendrive-logo.png" alt="Pen Drive" class="image3"/>
                
          </div>

                <div class="retangulo22">
                    
                    <h1 class="titulo4">Pen Drive 128gb Cruzer Blade - Sandisk </h1>
                    <p class="price">R$ 79,80</p>
                    <button class="botao1"> Adicionar ao Carrinho</button>

                </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaginaPrincipal'
  }
  </script>
  
  <style scoped>
  .layout {
    width: 1920;
    height: 1080px;
    background-color: #14151D; 
    height: 100vh;             
    display: flex;             
    justify-content: center;   
    align-items: center;       
  }
  
  .contene {
    
    display: flex;
    flex-direction: column;     /* Alinha os elementos em coluna */
    align-items: center;        /* Centraliza horizontalmente */
    justify-content: center;    /* Centraliza verticalmente */
    padding: 20px;             /* Espaço interno */
    min-height: 200px;         /* Altura mínima do contêiner */
    max-height: 500px;         /* Altura máxima do contêiner */
    width: 600px;              /* Largura do contêiner */
  }
  
  .retangulo1 {
    width: 100%;
    height: 57px;
    border-radius: 8px 8px 0px 0px;
    opacity: 1;
    background-color: #23242C;
    margin-bottom: 5px; /* Espaço abaixo do retângulo */
    display: flex;       /* Usando Flexbox para o título */
    align-items: center; /* Centraliza o título verticalmente */
  }
  
  .titulo {
    color: white;
    margin: 0; /* Remove margem padrão do h1 */
    padding-left: 2%;
    font-family: 'Inter', sans-serif; /* Definindo a fonte como Inter */
    font-size: 19px; /* Tamanho da fonte */
    font-weight: 700; /* Peso da fonte */
    line-height: 24px; /* Altura da linha */
    text-align: left; /* Alinhamento do texto */
  }

  .title {
    
    border: 3px solid red;  
    width: 440px; 
    height: 118px;

  }
  
  .retangulo2 { 
    width: 100%;
    height: 179px; 
    background-color: #23242C;
    margin-bottom: 2px; /* Espaço abaixo do retângulo */
    display: flex; 
    align-items: center; /* Alinhando verticalmente */
  }



  .image-wrapper {
    padding-left: 2%;           /* Espaçamento externo à esquerda */
}
  
  .image1 {
    width: 122px;
    height: 122px;
    background-color: white;    /* Fundo branco */
    border-radius: 6px;         /* Arredondamento dos cantos */
  }

  .titulo2 {
    color: white;
    margin-left: 10px; /* Espaçamento à esquerda para separar da imagem */
    padding: 0; /* Remove espaçamento superior e inferior */
    font-family: 'Inter', sans-serif; /* Definindo a fonte como Inter */
    font-size: 16px; /* Tamanho da fonte */
    font-weight: 400; /* Peso da fonte */
    line-height: 24px; /* Altura da linha */
    text-align: left; /* Alinhamento do texto */
  }


  .price {
    color: #A33AFF;
    font-family: 'inter', sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
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
    width: 100%;
    height: 179px; 
    background-color: #23242C;
    margin-bottom: 2px; /* Espaço abaixo do retângulo */
    display: flex; 
    justify-content: flex-start; 
    align-items: center; 
    position: relative; /* image1 seja posicionada corretamente */
  }

  .titulo3 {
    color: white;
    margin-left: 10px; 
    padding: 0; 
    font-family: 'Inter', sans-serif; 
    font-size: 12px; 
    font-weight: 400; 
    line-height: 24px; 
    text-align: left; 
  }

  .image-wrapper {
  padding-left: 2%;           /* Espaçamento externo à esquerda */
}

  .image2 {
    width: 122px;
    height: 122px;
    background-color: white;    /* Fundo branco */
    border-radius: 6px;         /* Arredondamento dos cantos */
  }
  
  .retangulo4 {
    width: 100%;
    height: 179px; 
    background-color: #23242C;
    display: flex; 
    justify-content: flex-start; 
    align-items: center; 
    position: relative; /* image1 seja posicionada corretamente */
  }

  .image-wrapper {
  padding-left: 2%;           /* Espaçamento externo à esquerda */
}

  .image3 {
    width: 122px;
    height: 122px;
    background-color: white;    /* Fundo branco */
    border-radius: 6px;         /* Arredondamento dos cantos */
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
  </style>
  