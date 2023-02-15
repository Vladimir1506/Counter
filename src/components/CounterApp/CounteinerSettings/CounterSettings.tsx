import React, {ChangeEvent, memo, useCallback} from 'react';
import Button from '../Button';
import SuperInput from '../SuperInput';
import {useDispatch, useSelector} from 'react-redux';
import {setMax, setMin, toggleSettingEnabled} from '../../../redux/counter-reducer';
import {SettingsWrapper, MainWrapper, ButtonWrapper} from './style';
import {AppStateType} from '../../../redux/store';


const CounterSettings = memo(() => {
    const min = useSelector<AppStateType, number>(state => state.counter.min)
    const max = useSelector<AppStateType, number>(state => state.counter.max)
    const isSettingsEnabled = useSelector<AppStateType, boolean>(state => state.counter.isSettingsEnabled)
    const incorrectValue = useSelector<AppStateType, boolean>(state => state.counter.isIncorrectValue)
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