import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

import { Consortium } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

interface RDFConsortiumProps {
  id: string;
  members: Array<string>;
}

export const RDFConsortium: FunctionComponent<RDFConsortiumProps> = ({ id, members }) => {
  const context = 'https://schema.org';
  const type = 'Consortium';

  return (
    <JsonLd<Consortium>
      item={{
        '@context': context,
        '@id': id,
        '@type': type,
        member: [
          {
            '@id': members[0],
            '@type': 'Organization',
          },
          {
            '@id': members[1],
            '@type': 'Organization',
          },
        ],
      }}
    />
  );
};

RDFConsortium.propTypes = {
  id: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
};
