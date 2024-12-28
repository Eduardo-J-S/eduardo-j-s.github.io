import React from 'react';
import Card from '../../components/card/Card'; // Importa o componente Card
import './Projects.scss';

import relogioDePontoImage from '../../assets/images/relogio-de-ponto.png';
import encurtadorDeUrl from '../../assets/images/link.png';
import apiProdutos from '../../assets/images/gestao-de-produtos.png';
import webProdutos from '../../assets/images/online-shop.png';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Ponto Eletrônico',
      description: 'Desenvolvimento de um sistema de controle de ponto eletrônico, implementado como parte da disciplina de PROJETO DE DESENVOLVIMENTO DE SISTEMAS WEB. A solução inclui tanto o back-end quanto o front-end, sendo concebida e desenvolvida de forma colaborativa por mim e minha equipe, com foco em usabilidade, eficiência e escalabilidade.',
      image: relogioDePontoImage, 
      githubLink: 'https://github.com/Eduardo-J-S/sistema-ponto-eletronico', 
    },
    {
      title: 'Encurtador de URLs',
      description: 'Encurtador de URLs desenvolvido com arquitetura serverless utilizando AWS Lambda, S3 e API Gateway. Projeto criado para explorar e aplicar recursos da AWS de forma prática.',
      image: encurtadorDeUrl,
      githubLink: 'https://github.com/Eduardo-J-S/url-shortener-serverless',
    },
    {
      title: 'API de Produtos',
      description: 'O projeto da API de Produtos é uma aplicação simples desenvolvida em Spring Boot que gerencia produtos. Utilizando tecnologias como Spring Data JPA, PostgreSQL e ModelMapper, a API fornece funcionalidades para criar, atualizar, listar e excluir produtos. Além disso, a integração com o Docker facilita a implantação e o desenvolvimento consistente em diferentes ambientes.',
      image: apiProdutos,
      githubLink: 'https://github.com/Eduardo-J-S/product-management-api',
    },
    {
      title: 'Aplicação WEB de Produtos',
      description: 'A Aplicação de Produtos é um projeto frontend desenvolvido para interagir com a API de Produtos. Ele fornece uma interface amigável para gerenciar produtos, incluindo funcionalidades para criar, atualizar, listar e excluir produtos. A aplicação é construída usando React.js e integra-se com a API de Produtos para buscar e manipular dados de produtos.',
      image: webProdutos,
      githubLink: 'https://github.com/Eduardo-J-S/product-management-web',
    },
    {
      title: 'Aplicação Mobile de Produtos',
      description: 'O aplicativo móvel Products é um projeto frontend desenvolvido para interagir com a API de Produtos. Ele fornece uma interface amigável para gerenciar produtos, incluindo funcionalidades para criar, atualizar, listar e excluir produtos. O aplicativo é construído usando React Native e se integra à API de Produtos para buscar e manipular dados de produtos.',
      image: webProdutos,
      githubLink: 'https://github.com/Eduardo-J-S/product-management-app',
    },
    {
      title: 'Previsão de Churn de Clientes',
      description: 'Este projeto aplica técnicas de Machine Learning para prever quais clientes estão em risco de abandonar os serviços de uma empresa de telecomunicações. Utilizando algoritmos como Random Forest, Gradient Boosting e Support Vector Machines, o modelo foi treinado para identificar padrões no comportamento dos clientes e prever o churn.',
      image: relogioDePontoImage,
      githubLink: 'https://github.com/Eduardo-J-S/mineracao-dados',
    },
    {
      title: 'ChatBot Distribuído',
      description: 'Este é um projeto de sistemas distribuídos composto por uma aplicação de cliente em Flask (Python) e um servidor em Flask também (Python), ambos contidos em contêineres Docker, e um serviço de proxy Nginx para facilitar a comunicação entre o cliente e o servidor.',
      image: relogioDePontoImage,
      githubLink: 'https://github.com/Eduardo-J-S/chatbot-sd',
    },
    {
      title: 'Plataforma de Ensino - Aprender Mais',
      description: 'O Aprender Mais é uma iniciativa desenvolvida como parte da disciplina de Desenvolvimento Web II (BackEnd). Nosso objetivo é criar uma plataforma de educação online inovadora que promova o acesso gratuito a aulas postadas pela plataforma através de adminstradores voluntários em diversas áreas de conhecimento.',
      image: relogioDePontoImage,
      githubLink: 'https://github.com/Eduardo-J-S/AprenderMais-BackEnd',
    },
    {
      title: 'DevBooks',
      description: 'O "DevBooks" é um projeto de FrontEnd desenvolvido como parte da cadeira de Desenvolvimento Web I no curso de graduação em Análise e Desenvolvimento de Sistemas. Trata-se de um site voltado para desenvolvedores, no qual os usuários podem pesquisar por livros relacionados à área de desenvolvimento e obter informações detalhadas, incluindo preço e locais de venda no Google. Além disso, o site oferece recursos adicionais para usuários autenticados, permitindo que criem e acessem suas contas personalizadas, tornando a experiência de pesquisa e interação mais personalizada e agradável.',
      image: relogioDePontoImage,
      githubLink: 'https://github.com/Eduardo-J-S/DSWI',
    }
    
  ];

  return (
    <section className="projects" id='projects'>
      <h2 className="projects__title">Meus Projetos</h2>
      <div className="projects__list">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
