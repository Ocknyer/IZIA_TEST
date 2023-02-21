import axios from 'axios';

const requestURL = 'https://api.exchangerate.host';

export const getRatesData = async () => {
  try {
    const response = await axios.get(`${requestURL}/latest`, {
      params: {
        base: 'USD',
        places: 2,
        symbols: 'KRW,USD,EUR,JPY,CNY,AUD,CAD,NZD',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getConvertedRates = async (from, to, amount) => {
  try {
    const response = await axios.get(
      `${requestURL}/convert?from=${from}&to=${to}`,
      {
        params: {
          base: 'USD',
          amount: `${amount}`,
          places: 2,
          symbols: 'KRW,USD,EUR,JPY,CNY,AUD,CAD,NZD',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
