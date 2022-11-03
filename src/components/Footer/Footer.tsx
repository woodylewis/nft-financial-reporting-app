import * as React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Hidden from '@mui/material/Hidden';

import { StringList } from '../../constants/StringList';

const Footer = () => {
  return (
    <Grid container mt={2}>
      <Hidden only={['xs']}>
        <Grid item xs={12} textAlign='center'>
          <Typography variant='caption' color='textSecondary'>
            {StringList.FOOTER_COPYRIGHT}
            <br />
            {StringList.FOOTER_TRADEMARK}
          </Typography>
        </Grid>
      </Hidden>
      <Hidden only={['sm', 'md', 'lg', 'xl']}>
        <Grid item xs={12} textAlign='center'>
          <Typography variant='caption' color='textSecondary'>
            {StringList.MOBILE_FOOTER_COPYRIGHT_ONE}
            <br />
            {StringList.MOBILE_FOOTER_COPYRIGHT_TWO}
            <br />
            {StringList.MOBILE_FOOTER_TRADEMARK}
          </Typography>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Footer;
