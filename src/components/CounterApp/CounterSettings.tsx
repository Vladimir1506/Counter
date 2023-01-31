import React, {ChangeEvent, memo, useCallback} from 'react';
import styled from 'styled-components';
import Button from './Button';
import SuperInput from './SuperInput';
import {useDispatch, useSelector} from 'react-redux';
import {CounterStateType, setMax, setMin, toggleSettingEnabled} from '../../redux/counter-reducer';


const MainWrapper = styled.div`
  border: 4px solid cadetblue;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  padding: 20px;
`
const SettingsWrapper = styled.div`
  border-radius: 10px;
  border: 4px solid cadetblue;
  width: 100%;
  height: 50%;
  padding-top: 20px;
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

const CounterSettings = memo(() => {
    const min = useSelector<CounterStateType, number>(state => state.min)
    const max = useSelector<CounterStateType, number>(state => state.max)
    const isSettingsEnabled = useSelector<CounterStateType, boolean>(state => state.isSettingsEnabled)
    const incorrectValue = useSelector<CounterStateType, boolean>(state => state.isIncorrectValue)
    const dispatch = useDispatch()
    const setMinValue = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setMin(+e.currentTarget.value)), [dispatch])
    const setMaxValue = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setMax(+e.currentTarget.value)), [dispatch])
    const onButtonClick = useCallback(() => dispatch(toggleSettingEnabled(false)), [dispatch])
    return (
        <MainWrapper>
            <SettingsWrapper>
                <SuperInput name="max value" value={max} setValue={setMaxValue} incorrectValue={incorrectValue}/>
                <SuperInput name="start value" value={min} setValue={setMinValue} incorrectValue={incorrectValue}/>
            </SettingsWrapper>
            <ButtonWrapper>
                <Button name="set" onClick={onButtonClick} disabled={!isSettingsEnabled || incorrectValue}/>
            </ButtonWrapper>
        </MainWrapper>
    );
});

export default CounterSettings;