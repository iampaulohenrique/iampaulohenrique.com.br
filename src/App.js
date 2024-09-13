import React from 'react';
import logo from './imagens/logo.svg';
import instagramIcon from './imagens/icons/instagram.svg';
import githubIcon from './imagens/icons/github.svg';
import discordIcon from './imagens/icons/discord.svg';
import linkedinIcon from './imagens/icons/linkedin.svg';
import certificadosIcon from './imagens/icons/certificados.png';
import projetosIcon from './imagens/icons/projetos.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header container text-center">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={logo} alt="Uma imagem em desenho do Paulo Henrique" className="image-hover-effect img-fluid" />
          </div>
        </div>
        
        <div>
        <h1 className="my-4">Seja bem-vindo!</h1>
        <p className="my-2">Tenho 24 anos e sou estudante de Ciência da Computação. Minha paixão por tecnologia e programação é o que me impulsiona a explorar novas ideias e soluções inovadoras no campo da programação. 💻✨</p>
        <p className="my-2">Neste site, você encontrará informações sobre o meu trabalho, projetos em que estou envolvido e as áreas que mais me fascinam. 🚀🔍 É também um ponto de contato para futuras colaborações e projetos interessantes. 💼🤝</p>
        <p className="my-2">Sinta-se à vontade para explorar, conhecer mais sobre o que faço e entrar em contato para qualquer dúvida ou proposta. Estou sempre aberto a novas oportunidades e desafios!</p>
        <p className="my-4">Claro que esse texto foi criado por IA.</p>
        <p className="my-2">Atenciosamente, Paulo Henrique 👨‍💻</p>
        </div>
        
        <div className="icon-container d-flex justify-content-center flex-wrap my-4">
          
          <a href="https://github.com/iampaulohenrique" className="d-flex align-items-center mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github" className="icon-img me-2" />
            Github
          </a>
          <a href="https://discord.gg/c9SwrXDqMK" className="d-flex align-items-center mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
            <img src={discordIcon} alt="Discord" className="icon-img me-2" />
            Discord
          </a>
          <a href="https://www.linkedin.com/in/iampaulohenrique" className="d-flex align-items-center mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="icon-img me-2" />
            LinkedIn
          </a>
          <a href="https://drive.google.com/drive/folders/1yBLvbexCsdAmRVmvDHL3gXczzR8dEzQB" className="d-flex align-items-center mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
            <img src={certificadosIcon} alt="Certificados" className="icon-img me-2" />
            Certificados
          </a>
          <a href="https://www.instagram.com/iampaulohen" className="d-flex align-items-center mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="icon-img me-2" />
            Instagram
          </a>
          <a href="ADICIONAR" className="d-flex align-items-center mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
            <img src={projetosIcon} alt="Projetos" className="icon-img me-2" />
            Projetos
            </a>
        </div>

        <div>
        <h1 className="my-04"> Livros que eu recomendo</h1>
          <a href= "https://www.amazon.com.br/dp/6555602341" className="d-flex align-items-stretch mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
          <li>Amazon sem limites: Jeff Bezos e a invenção de um império global</li>
          </a>
          <a href="https://www.amazon.com.br/dp/8575422391" className="d-flex align-items-center mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
          <li> Os segredos da mente milionária</li>
          </a>
          <a href= "https://www.amazon.com.br/dp/8595081530" className="d-flex align-items-center mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
          <li>O homem mais rico da Babilônia</li>
          </a>
          <a href="https://www.amazon.com.br/gp/product/B0C8XVF16V/ref=ppx_yo_dt_b_d_asin_title_351_o01?ie=UTF8&psc=14" className="d-flex align-items-center mx-2 text-decoration-none" target="_blank" rel="noopener noreferrer">
            <li>Titanic: Desvendando os Segredos do Naufrágio</li>
          </a>
          
          
        
        
        </div>
      </header>
      <footer className="footer text-center py-3">
         © 2024 Paulo Henrique
      </footer>
    </div>
  );
}

export default App;
