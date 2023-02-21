import { useEffect, useState } from 'react';
import { getConvertedRates, getRatesData } from './axios-api';
import { ExchangeWrapper, SelectorWrapper } from './styled';

const App = () => {
  const [rates, setRates] = useState({});
  const [countryOne, setCountryOne] = useState('USD');
  const [countryTwo, setCountryTwo] = useState('KRW');
  const [currencyOne, setCurrencyOne] = useState(0);
  const [currencyTwo, setCurrencyTwo] = useState(0);
  const [ratesOne, setRatesOne] = useState(0);
  const [ratesTwo, setRatesTwo] = useState(0);

  console.log(
    currencyOne,
    currencyTwo,
    countryOne,
    countryTwo,
    ratesOne,
    ratesTwo
  );

  const currency = {
    KRW: '원',
    USD: '달러',
    EUR: '유로',
    JPY: '엔',
    CNY: '위안',
    AUD: '호주 달러',
    CAD: '캐나다 달러',
    NZD: '뉴질랜드 달러',
  };

  useEffect(() => {
    getRatesData().then((data) => {
      setRates(data.rates);
      setRatesOne(data.rates.USD);
      setRatesTwo(data.rates.KRW);
    });
  }, []);

  const onChangeHandler = (e) => {
    if (e.target.value > 0 && e.target.id === 'to') {
      setCurrencyOne(parseInt(e.target.value));
      getConvertedRates(countryOne, countryTwo, e.target.value).then(
        (data) => {
          console.log(data);
          setCurrencyTwo(data.result);
        }
      );
    }

    if (e.target.value > 0 && e.target.id === 'from') {
      setCurrencyTwo(parseInt(e.target.value));
      getConvertedRates(countryTwo, countryOne, e.target.value).then(
        (data) => {
          console.log(data);
          setCurrencyOne(data.result);
        }
      );
    }
  };

  const onSelectChange = (e) => {
    if (e.target.id === 'currencyOne') {
      setCountryOne(e.target.value);
      getConvertedRates(e.target.value, countryTwo, currencyOne).then(
        (data) => {
          console.log(data);
          setCurrencyTwo(data.result);
        }
      );
    } else {
      setCountryTwo(e.target.value);
      getConvertedRates(e.target.value, countryOne, currencyTwo).then(
        (data) => {
          console.log(data);
          setCurrencyOne(data.result);
        }
      );
    }
  };

  const country = Object.keys(rates).map((item, idx) => {
    return <option key={idx}>{item}</option>;
  });

  const priceOne = currencyOne.toLocaleString();
  const priceTwo = currencyTwo.toLocaleString();

  console.log(priceOne, priceTwo);

  return (
    <>
      {rates && (
        <ExchangeWrapper>
          <h1 className='title'>환율 계산기</h1>
          <SelectorWrapper className='to'>
            <input
              type='text'
              id='to'
              onInput={onChangeHandler}
              value={currencyOne}
            />
            <p>{priceOne + ' ' + currency[countryOne]}</p>
            <select
              name='currency-one'
              id='currencyOne'
              onChange={onSelectChange}
              value={countryOne}
            >
              {country}
            </select>
          </SelectorWrapper>
          <SelectorWrapper className='from'>
            <input
              type='text'
              id='from'
              onInput={onChangeHandler}
              value={currencyTwo}
            />
            <p>{priceTwo + ' ' + currency[countryTwo]}</p>
            <select
              name='currency-two'
              id='currencyTwo'
              onChange={onSelectChange}
              value={countryTwo}
            >
              {country}
            </select>
          </SelectorWrapper>
        </ExchangeWrapper>
      )}
    </>
  );
};

export default App;
