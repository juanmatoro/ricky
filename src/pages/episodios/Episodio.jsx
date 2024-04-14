import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import axios from "axios";

const Episodio = () => {
  const { id } = useParams();
  const [episodio, setEpisodio] = useState();
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const getEpisodio = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        setEpisodio(response.data);
        const personajesData = await Promise.all(
          response.data.characters.map((url) => axios.get(url))
        );
        setPersonajes(personajesData.map((personaje) => personaje.data));
      } catch (error) {
        console.error("Error fetching episode details:", error);
      }
    };

    getEpisodio();
  }, [id]);

  return (
    <Container>
      {episodio && (
        <Row>
          <Col>
            <h2>{episodio.name}</h2>
            <p>Fecha de estreno: {episodio.air_date}</p>
            <p>Temporada y número de episodio: {episodio.episode}</p>
            <p>Personajes:</p>
          </Col>
          <Col>
            <ListGroup variant="flush">
              {personajes.map((personaje) => (
                <ListGroup.Item key={personaje.id}>
                  <Link to={`/character/${personaje.id}`}>
                    {personaje.name}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Episodio;
