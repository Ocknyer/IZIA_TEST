import { useEffect } from 'react';
import { getExchangeData } from './axios-api';
import { ExchangeWrapper, SelectorWrapper } from './styled';

const App = () => {
  useEffect(() => {
    getExchangeData()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ExchangeWrapper>
      <SelectorWrapper>hi</SelectorWrapper>
      <SelectorWrapper>hi</SelectorWrapper>
    </ExchangeWrapper>
  );
};

export default App;
