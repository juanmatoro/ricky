import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./Home.css";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Image src="rick-morty.webp" fluid />
      </Row>

      <Row>
        <Col></Col>
        <Col>
          <h1>Home</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
