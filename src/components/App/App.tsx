import * as React from 'react';
import Container from '@mui/material/Container';
import { Store } from '../Store/Store';

import Gateway from '../Gateway/Gateway';

const App = () => {
  return (
    <Container maxWidth='md'>
      <Store>
        <Gateway />
      </Store>
    </Container>
  );
};

export default App;
