import React, { Fragment, FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { SoftwareApplication } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

interface RDFSoftwareApplicationProps {
  id: string;
  mainEntityId: string;
}

const RDFSoftwareApplication: FunctionComponent<RDFSoftwareApplicationProps> = ({
  id,
  mainEntityId,
}) => {
  const context = 'https://schema.org';
  const type = 'SoftwareApplication';

  return (
    <Fragment>
      <JsonLd<SoftwareApplication>
        item={{
          '@context': context,
          '@id': id,
          '@type': type,
          mainEntity: {
            '@id': mainEntityId,
            '@type': 'Consortium',
          },
        }}
      />
    </Fragment>
  );
};

RDFSoftwareApplication.propTypes = {
  id: PropTypes.string.isRequired,
  mainEntityId: PropTypes.string.isRequired,
};

export default RDFSoftwareApplication;
