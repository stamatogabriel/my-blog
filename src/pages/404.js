import React from "react";
import Layout from "../components/Layout";
import SEO from '../components/SEO'
import config from '../../data/config'

export default () => (
  <Layout>
    <SEO title={config.siteTitle} description={config.siteDescription} />
    <p>
      Infelizmente a página desejada não pode ser encontrada!
    </p>
  </Layout>
);