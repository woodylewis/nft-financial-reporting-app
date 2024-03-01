import * as React from 'react';
import Container from '@mui/material/Container';
import RDFSoftwareApplication from '../../schema/RDFSoftwareApplication/RDFSoftwareApplication';
import { Store } from '../Store/Store';
import Gateway from '../Gateway/Gateway';

const id = 'SmartNarrative';
const mainEntityId = 'AppInstance';

const App = () => {
  return (
    <div>
      <RDFSoftwareApplication id={id} mainEntityId={mainEntityId} />
      <Container maxWidth='md'>
        <Store>
          <Gateway />
        </Store>
      </Container>
    </div>
  );
};

export default App;
