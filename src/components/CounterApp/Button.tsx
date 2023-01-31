import React, {memo} from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}

const Button = memo(({name, onClick, disabled}: ButtonPropsType) => {
    
    const buttonStyle = {
        height: '30px',
        width: '60px',
        backgroundColor: disabled ? 'lightslategray' : 'cadetblue',
        border: disabled ? 'lightslategray' : '4px solid cadetblue',
        borderRadius: '5px',
        color: 'white',
    }
    return <button style={buttonStyle} disabled={disabled} onClick={onClick}>{name}</button>
})

export default Button;