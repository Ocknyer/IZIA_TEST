import { useEffect, useState } from 'react';
import { getConvertedRates, getRatesData } from './axios-api';
import { ExchangeWrapper, SelectorWrapper } from './styled';
import currency from './currency';

const App = () => {
  const [rates, setRates] = useState({});
  const [countryOne, setCountryOne] = useState('USD');
  const [countryTwo, setCountryTwo] = useState('KRW');
  const [currencyOne, setCurrencyOne] = useState('');
  const [currencyTwo, setCurrencyTwo] = useState('');

  useEffect(() => {
    getRatesData().then((data) => {
      setRates(data.rates);
    });
  }, []);

  const onChangeHandler = (e) => {
    if (e.target.value >= 0 && e.target.id === 'to') {
      setCurrencyOne(e.target.value);
      getConvertedRates(countryOne, countryTwo, e.target.value).then(
        (data) => {
          setCurrencyTwo(data.result.toString());
        }
      );
    }

    if (e.target.value >= 0 && e.target.id === 'from') {
      setCurrencyTwo(e.target.value);
      getConvertedRates(countryTwo, countryOne, e.target.value).then(
        (data) => {
          setCurrencyOne(data.result.toString());
        }
      );
    }
  };

  const resetValue = (e) => {
    if (e.target.value === '') {
      setCurrencyOne('');
      setCurrencyTwo('');
    }
  };

  const onSelectChange = (e) => {
    if (e.target.id === 'currencyOne') {
      setCountryOne(e.target.value);
      getConvertedRates(e.target.value, countryTwo, currencyOne).then(
        (data) => {
          setCurrencyTwo(data.result);
        }
      );
    }

    if (e.target.id === 'currencyTwo') {
      setCountryTwo(e.target.value);
      getConvertedRates(e.target.value, countryOne, currencyTwo).then(
        (data) => {
          setCurrencyOne(data.result);
        }
      );
    }
  };

  const onClickSwitch = () => {
    setCurrencyOne(currencyTwo);
    setCurrencyTwo(currencyOne);
    setCountryOne(countryTwo);
    setCountryTwo(countryOne);
  };

  const country = Object.keys(rates).map((item, idx) => {
    return <option key={idx}>{item}</option>;
  });

  const priceOne = currencyOne
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const priceTwo = currencyTwo
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
              onKeyUp={resetValue}
              value={currencyOne}
              placeholder='금액 입력'
            />
            <p>{priceOne + ' ' + currency[countryOne]}</p>
            <select
              id='currencyOne'
              onChange={onSelectChange}
              value={countryOne}
            >
              {country}
            </select>
          </SelectorWrapper>
          <button className='btn-switch' onClick={onClickSwitch}>
            switch
          </button>
          <SelectorWrapper className='from'>
            <input
              type='text'
              id='from'
              onInput={onChangeHandler}
              onKeyUp={resetValue}
              value={currencyTwo}
              placeholder='금액 입력'
            />
            <p>{priceTwo + ' ' + currency[countryTwo]}</p>
            <select
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
