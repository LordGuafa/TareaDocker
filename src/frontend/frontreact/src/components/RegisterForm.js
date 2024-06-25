import React, { useState } from "react";
import InputBox from "./InputBox";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificación de valores en el estado
    console.log("Current Username:", username);
    console.log("Current Password:", password);

    if (username.trim() === "" || password.trim() === "") {
      alert("Por favor, ingrese todos los campos");
      return;
    }

    const userData = { username, password };
    console.log("User Data:", userData);

    try {
      const response = await fetch("http://localhost:3200/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Nombre de usuario ya existe");
      }

      const result = await response.json();
      console.log("Registro exitoso", result);
      alert("Registro exitoso");
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema con el registro");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} method="post">
        <h1>Registrarse</h1>
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
          Registrarse
        </button>
        <div className="register-link">
          <p>
            ¿Ya tienes una cuenta?
            <a href="/">Ingresa</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
