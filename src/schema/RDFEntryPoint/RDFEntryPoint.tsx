import React, { Fragment, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { EntryPoint } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

interface RDFEntryPointProps {
  id: string;
  appId: string;
}

const RDFEntryPoint: FunctionComponent<RDFEntryPointProps> = ({ id, appId }) => {
  const context = 'https://schema.org';
  const type = 'EntryPoint';
  const appType = 'SoftwareApplication';

  return (
    <Fragment>
      <JsonLd<EntryPoint>
        item={{
          '@context': context,
          '@id': id,
          '@type': type,
          actionApplication: {
            '@id': appId,
            '@type': appType,
          },
        }}
      />
    </Fragment>
  );
};

RDFEntryPoint.propTypes = {
  id: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
};

export default RDFEntryPoint;
