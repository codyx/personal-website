import React from 'react';
import PropTypes from 'prop-types';
import Card, {
  CardContent,
  CardMedia,
} from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Checkbox from 'material-ui/Checkbox';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import styled from 'styled-components';
import Technologies from './Technologies';

const CustomCard = styled(Card)`
  width: 100%;
  height: 80vh;
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
  height: 100%;
`;

const Header = props => (
  <Grid item xs={12}>
    <CustomCard>
      <CustomCardMedia>
        <HeaderPic src={`dist/jpg/header-pic-${props.theme}.jpg`} alt="Art" />
      </CustomCardMedia>
      <CardContent>
        <Checkbox
          icon={<LightbulbOutline />}
          checkedIcon={<LightbulbOutline />}
          onChange={props.toggleLightSwitch}
        />
        <Typography type="body1">Aimeric Seguin</Typography>
        <Typography type="headline" component="h2">
          Software Engineer
        </Typography>
        <Technologies />
      </CardContent>
    </CustomCard>
  </Grid>
);

Header.propTypes = {
  toggleLightSwitch: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Header;
