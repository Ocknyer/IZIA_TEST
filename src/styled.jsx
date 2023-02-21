import styled from 'styled-components';

export const ExchangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  padding: 30px;
  margin: 100px auto;
  border: 2px solid #c4c4c4;
  border-radius: 10px;
  box-sizing: border-box;

  .title {
    margin: 0 auto 30px;
  }

  .to {
    margin-bottom: 30px;
  }
`;

export const SelectorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  box-sizing: border-box;

  > input,
  select {
    border: none;
    background-color: transparent;
  }

  > input {
    text-align: center;
    border-right: 1px solid #c4c4c4;
  }

  > select {
    padding: 0 10px 0;
    border-left: 1px solid #c4c4c4;
  }
`;
