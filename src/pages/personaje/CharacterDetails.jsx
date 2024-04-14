import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./Personaje.css";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    const getCharacterById = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
        if (response.data.episode && response.data.episode.length > 0) {
          const episodioData = await Promise.all(
            response.data.episode.map((url) => axios.get(url))
          );
          setEpisodios(episodioData.map((episodio) => episodio.data));
        }
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    getCharacterById();
  }, [id]);

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <Container className="padd-sup-inf">
      <Row className="container-personaje-principal">
        <Col md="auto" className="container-personaje-imagen">
          <img src={character.image} alt={character.name} />
        </Col>
        <Col className="container-personaje-datos">
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
          <p>Specie: {character.species}</p>
          <p>Genero: {character.gender}</p>
          <p>Origen: {character.origin.name}</p>
          <p>Localización: {character.location.name}</p>
        </Col>
      </Row>
      <Row>
        <h3>Episodios:</h3>
        <ListGroup horizontal className="episodios">
          {episodios.map((episodio) => (
            <ListGroup.Item key={episodio.id}>
              <Button
                variant="outline-secondary"
                href={`/episodio/${episodio.id}`}
              >
                {episodio.name}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
      <p>Created: {character.created}</p>
      <Link to="/personajes">Volver a la galería</Link>
    </Container>
  );
};

export default CharacterDetails;
