import React, { Component } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  DropdownButton,
  Dropdown,
  CardColumns,
  Form,
  Button,
  FormControl,
  Pagination,
} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export default class ProductsContainer extends Component {
  render() {
    return (
      <Card className="mt-3 shadowCard">
        <Card.Body>
          <Container fluid>
            <Row>
              {/* Side Bar */}
              <Col md="3">
                <ListGroup className="text-left">
                  <ListGroup.Item variant="light">
                    <h5>Labios</h5>
                    <h7>14 Productos encontrados</h7>
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    <Row>
                      <Col>Todos</Col>
                      <Col>
                        <div className="ml-auto" style={{ width: "2.5rem" }}>
                          <img src="img/down.png" alt="First slide" />
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    <Row>
                      <Col>Rostro</Col>
                      <Col>
                        <div className="ml-auto" style={{ width: "2.5rem" }}>
                          <img src="img/down.png" alt="First slide" />
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    <Row>
                      <Col>Ojos</Col>
                      <Col>
                        <div className="ml-auto" style={{ width: "2.5rem" }}>
                          <img src="img/down.png" alt="First slide" />
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    <Row>
                      <Col>Labios</Col>
                      <Col>
                        <div className="ml-auto" style={{ width: "2.5rem" }}>
                          <img src="img/down.png" alt="First slide" />
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action variant="light">
                    <Row>
                      <Col>Accesorios</Col>
                      <Col>
                        <div className="ml-auto" style={{ width: "2.5rem" }}>
                          <img src="img/down.png" alt="First slide" />
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              {/* Productos */}
              <Col md="8">
                {/* Row de Ordenado por */}
                <Row>
                  <span style={{ fontWeight: "1000" }}>Ordenar por:</span>
                  <Col className="text-left">
                    <DropdownButton variant="light" title="Recomendados">
                      <Dropdown.Item href="#/action-1">
                        Nuevos Productos
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Precio Mayor a Menor
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Precio Menor a Mayor
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Lo Mas Visto
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col md="auto">
                    <Form inline>
                      <FormControl
                        type="text"
                        placeholder="Buscar"
                        className="mr-sm-2"
                      />
                      <Button className="primaryButton" variant="outline-light">
                        Buscar
                      </Button>
                    </Form>
                  </Col>
                </Row>
                {/* Row de Productos */}

                <Row>
                  <Col md="auto">
                    <CardColumns className="mt-3">
                      <Card>
                        <Card.Img variant="top" src="img/item1.jpeg" />
                        <Card.Body className="text-left">
                          <div className="border-top mb-2"></div>
                          <Card.Title>Paleta</Card.Title>

                          <Card.Text>
                            <strong>$9.990</strong>
                          </Card.Text>
                          <Card.Text>
                            <small className="text-muted">
                              Internet: $12.990
                            </small>
                            <br></br>
                            <small className="text-muted">
                              Normal: $13.990
                            </small>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Img variant="top" src="img/item2.jpeg" />
                        <Card.Body className="text-left">
                          <div className="border-top mb-2"></div>
                          <Card.Title>Paleta</Card.Title>

                          <Card.Text>
                            <strong>$9.990</strong>
                          </Card.Text>
                          <Card.Text>
                            <small className="text-muted">
                              Internet: $12.990
                            </small>
                            <br></br>
                            <small className="text-muted">
                              Normal: $13.990
                            </small>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Img variant="top" src="img/item3.jpeg" />
                        <Card.Body className="text-left">
                          <div className="border-top mb-2"></div>
                          <Card.Title>Paleta</Card.Title>

                          <Card.Text>
                            <strong>$9.990</strong>
                          </Card.Text>
                          <Card.Text>
                            <small className="text-muted">
                              Internet: $12.990
                            </small>
                            <br></br>
                            <small className="text-muted">
                              Normal: $13.990
                            </small>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Img variant="top" src="img/item4.jpeg" />
                        <Card.Body className="text-left">
                          <div className="border-top mb-2"></div>
                          <Card.Title>Paleta</Card.Title>

                          <Card.Text>
                            <strong>$9.990</strong>
                          </Card.Text>
                          <Card.Text>
                            <small className="text-muted">
                              Internet: $12.990
                            </small>
                            <br></br>
                            <small className="text-muted">
                              Normal: $13.990
                            </small>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Img variant="top" src="img/item7.jpeg" />
                        <Card.Body className="text-left">
                          <div className="border-top mb-2"></div>
                          <Card.Title>Paleta</Card.Title>

                          <Card.Text>
                            <strong>$9.990</strong>
                          </Card.Text>
                          <Card.Text>
                            <small className="text-muted">
                              Internet: $12.990
                            </small>
                            <br></br>
                            <small className="text-muted">
                              Normal: $13.990
                            </small>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                      <Card>
                        <Card.Img variant="top" src="img/item1.jpeg" />
                        <Card.Body className="text-left">
                          <div className="border-top mb-2"></div>
                          <Card.Title>Paleta</Card.Title>

                          <Card.Text>
                            <strong>$9.990</strong>
                          </Card.Text>
                          <Card.Text>
                            <small className="text-muted">
                              Internet: $12.990
                            </small>
                            <br></br>
                            <small className="text-muted">
                              Normal: $13.990
                            </small>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </CardColumns>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col md="auto">
                    <this.CustomPagination />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }

  CustomPagination = (props) => {
    return (
      <Pagination className="mx-auto">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item active>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    );
  };
}
