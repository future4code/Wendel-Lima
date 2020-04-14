import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/yNGX7KB/foto-wendel2.png" 
          nome="Wendel de Lima" 
          descricao="Olá meu nome é Wendel de Lima, eu sou local de Guarujá-SP, tenho uma boa experiência com mergulho profissional, adoro a praia como um bom caiçara."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Atualmente Estudando na Labenu: curso de desenvolvedor Web full stack" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
        <div className="email-endereço-container">
          <h2 className="titulo">Dados pessoais</h2>
          <CardPequeno 
          texto2="Email : wendel.delima94@gmail.com"
         />
          <CardPequeno
          texto2="Endereço : Guarujá-SP / Floriano Peixoto"
          />

        </div>        
      </div>
    </div>
  );
}

export default App;
