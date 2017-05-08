import React from 'react';
import Layout from 'material-ui/Layout';
import Header from './elements/Header';
import Body from './elements/Body';
import Footer from './elements/Footer';

const Home = () => (
  <Layout container align="center" gutter={0}>
    <Header />
    <Body />
    <Footer />
  </Layout>
);

export default Home;
