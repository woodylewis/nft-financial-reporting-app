import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Chip from '@mui/material/Chip';
import PlayCircleFilledTwoToneIcon from '@mui/icons-material/PlayCircleFilledTwoTone';

export type ChipProps = {
  cTokenId: string;
  cLabel: string;
  // eslint-disable-next-line
  cFunc: any;
  networkValue: object;
};

export const Story = ({ cTokenId, cLabel, cFunc, networkValue }: ChipProps) => {
  let match = false;
  for (const [key, value] of Object.entries(networkValue)) {
    if (key === 'name' && value === cLabel) {
      match = true;
    }
  }

  return (
    <Fragment>
      {match && (
        <Chip
          color='primary'
          variant='filled'
          size='small'
          label={cLabel}
          icon={<PlayCircleFilledTwoToneIcon style={{ color: 'primary' }} />}
          onClick={() => cFunc(cTokenId)}
          sx={{
            margin: 1,
          }}
        />
      )}
      {!match && (
        <Chip
          color='primary'
          variant='outlined'
          size='small'
          label={cLabel}
          icon={<PlayCircleFilledTwoToneIcon style={{ color: 'primary' }} />}
          onClick={() => cFunc(cTokenId)}
          sx={{
            margin: 1,
          }}
        />
      )}
    </Fragment>
  );
};

Story.propTypes = {
  cTokenId: PropTypes.string.isRequired,
  cLabel: PropTypes.string.isRequired,
  cFunc: PropTypes.func.isRequired,
  networkValue: PropTypes.object.isRequired,
};
