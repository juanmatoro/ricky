import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "./Personajes.css";

const PersonajesHome = () => {
  const [characters, setCharacters] = useState([]);
  const baseUrl = `https://rickandmortyapi.com/api/character/`;

  const getCharacters = async () => {
    try {
      const api = await axios.get(baseUrl);
      const allCharacters = api.data.results;
      const randomCharacters = [];

      // Ensure unique random characters by using a Set
      const uniqueCharacterIDs = new Set();
      while (randomCharacters.length < 3) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        const randomCharacter = allCharacters[randomIndex];
        if (!uniqueCharacterIDs.has(randomCharacter.id)) {
          uniqueCharacterIDs.add(randomCharacter.id);
          randomCharacters.push(randomCharacter);
        }
      }

      setCharacters(randomCharacters);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const renderCharacter = (characters) => {
    return (
      <div className="card-sup">
        <div className="character-card" key={characters.id}>
          <Link to={`/character/${characters.id}`}>
            <img src={characters.image} alt={characters.name} />{" "}
            <h2>{characters.name}</h2>
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1>Personajes Aleatorios de Rick y Morty</h1>

      <div className="container-cards">
        {characters.length > 0 ? (
          characters.map(renderCharacter)
        ) : (
          <p>Cargando personajes...</p>
        )}
      </div>
      <Container>
        <Row className="centrar">
          <Col xs={3}>
            <Button variant="outline-secondary" href="/personajes">
              Ver todos
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PersonajesHome;
