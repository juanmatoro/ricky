import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const Episodios = () => {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    const getEpisodios = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/episode"
        ); // Hacer la petición a la API
        setEpisodios(response.data.results); // Actualizar el estado con la lista de episodios
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    getEpisodios(); // Llamar a la función al cargar el componente
  }, []); // Ejecutar el efecto solo una vez al montar el componente

  return (
    <Container className="padd-sup-inf">
      <Row>
        <h2>Los episodios</h2>
        <ListGroup variant="flush">
          {episodios.map((episodio) => (
            <ListGroup.Item key={episodio.id}>
              <Link to={`/episodio/${episodio.id}`}>{episodio.name}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default Episodios;
