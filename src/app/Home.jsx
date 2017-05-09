// @flow

import React from 'react';
import Grid from 'material-ui/Grid';
import Header from './elements/Header';
import Body from './elements/Body';
import Footer from './elements/Footer';

const Home = (props: { toggleLightSwitch: () => void, theme: string }) => (
  <Grid container align="center" gutter={0}>
    <Header toggleLightSwitch={props.toggleLightSwitch} theme={props.theme} />
    <Body />
    <Footer />
  </Grid>
);

export default Home;
