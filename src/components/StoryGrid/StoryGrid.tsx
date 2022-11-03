import * as React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type MetaDataProp = {
  networkValue: object;
};

const StoryGrid = (prop: MetaDataProp) => {
  const { networkValue } = prop;

  return (
    <Grid container spacing={2}>
      {Object.entries(networkValue).map((cell) => (
        <Grid item key={cell[0]} xs={12} md={4}>
          <Typography
            sx={{
              color: '000',
              backgroundColor: '#c8e6c9',
              border: '.05rem solid #999',
              height: '2rem',
              textAlign: 'left',
              verticalAlign: 'text-top',
              fontWeight: 700,
              fontSize: 14,
            }}
            pt={1}
            px={2}
            borderRadius={1}
          >
            {cell[0]}: {cell[1]}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

StoryGrid.propTypes = {
  networkValue: PropTypes.object.isRequired,
};

export default StoryGrid;
