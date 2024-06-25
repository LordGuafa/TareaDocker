// LoginPage.js
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import InputBox from "./InputBox";

const Form = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, setUserData } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor, ingrese todos los campos");
      return;
    }

    const userData = { username, password };

    try {
      const response = await fetch("http://localhost:3200/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Error en el inicio de sesión");
      }

      const result = await response.json();
      console.log("Resultado:", result);

      if (result.success) {
        setIsLoggedIn(true);
        setUserData(result.userData);
        alert("Inicio de sesión exitoso");
        navigate("/cuenta"); // Redirigir a la página de cuenta después del login exitoso
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema con el inicio de sesión");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} method="post">
        <h1>Iniciar sesión</h1>
        <div className="input-box">
          <InputBox
            type="text"
            placeholder="Usuario"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <i className="bx bxs-user"></i>
        </div>
        <div className="input-box">
          <InputBox
            type="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>
        <button type="submit" className="btn">
          Ingresar
        </button>
        <div className="register-link">
          <p>
            ¿No tienes una cuenta? <a href="/registro">Registrarse</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
