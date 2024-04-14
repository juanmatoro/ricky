import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

const LocationDetails = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null); // Estado para almacenar los detalles del mundo
  const [residents, setResidents] = useState([]); // Estado para almacenar los residentes del mundo

  useEffect(() => {
    // Función para obtener los detalles del mundo por ID
    const getLocationDetails = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/location/${id}`
        ); // Hacer la petición a la API
        setLocation(response.data); // Actualizar el estado con los detalles del mundo
        // Obtener los detalles de los personajes residentes
        const residentsData = await Promise.all(
          response.data.residents.map((url) => axios.get(url))
        );
        setResidents(residentsData.map((resident) => resident.data));
      } catch (error) {
        console.error("Error fetching location details:", error);
      }
    };

    getLocationDetails();
  }, [id]); // Ejecutar el efecto cada vez que cambie la ID del mundo

  if (!location) {
    return <div>Cargando...</div>; // Mostrar un mensaje de carga mientras se obtienen los detalles del mundo
  }

  return (
    <Container className="padd-sup-inf">
      <Row>
        <h2>{location.name}</h2>
        <Col>
          <p>Type: {location.type}</p>
        </Col>
        <Col>
          <p>Dimension: {location.dimension}</p>
        </Col>
      </Row>
      <Row>
        <h3>Residents:</h3>
        <Col md="3">
          <ListGroup>
            {residents.map((resident) => (
              <ListGroup.Item key={resident.id}>
                <Button
                  variant="outline-secondary"
                  href={`/character/${resident.id}`}
                >
                  {resident.name}
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default LocationDetails;
