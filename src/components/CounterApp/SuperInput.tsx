import React, {ChangeEvent} from 'react';
import styled from 'styled-components';

type SuperInputPropsType = {
    name: string
    value: number
    incorrectValue: boolean
    setValue: (e: ChangeEvent<HTMLInputElement>) => void
}

const SuperInputWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  padding-top: 10px;
  color: cadetblue;
`

const SuperInput = ({name, value, incorrectValue, setValue}: SuperInputPropsType) => {
    
    const inputStyle = {
        border: '2px solid cadetblue',
        borderRadius: '10px',
        paddingLeft: '10px',
        borderColor: incorrectValue ? 'red' : 'cadetblue',
        outline: 'none'
    }
    return (
        <SuperInputWrapper>
            <span>{name}</span>
            <input style={inputStyle} type="number" value={value} onChange={setValue}/>
        </SuperInputWrapper>
    );
};

export default SuperInput;