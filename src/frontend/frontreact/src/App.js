import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/Account";
import { AuthProvider } from "./components/AuthContext";
import Form from "./components/Login";
import Registro from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route>
              <Route path="/" element={<Form />} />
              <Route path="/login" element={<Form />} />
              <Route path="/cuenta" element={<Account />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="*" element={<h1>404</h1>} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
