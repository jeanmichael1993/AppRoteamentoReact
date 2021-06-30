import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ListagemParticipantes from "./componentes/ListagemParticipantes.js";
import CadastroParticipantes from "./componentes/CadastroParticipantes.js";
import EditarParticipante from "./componentes/EditarParticipante.js";

function App() {
  return (
    <BrowserRouter>
      <nav className="container navbar navbar-expand navbar-dark bg-dark">
        <h1 className="navbar-brand">
          Cadastro Participante
        </h1>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/participante" className="nav-link">
              Participantes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/novo" className="nav-link">
              Novo Participante
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/participante"]} component={ListagemParticipantes} />
          <Route exact path="/novo" component={CadastroParticipantes} />
          <Route path="/participante/:id" component={EditarParticipante} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;