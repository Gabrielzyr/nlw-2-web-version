import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import showEye from '../../assets/images/icons/show-passw-eye.svg'
import logoImg from '../../assets/images/logo.svg'
import topBgImg from '../../assets/images/web--login-background.svg'
import Input from '../../components/LoginRegister/input'
import PasswordInput from '../../components/LoginRegister/passwordInp'


const UsersLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassButton = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div id="page-login-form">

      <header
        style={{ backgroundImage: `url(${topBgImg})` }}
        className="page-header page-login"
      >
        <div className="logo-container lg-logo-container">
          <img src={logoImg} alt="Proffy" />
          <p>Sua plataforma de estudos online</p>
        </div>

      </header>

      <form>
        <fieldset id="login-fieldset">

          <div id="login-header">
            <strong>Fazer login</strong>
            <Link to="/register">Criar uma conta</Link>
          </div>

            <Input
              style={{borderRadius: "1rem 1rem 0 0"}}
              type="email"
              placeholder="E-mail"
              name='email'
              autoComplete="none"
            />

            <PasswordInput
              placeholder="Senha"
              name="password"
            />

          <footer id="login-footer">
            <div>
              <input
                type="radio"
                placeholder="E-mail"
                name='remindMe'
                id='remindMe'
              />
              <label htmlFor="remindMe">Lembrar-me</label>
            </div>
            <a href="#">Esqueci minha senha</a>
          </footer>
          <button id="login-btn" type="submit">Entrar</button>
        </fieldset>

      </form>

    </div>
  )
}

export default UsersLogin;