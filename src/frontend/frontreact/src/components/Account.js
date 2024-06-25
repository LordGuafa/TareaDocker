// AccountPage.js
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

const AccountPage = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="wrapper">
      <form action="">
        <h1>Mi cuenta</h1>
        <div className="input-box">
          <label className="label-account" htmlFor="">
            Nombre:
          </label>
          {userData ? (
            <div className="cajaLabel">
              <label>
                <p>{userData.username}</p>
              </label>
            </div>
          ) : (
            <p>No hay datos de usuario disponibles.</p>
          )}
        </div>
        <div className="InputBox">
          <label className="label-account" htmlFor="">
            Rol:
          </label>
          {userData ? (
            <div className="cajaLabel">
              <label>
                <p>{userData.username}</p>
              </label>
            </div>
          ) : (
            <p>No hay datos de rol disponibles.</p>
          )}
        </div>
      </form>
      <button type="button" className="btn">
        <a href="/">Cerrar Sesión</a>
      </button>
    </div>
  );
};

export default AccountPage;
