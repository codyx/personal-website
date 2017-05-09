// @flow

import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import styled from 'styled-components';

const CustomPaper = styled(Paper)`
    margin: auto;
    text-align: center;
    padding: 16px;
    overflow: hidden;
`;

CustomPaper.muiName = 'Paper';

const CustomAvatar = styled(Avatar)`
  width: 64px;
  height: 64px;
`;

CustomAvatar.muiName = 'Avatar';

const Credits = styled.div`
  position: relative;
  margin-top: 10px;
  font-size: 10px;
`

const Footer = () => (
  <Grid item xs={12}>
    <CustomPaper>
      <Button fab primary>
        <a href="https://www.linkedin.com/in/aimeric-seguin-084a14b2/" target="_blank" rel="noopener noreferrer">
          <CustomAvatar src="dist/png/linkedin.png" alt="linkedin" />
        </a>
      </Button>
      <Button fab primary style={{ marginLeft: 5 }}>
        <a href="mailto:aimeric.seguin@gmail.com"><CustomAvatar src="dist/png/email.png" alt="email"></CustomAvatar></a>
      </Button>
      <Credits>Icons made by <a href="http://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></Credits>
      <Credits>Aimeric Seguin &copy; {new Date().getFullYear()}</Credits>
    </CustomPaper>
  </Grid>
);

export default Footer;
