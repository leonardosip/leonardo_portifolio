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
    nobis,
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
      title: "Estagiário Full Stack",
      company_name: "Click Sistemas-LTDA",
      icon: click,
      iconBg: "#383E56",
      date: "Março 2024 - Julho 2024",
      points: [
        "Desenvolvimento de CRUDS em ReactJs e Nodejs.",
        "Ultilização de banco de dados com POSTGRESQL.",
        "Versionamento de código com GIT.",
        "Relatórios e manual do sistema com MarkDown.",
      ],
    },
     {
      title: "Dev Full Stack",
      company_name: "Plataforma Nobis",
      icon: nobis,
      iconBg: "#E6DEDD",
      date: "Junho 2025 - NOW",
      points: [
        "Desenvolvimento e manutenção de funcionalidades backend utilizando Node.js com TypeScript, seguindo boas práticas de arquitetura e segurança; ",
         "Manipulação e integração com bancos de dados relacionais, otimizando queries e garantindo integridade dos dados; ",
        "Criação, manutenção e integração de APIs REST, conectando o frontend à lógica de negócio da plataforma;",
        "Implementação de interfaces modernas e responsivas com React + TypeScript; ",
        "Correções de bugs e refatorações contínuas, com foco em estabilidade e escalabilidade;",
        "Colaboração ativa com outras áreas (design, marketing e produto), ajudando na construção de landing pages e experiências digitais;",
        "Participação em análises técnicas, testes manuais e validação de entregas com foco em qualidade e resultado; ",
        "Minha atuação é voltada à entrega de valor real, com atenção ao detalhe, organização e responsabilidade técnica no que diz respeito à experiência do usuário, dados e performance da aplicação.",
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