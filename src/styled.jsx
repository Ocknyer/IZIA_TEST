import styled from 'styled-components';

export const ExchangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 500px;
  padding: 30px;
  margin: 100px auto;
  border: 2px solid #c4c4c4;
  border-radius: 10px;
  box-sizing: border-box;

  .title {
    margin: 0 auto 20px;
  }

  .btn-switch {
    width: 50px;
    text-align: center;
    padding: 5px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    background-color: white;
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
