import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import { Card, Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { VscWordWrap } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { SiWorkplace } from "react-icons/si";
import imagesContent from "assets/img/content/images";

function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <VscWordWrap style={{ color: "red" }} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Từ</p>
                      <Card.Title as="h4">30.000</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Bộ từ điển Thái - Việt đầu tiên
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <FaAward style={{ color: "orange" }} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Chứng chỉ</p>
                      <Card.Title as="h4">+500</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Cấp chứng chỉ đào tạo
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <GiBookshelf style={{ color: "purple" }} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Sách</p>
                      <Card.Title as="h4">300+</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  Hệ thống sách bản quyền
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <SiWorkplace style={{ color: "blue" }} />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Việc làm</p>
                      <Card.Title as="h4">200+</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Kết nối việc làm
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Thông báo tuyển sinh</Card.Title>
              </Card.Header>
              <Card.Body>
                <p>
                  Viện Nghiên cứu và Phát triển Công nghệ mới thông báo tuyển
                  sinh du học Thái Lan năm 2023.
                </p>
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src={imagesContent.notify_1}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className="d-block w-100"
                      src={imagesContent.notify_2}
                      alt="second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
              <Card.Footer>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Tin tức quan trọng</Card.Title>
                <p className="card-category">
                  "Từ vựng tiếng Thái Lan theo chủ đề" trở thành top sách bán
                  chạy tại Thaispeark
                </p>
              </Card.Header>
              <Card.Body>
                <Image src={imagesContent.book_1} style={imagesContent.style} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
