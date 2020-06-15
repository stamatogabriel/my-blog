import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Container from "../Container";
import Helmet from "react-helmet";
import favicon from "../../../static/favicon.png";
import config from "../../../data/config";
import "./Layout.css";

export default ({ children, title }) => (
  <div>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header title={title} />
    <main role="main">
      <Container>
        {children}
        <aside className="aside">
          <Sidebar
            title="Sobre mim"
            description="Apenas um cara que trocou um carreira de 12 anos no ramo de Distribuição de combustíveis para viver uma paixão... o Desenvolvimento."
          />
          <Sidebar
            title="Sobre o blog"
            description="Aqui você vai encontrar algumas coisas que aprendi sobre desenvolvimento web e mais algumas coisas que aprendi durante a minha jornada."
          />
        </aside>
      </Container>
    </main>
  </div>
);
