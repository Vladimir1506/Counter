import React, {ChangeEvent, useState} from 'react';
import Button from './Button';
import styled from 'styled-components';

type InputBlockPropsType = {
    addMessage: (message: string) => void
    isLimit: boolean
}

const InputBlockWrapper = styled.div`
  margin-bottom: 20px;
`

const InputBlock = ({addMessage, isLimit}: InputBlockPropsType) => {
    const [inputValue, setInputValue] = useState<string>('')

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const sendMessageButton = () => {
        addMessage(inputValue)
        setInputValue('')
    }
    const clearMessageButton = () => setInputValue('')

    return (
        <InputBlockWrapper>
            <input onChange={onChangeInputValue} value={inputValue}/>
            <Button name="Send" onClick={sendMessageButton} disabled={isLimit}/>
            <Button name="Clear" onClick={clearMessageButton}/>
        </InputBlockWrapper>
    );
};

export default InputBlock;