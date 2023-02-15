import React, {useCallback, useMemo} from 'react';
import Counter from './Counter';
import Button from './Button';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {incCount, setCount} from '../../redux/counter-reducer';
import {AppStateType, store} from '../../redux/store';

const MainWrapper = styled.div`
  border: 4px solid cadetblue;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  padding: 20px;
`
const ButtonWrapper = styled.div`
  margin: 10% 0;
  border: 4px solid cadetblue;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  height: 20%;
`
const CounterBlock = (() => {

    const incorrectValue = useSelector<AppStateType, boolean>(state => state.counter.isIncorrectValue)
    const count = useSelector<AppStateType, number>(state => state.counter.count)
    const {min, max} = store.getState().counter
    const isSettingsEnabled = useSelector<AppStateType, boolean>(state => state.counter.isSettingsEnabled)
    const dispatch = useDispatch()
    const incrementCount = useCallback(() => dispatch(incCount()), [dispatch])
    const resetCount = useCallback(() => dispatch(setCount(min)), [dispatch, min])
    const isMax = useMemo(() => (count === max), [count, max])
    const isMin = useMemo(() => (count === min), [count, min])
    return (
        <MainWrapper>
            <Counter count={count} isLimit={isMax && !isSettingsEnabled} incorrectValue={incorrectValue}
                     disabled={isSettingsEnabled}/>
            <ButtonWrapper>
                <Button name="inc" onClick={incrementCount} disabled={isMax || isSettingsEnabled}/>
                <Button name="reset" onClick={resetCount} disabled={isMin || isSettingsEnabled}/>
            </ButtonWrapper>
        </MainWrapper>
    );
});

export default CounterBlock;