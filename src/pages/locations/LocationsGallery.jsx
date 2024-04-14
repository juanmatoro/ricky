import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const LocationsGallery = () => {
  const [locations, setLocations] = useState([]); // Estado para almacenar la lista de mundos

  useEffect(() => {
    // Función para obtener la lista de mundos
    const getLocations = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/location"
        ); // Hacer la petición a la API
        setLocations(response.data.results); // Actualizar el estado con la lista de mundos
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    getLocations(); // Llamar a la función al cargar el componente
  }, []); // Ejecutar el efecto solo una vez al montar el componente

  return (
    <Container className="padd-sup-inf">
      <Row>
        <h2>Lista de Mundos</h2>
        <ListGroup>
          {locations.map((location) => (
            <ListGroup.Item key={location.id}>
              <Button
                variant="outline-secondary"
                href={`/location/${location.id}`}
              >
                {location.name}
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};

export default LocationsGallery;
