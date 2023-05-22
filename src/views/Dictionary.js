import React, { useEffect, useMemo, useState } from "react";

// react-bootstrap components
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import SearchElement from "components/searchComponent/SearchElement";
import { dictionary } from "api/db";
import { Table } from "react-bootstrap";

function Dictionary() {
  const [data, setData] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const responsive = await axios.get(
  //         "http://localhost:8080/v1/dictionary"
  //       );
  //       if (responsive.data.length) {
  //         setData(responsive.data);
  //       }
  //     } catch (err) {}
  //   };
  //   fetchData();
  // }, []);

  const words = useMemo(() => dictionary.map((item) => item.word), []);

  const handleGetValueSearch = (value) => {
    setValueSearch(value);
  };

  useEffect(() => {
    const newResult = dictionary.filter((word) =>
      word.word.includes(valueSearch)
    );

    if (valueSearch) {
      newResult.sort((pre, next) => pre.word.length - next.word.length);
    }

    setResultSearch(newResult.slice(0, 10));
  }, [valueSearch]);

  return (
    <>
      <Container fluid>
        <SearchElement
          valueFilter={words}
          getValueSearch={handleGetValueSearch}
        />
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Từ điển Thái Việt</Card.Title>
                <p className="card-category">
                  Hơn 30.000 từ thuộc tất cả các lĩnh vực
                </p>
              </Card.Header>
              <Card.Body>
                {valueSearch ? (
                  <h3>Kết quả tìm kiếm</h3>
                ) : (
                  <h3>Top từ thông dụng</h3>
                )}

                <Table striped>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Word</th>
                      <th>Type</th>
                      <th>Mean</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultSearch.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.word}</td>
                        <td>{item.type}</td>
                        <td>{item.mean}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer>
                {/* <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div> */}
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dictionary;
