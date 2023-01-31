import React from 'react';
import styled from 'styled-components';

type CounterPropsType = {
    count: number
    isLimit: boolean
    incorrectValue: boolean
    disabled: boolean
}
type CounterWrapperPropsType = {
    isLimit: boolean
    incorrectValue: boolean
    disabled: boolean
}
const CounterWrapper = styled.div<CounterWrapperPropsType>`
  border-radius: 10px;
  border: 4px solid cadetblue;
  width: 100%;
  height: 50%;
  font-size: ${({incorrectValue, disabled}) => incorrectValue || disabled ? '30px' : '50px'};
  text-align: center;
  color: ${({isLimit, incorrectValue}) => isLimit || incorrectValue ? 'red' : 'black'};
  padding-top: 20px;
`
const Counter = ({count, isLimit, incorrectValue, disabled}: CounterPropsType) => {
    
    const incorrectValueMessage = 'Incorrect value!'
    const disabledMessage = 'set values and press "set"'
    return (
        <CounterWrapper incorrectValue={incorrectValue}
                        disabled={disabled} isLimit={isLimit}>
            {incorrectValue ? incorrectValueMessage : disabled ? disabledMessage : count}
        </CounterWrapper>
    );
};

export default Counter;
