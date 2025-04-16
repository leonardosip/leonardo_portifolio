import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    cohab,
    click,
    port,
    filmes,
    login,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalho",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Assitente de Desenvolvimento",
      company_name: "COHAB-CT",
      icon: cohab,
      iconBg: "#383E56",
      date: "Julho 2024 - Janeiro 2025",
      points: [
        "Buscas SQL.",
        "Documentação de pesquisas para uso da diretoria.",
        "Auxílio no desenvolvimento.",
        "Atendimento ao cliente.",
        
      ],
    },
    {
      title: "Estagiário Front-End Dev",
      company_name: "Click Sistemas-LTDA",
      icon: click,
      iconBg: "#E6DEDD",
      date: "Março 2024 - Julho 2024",
      points: [
        "Desenvolvimento de CRUDS em ReactJs e Nodejs.",
        "Ultilização de banco de dados com POSTGRESQL.",
        "Versionamento de código com GIT.",
        "Relatórios e manual do sistema com MarkDown.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Portifolio-3d",
      description:
        "Portfólio interativo feito com React, Tailwind e Three.js, apresentando meus projetos, contatos e currículo em um layout moderno e responsivo..",
      tags: [
        {
          name: "REACT",
          color: "blue-text-gradient",
        },
        {
          name: "taiwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/leonardosip/leonardo_portifolio",
    },

    {
      name: "Projeto-Filmes",
      description:
        "Aplicação web desenvolvida com React que consome uma API pública de filmes. Permite aos usuários buscar filmes, visualizar informações detalhadas como sinopse, nota e imagem, além de salvar seus favoritos no Local Storage para acesso rápido e persistente. Conta com navegação dinâmica usando React Router e uma interface responsiva e intuitiva...",
      tags: [
        {
          name: "REACT",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: filmes,
      source_code_link: "https://github.com/leonardosip/projeto-filmes",
    },

    {
      name: "Projeto-Login",
      description:
        "Aplicação web desenvolvida com React que utiliza o Firebase Authentication para gerenciamento de login. Permite aos usuários acessarem o sistema de forma segura por meio de email e senha, com validação em tempo real. A autenticação é integrada ao banco de dados do Firebase, garantindo persistência e segurança dos dados. A interface é simples, responsiva e intuitiva, ideal para fluxos de autenticação em aplicações modernas. Utiliza React Router para navegação e componentes reutilizáveis para manter o código organizado e escalável....",
      tags: [
        {
          name: "REACT",
          color: "blue-text-gradient",
        },
        {
          name: "FIREBASE",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: login,
      source_code_link: "https://github.com/leonardosip/projeto-log",
    },
  ];
  
  export { services, technologies, experiences, projects };