import React from 'react';

type ButtonPropsType = {
    name: string
    onClick: () => void
    disabled?: boolean
}
const Button = ({name, onClick, disabled}: ButtonPropsType) =>
    <button disabled={disabled} onClick={onClick}>{name}</button>

export default Button;