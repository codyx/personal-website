// @flow

import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import Projects from './Projects';
import Achievements from './Achievements';

const CustomPaper= styled(Paper)`
    padding: 16px;
    text-align: 'center';
    overflow: hidden;
`;

CustomPaper.muiName = 'Paper';

const Body = () => (
    <Grid item xs={12}>
      <CustomPaper>
        <h2 style={{ textAlign: 'center' }}>Hello, I am Aimeric!</h2>
        <p style={{ textAlign: 'center' }}>
          I am currently a 5th year computer engineering student with experience at <a href="http://www.epitech.eu" target="_blank" rel="noopener noreferrer">Epitech</a> in Paris, France.<br />
          Recently, I co-founded an IT startup which is entitled <a href="http://www.aoxis.io" target="_blank" rel="noopener noreferrer">Aoxis</a> and which develops Web products.<br />
          To date, I've coded more than 40 programming projects and I'm very enthusiastic about building new projects.<br />
          I was born and raised in Paris and I've studied both in France and Canada. I enjoy doing sports and drinking coffee.
        </p><br />
        <h4>Some of my projects</h4>
        <Projects />
        <h4>Some of my achievements</h4>
        <Achievements />
      </CustomPaper>
    </Grid>
);

export default Body;
