import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "./Personajes.css";

const Personajes = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  let estados = ["", "alive", "dead", "unknown"];
  let generos = ["", "female", "male", "genderless", "unknown"];

  let baseUrl = `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}`;

  const getCharacters = async () => {
    const api = await axios.get(baseUrl);
    setCharacters(api.data.results);
  };

  useEffect(() => {
    getCharacters();
  }, [baseUrl]);
  return (
    <Container className="padd-sup-inf">
      <Row className="row-padd">
        <Col lg="2">
          <label for="genero">Genero:</label>
          <select
            name="Genero"
            onChange={(ev) => setGender(ev.target.value)}
            className="select"
          >
            {generos.map((genero, index) => (
              <option key={index} value={genero}>
                {genero}
              </option>
            ))}
          </select>
        </Col>
        <Col lg="2">
          <label for="status">Status:</label>
          <select
            name="status"
            onChange={(ev) => setStatus(ev.target.value)}
            className="select"
          >
            {estados.map((estado, index) => (
              <option key={index} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row>
        <div className="container-cards">
          {characters.map((character, index) => (
            <div className="card-sup">
              <div className="character-card" key={index}>
                <Link to={`/character/${character.id}`}>
                  <img src={character.image} alt={character.name} />
                </Link>
                <div className="character-card-results">
                  <h2 className={character.status}>{character.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Row>
      <Row className="centrar">
        {page == 1 ? (
          <Col lg="2">
            <Button
              variant="outline-secondary"
              onClick={() => setPage(page + 1)}
            >
              Siguiente
            </Button>
          </Col>
        ) : (
          <>
            <Col lg="2">
              <Button
                variant="outline-secondary"
                onClick={() => setPage(page - 1)}
              >
                Anterior
              </Button>
            </Col>
            <Col lg="2">
              <Button
                variant="outline-secondary"
                onClick={() => setPage(page + 1)}
              >
                Siguiente
              </Button>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Personajes;
