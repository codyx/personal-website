import React from 'react';
import Paper from 'material-ui/Paper';
import Layout from 'material-ui/Layout';
import Chip from 'material-ui/Chip';
import styled from 'styled-components';

const CustomPaper = styled(Paper)`
    padding: 16px;
    text-align: 'center';
    overflow: hidden;
`;

CustomPaper.muiName = 'Paper';

const Title = styled.h3`
  text-align: center;
`;

const Footer = () => (
  <Layout item xs={12}>
    <CustomPaper>
      <Title>Connect with me</Title>
      <Chip label="Twitter" />
    </CustomPaper>
  </Layout>
);

export default Footer;
