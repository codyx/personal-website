import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
} from 'material-ui/Card';
import Layout from 'material-ui/Layout';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import Technologies from './Technologies';

const CustomCard = styled(Card)`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify: center;
`;

const HeaderPic = styled.img`
  width: 100%;
`;

const CustomCardMedia = styled(CardMedia)`
  overflow: hidden;
  height: 85%;
`;

const Header = () => (
  <Layout item xs={12}>
    <CustomCard>
      <CustomCardMedia>
        <HeaderPic src="dist/jpg/header-pic.jpg" alt="Art" />
      </CustomCardMedia>
      <CardContent>
        <Typography type="body1">Aimeric Seguin</Typography>
        <Typography type="headline" component="h2">
          Software Engineer
        </Typography>
        <Technologies />
      </CardContent>
    </CustomCard>
  </Layout>
);

export default Header;
