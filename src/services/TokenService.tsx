import { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SNNContext } from '../components/Store/Store';
import { StringList } from '../constants/StringList';
import EthereumService from '../services/EthereumService';
import NFT from '../types/NFT';

type TokenRow = {
  id: number;
  col1: string;
  col2: string;
};

const tArray: Array<TokenRow> = [];

// eslint-disable-next-line
const TokenService = ({ setNetworkValue }: any) => {
  const { infuraGetTokenURI } = EthereumService();

  const tokenContext = useContext(SNNContext);
  const [tokenRows, setTokenRows] = useState(tArray);
  const [loading, setLoading] = useState(true);
  const [tokenLoading, setTokenLoading] = useState(false);

  const mapTokenId = async (tokenId: string) => {
    const token: NFT = tokenContext.getToken(tokenId.toString());
    // eslint-disable-next-line
    let metadata: any;
    if (token && !token.metaData) {
      const data = await infuraGetTokenURI(token.id);
      const { metaData } = data;
      tokenContext.setTokenMetaData(token.id, metaData);
      metadata = metaData;
    } else {
      metadata = token.metaData;
    }
    setNetworkValue(metadata);
  };

  const chipClick = async (tokenId: string) => {
    setTokenLoading(true);
    await mapTokenId(tokenId);
    setTokenLoading(false);
  };

  const showTokens = () => {
    let i = 0;
    for (const value of tokenContext.tokenMap.values()) {
      const tRow: TokenRow = {
        id: ++i,
        col1: value.id,
        col2: value.uri,
      };
      setTokenRows((tokenRows) => [...tokenRows, tRow]);
    }
    mapTokenId(StringList.ETH_FIRST_TOKEN_ID);
  };

  const goerliEffect = () => {
    useEffect(() => {
      const getRinkebyTokens = async () => {
        setLoading(true);
        //  READ IN MASTER TOKEN
        const manifestToken = await infuraGetTokenURI(StringList.ETH_MASTER_TOKEN_ID);
        const masterMetaDataLength = manifestToken.rows.length;

        //  READ IN IDs AND URI FROM MASTER TOKEN
        if (masterMetaDataLength && masterMetaDataLength > 0) {
          for (let i = 0; i < masterMetaDataLength; i++) {
            const id = manifestToken.rows[i].id;

            const uri = manifestToken.rows[i].uri;
            const t: NFT = {
              id: id,
              uri: uri,
            };
            //  SET THE TOKEN MAP ENTRY
            tokenContext.setToken(t.id, t);
          }
          tokenContext.setTokensLoaded(true);
          showTokens();
          setLoading(false);
        } else {
          // masterMetaDataLength === 0
          setLoading(false);
          return 'error';
        }
      };
      if (!tokenContext.tokensLoaded) {
        getRinkebyTokens().catch((error) => console.log(error));
      } else {
        showTokens();
      }
    }, []);
  };

  return {
    goerliEffect,
    tokenContext,
    tokenRows,
    setTokenRows,
    loading,
    tokenLoading,
    setLoading,
    setTokenLoading,
    chipClick,
  };
};

TokenService.propTypes = {
  setNetworkValue: PropTypes.func.isRequired,
};

export default TokenService;
