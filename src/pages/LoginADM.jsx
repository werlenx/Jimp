import React, { useState } from "react";
import In from "../components/Input";
import { LoginStyled } from "./LoginStyled";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica de autenticação aqui
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <div>
        <h1>Login</h1>
        <p>Login</p>
        <In
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Digite seu email"
        />
        <p>Senha</p>
        <In
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Digite sua senha"
        />
        <Link to="/meus-eventos"><button type="submit">Entrar</button></Link>
      </div>
    </LoginStyled>
  );
}
