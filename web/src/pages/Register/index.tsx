import React from 'react'
import { Link } from 'react-router-dom';

import Input from '../../components/LoginRegister/input';
import PasswordInput from '../../components/LoginRegister/passwordInp';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import topBgImg from '../../assets/images/web--login-background.svg';
import './styles.css'

function UserRegister() {
  return (
    <div id="page-register-form">

      <header
        style={{ backgroundImage: `url(${topBgImg})` }}
        className="page-header page-register"
      >
        <Link className="back-to-login" to="/login">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <div className="top-container">

          <div className="logo-container lr-logo-container">
            <img src={logoImg} alt="Proffy" />
            <p>Sua plataforma de estudos online</p>
          </div>

        </div>

      </header>


      <form>
        <fieldset id="login-fieldset">

          <div id="register-header">
            <strong>Cadastro</strong>
            <p>Preencha os dados abaixo para começar</p>
          </div>


          <Input
            style={{ borderRadius: "1rem 1rem 0 0" }}
            type="text"
            placeholder="Nome"
            name='nome'
            autoComplete="none"
          />

          <Input
            type="text"
            placeholder="Sobrenome"
            name='surname'
            autoComplete="none"
          />

          <Input
            type="email"
            placeholder="E-mail"
            name='email'
            // autoComplete="never"
          />


          <PasswordInput name="password" label="password" />

          <button id="signIn-btn" type="submit">Concluir cadastro</button>
        </fieldset>

      </form>
    </div>
  )
}

export default UserRegister;

