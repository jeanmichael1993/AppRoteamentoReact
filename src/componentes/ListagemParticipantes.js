import React, { useState, useEffect } from "react";
import * as api from "../services/Endpoints"
import { Link } from "react-router-dom";

const ListagemParticipantes = () => {
  const [participantes, setParticipantes] = useState([]);
  const [participanteSelecionado, setParticipanteSelecionado] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    buscaParticipantes();
  }, []);

  const buscaParticipantes = () => {
    api.getAll()
      .then(response => {
        setParticipantes(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setParticipanteAtivo = (participante, index) => {
    setParticipanteSelecionado(participante);
    setCurrentIndex(index);
  };

  return (
    <div className="container list row">
      <div className="col-md-6">
        <h4>Participantes</h4>
        <ul className="list-group py-1">
          {participantes &&
            participantes.map((participante, index) => (
              <li className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setParticipanteAtivo(participante, index)}
                key={index}
              >{participante.nome}</li>
            ))}
        </ul>
      </div>


      <div className="col-md-6">
        {participanteSelecionado ? (
          <div>
            <h4>Detalhe</h4>
            <div>
              <label>
                <strong>Participante:</strong>
              </label>{" "}
              {participanteSelecionado.Nome}
            </div>
            <div>
              <label>
                <strong>CPF:</strong>
              </label>{" "}
              {participanteSelecionado.cpf}
            </div>

            <Link to={"/participante/" + participanteSelecionado.id} className="btn btn-warning">Editar</Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Escolha um Participante ...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListagemParticipantes;