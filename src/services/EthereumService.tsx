import { useSNNContext } from '../components/Store/Store';
import axios from 'axios';

const EthereumService = () => {
  const tokenContext = useSNNContext();

  const infuraGetTokenURI = async (index: string) => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Object is possibly 'null'
      const ipfsHash = await tokenContext.contextContract.methods
        .getTokenURI(index)
        .call({ from: tokenContext.contextWallet });
      const ipfsResponse = await axios({
        headers: {
          'Accept': 'text/plain'
        },
        method: 'get',
        url: ipfsHash
      });
      const { data } = ipfsResponse;
      return data;
    } catch (error) {
      console.log(`error => ${error}`);
      return error;
    }
  };

  return {
    infuraGetTokenURI,
  };
};

export default EthereumService;
