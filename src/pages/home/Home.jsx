import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Home.css";
import PersonajesHome from "../personajes/PersonajesHome";

const Home = () => {
  return (
    <Container fluid className="padd-inf">
      <Row>
        <Image src="rick-morty.webp" fluid />
      </Row>

      <Row>
        <div class="introduccion">
          <div class="columna-izquierda">
            <h2>Rick y Morty: Una Introducción</h2>
            <p>
              Rick y Morty es una serie de televisión animada estadounidense de
              ciencia ficción para adultos creada por Justin Roiland y Dan
              Harmon. La serie sigue las desventuras de Rick Sanchez, un
              científico excéntrico y alcohólico, y su nieto Morty Smith, que se
              embarcan en peligrosas aventuras a través del multiverso.
            </p>
            <p>
              Rick, con su genio científico y su desprecio por la autoridad, a
              menudo arrastra a Morty a sus locas aventuras, poniendo en peligro
              sus vidas y las de aquellos que los rodean. Morty, por otro lado,
              es un adolescente normal que intenta lidiar con las dificultades
              de la escuela secundaria y la vida familiar mientras se ve
              envuelto en las alocadas travesuras de su abuelo.
            </p>
          </div>

          <div class="columna-derecha">
            <h2>Datos Interesantes</h2>
            <ul>
              <li>
                La serie se estrenó en 2013 en Adult Swim y ha ganado varios
                premios, incluyendo un Emmy Award.
              </li>
              <li>
                Se han producido seis temporadas de la serie hasta la fecha, y
                se ha confirmado una séptima temporada.
              </li>
              <li>
                Rick y Morty ha generado un gran fandom, con una gran cantidad
                de productos derivados, incluyendo cómics, videojuegos y ropa.
              </li>
            </ul>
            <p>
              ¿Te gusta Rick y Morty? Si es así, te invitamos a ver la serie y
              descubrir por qué es tan popular. ¡Prepárate para un viaje salvaje
              e impredecible a través del multiverso!
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <PersonajesHome />
      </Row>
    </Container>
  );
};

export default Home;
