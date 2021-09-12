import axios from 'axios';
import URL from '../config/env/env.dev';

export default API = {
  searchItems: text => {
    return axios.get(
      `${URL.API_BASE_URL}term=${text.replace(
        ' ',
        '+',
      )}&limit=15&media=music&entity=song`,
      {},
    );
  },
};
