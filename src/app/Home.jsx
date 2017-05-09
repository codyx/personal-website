import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Header from './elements/Header';
import Body from './elements/Body';
import Footer from './elements/Footer';

const Home = props => (
  <Grid container align="center" gutter={0}>
    <Header toggleLightSwitch={props.toggleLightSwitch} theme={props.theme} />
    <Body />
    <Footer />
  </Grid>
);

Home.propTypes = {
  toggleLightSwitch: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Home;
