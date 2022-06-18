import React from 'react'
import "./Button.css";

interface ButtonProps {
    lable: string;
}

const Button = (props: ButtonProps) => {
    return <button>{props.lable}</button>
}

export default Button