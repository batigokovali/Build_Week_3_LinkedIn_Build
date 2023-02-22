import { Container, Row, Col } from "react-bootstrap";

import RightSide from "./RightSide";
import Footer from "./Footer";
import DropUpChat from "./DropUpChat";
import NavBar from "./NavBar";

const ExperiencePage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Row className="mt-5 pt-5">
          <Col lg={9}></Col>
          <Col lg={3}>
            <RightSide></RightSide>
          </Col>
        </Row>
        <Row>
          <Footer></Footer>
        </Row>
        <Row>
          <Col lg={4}>
            <DropUpChat></DropUpChat>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExperiencePage;
