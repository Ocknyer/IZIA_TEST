import axios from 'axios';

const requestURL = 'https://api.exchangerate.host/latest';

// export const instance = axios.create({
//   baseURL: requestURL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

export const getExchangeData = async () => {
  const response = await axios.get(requestURL);
  return response.data;
};
