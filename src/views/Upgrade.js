import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import User from "./UserProfile";

function Upgrade() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card>
              <div className="header text-center">
                <h4 className="title">Đăng ký học cùng ThaiSpeaker</h4>
                <p className="category"></p>
                <br></br>
              </div>
            </Card>
          </Col>
          <User />
        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
