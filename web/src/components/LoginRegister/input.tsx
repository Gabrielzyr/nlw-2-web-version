import React, { InputHTMLAttributes, CSSProperties } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  style?: CSSProperties;
}

const Input: React.FC<InputProps> = ({ label, name, style,...rest }) => {
  return (
    <div className="inputsLog-Reg" style={style}>
      {/* <label htmlFor={name}>{label}</label> */}
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;