import * as React from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '@mui/material/Toolbar';
import Hidden from '@mui/material/Hidden';
import Grid from '@mui/material/Grid';

import { StringList } from '../../constants/StringList';

const TopBar = () => {
  return (
    <div>
      <Toolbar>
        <Hidden only={['xs']}>
          <Link
            style={{
              textDecoration: 'none',
              color: '#556cd6',
              fontWeight: 700,
              fontSize: 36,
              fontFamily: 'program, sans-serif',
            }}
            to='/'
          >
            {StringList.MAIN_TITLE}
          </Link>
        </Hidden>
        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          <Grid container>
            <Grid item xs={12} textAlign='center'>
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#556cd6',
                  fontWeight: 700,
                  fontSize: 34,
                  fontFamily: 'program, sans-serif',
                }}
                to='/'
              >
                {StringList.MAIN_TITLE}
              </Link>
            </Grid>
          </Grid>
        </Hidden>
      </Toolbar>
    </div>
  );
};

export default TopBar;
