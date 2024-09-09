import logo from './imagens/logo.svg';
import instagramIcon from './imagens/icons/instagram.svg';
import githubIcon from './imagens/icons/github.svg';
import discordIcon from './imagens/icons/discord.svg';
import linkedinIcon from './imagens/icons/linkedin.svg';
import certificadoIcon from './imagens/icons/certificados.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="image-container">
          <img src={logo} alt="uma imagem em desenho do Paulo Henrique" className="image-hover-effect" />
        </div>
        
        <h1>Seja bem-vindo!</h1>
        <p>Tenho 24 anos e sou estudante de Ciência da Computação. Minha paixão por tecnologia e programação é o que me impulsiona a explorar novas ideias e soluções inovadoras no campo da informática. 💻✨</p>
        <p>Neste site, você encontrará informações sobre o meu trabalho, projetos em que estou envolvido e as áreas que mais me fascinam. 🚀🔍 É também um ponto de contato para futuras colaborações e projetos interessantes. 💼🤝</p>
        <p>Sinta-se à vontade para explorar, conhecer mais sobre o que faço e entrar em contato para qualquer dúvida ou proposta. Estou sempre aberto a novas oportunidades e desafios!</p>
        <p>Obrigado por visitar, e espero que você encontre algo inspirador por aqui!</p>
        <p>Atenciosamente, Paulo Henrique 👨‍💻</p>
        
        <div className="icon-container">
          <a href="https://www.instagram.com/iampaulohen" className="App-link" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />Instagram</a>
          <a href="https://github.com/iampaulohenrique" className="Github" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="imagem github"/>Github</a>
          <a href="https://discord.gg/c9SwrXDqMK" className="discord" target="_blank" rel="noopener noreferrer">
          <img src={discordIcon} alt="imagem discord"/>Discord</a>
          <a href="https://www.linkedin.com/in/iampaulohenrique" className="linkedin" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="imagem linkedin"/> Linkedin</a>
          <a href="https://drive.google.com/drive/folders/1yBLvbexCsdAmRVmvDHL3gXczzR8dEzQB" className="certificados" target="_blank" rel="noopener noreferrer">
          <img src={certificadoIcon} alt="imagem certificados "/> Certificados</a>
       
        </div>
      </header>
      <footer className="footer">
        Copyright © 2024. Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;
