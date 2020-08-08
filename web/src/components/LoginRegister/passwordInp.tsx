import React, { InputHTMLAttributes, useState } from 'react'

import './styles.css'
import showEye from '../../assets/images/icons/show-passw-eye.svg'
import hideEye from '../../assets/images/icons/hide-passw-eye.svg'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const PasswordInput: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassButton = () => {
    setShowPassword(!showPassword);
  };

  return (

    <div className="inputsLog-Reg password-container">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Senha"
        name="password"
      />
      <img onClick={handleShowPassButton} src={showPassword ? hideEye : showEye} alt="show eye image" className="password-icon" />
    </div>
  );
}

export default PasswordInput;




