import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import HomeCarousel from "./Carousel/HomeCarousel";
import { Col, Row, Container } from "react-bootstrap";
import ProductsContainer from "./Products/ProductsContainer";
import Signin from "./User/Signin";
import AdminHome from "./Admin/AdminHome";
export default class Home extends Component {
  state = {
    pageState: "home",
    user: "",
    isLoggedIn: false,
  };

  componentDidMount() {
    if (sessionStorage.getItem("pageState")) {
      this.setState({
        pageState: sessionStorage.getItem("pageState"),
      });
    }
  }
  rs;

  render() {
    return (
      <React.Fragment>
        <main role="main" className="mb-4">
          <NavBar
            changePage={this.changePage}
            isLoggedIn={this.state.isLoggedIn}
            cerrarSesion={this.cerrarSesion}
          />
          <Container fluid>
            <this.renderPages
              pageState={this.state.pageState}
              changePage={this.changePage}
              inicioSesion={this.inicioSesion}
            />
          </Container>
        </main>
        <footer className="text-muted text-left mt-5 ">
          <Container>
            <p className="float-right">
              <a href="/"> Ir al inicio</a>
            </p>
            <p>GabyCostemics venta de maquillaje por MAYOR y DETALLE.</p>
            <p>
              <img
                className="mr-2"
                src="img/instagram.png"
                alt="Second slide"
              />
              Instagram
            </p>
            <p>
              <img className="mr-2" src="img/facebook.png" alt="Second slide" />
              Facebook
            </p>
          </Container>
        </footer>
      </React.Fragment>
    );
  }

  //Funcion para inicio de sesion
  inicioSesion = (user) => {
    sessionStorage.setItem("isLoggedIn", true);
    sessionStorage.setItem("dataU", user.cod_user);
    sessionStorage.setItem("pageState", "admin");
    this.setState({
      pageState: "admin",
      user: user,
      isLoggedIn: true,
    });
  };

  cerrarSesion = () => {
    sessionStorage.setItem("isLoggedIn", false);
    sessionStorage.setItem("dataU", "");
    sessionStorage.setItem("pageState", "signin");
    this.setState({
      pageState: "signin",
      user: {},
      isLoggedIn: false,
    });
  };

  //Renderisado de paginas
  renderPages(props) {
    const { changePage, usuario, inicioSesion } = props;
    switch (props.pageState) {
      case "home":
        return (
          <React.Fragment>
            <Row className="justify-content-md-center">
              <Col md="10">
                <HomeCarousel />
              </Col>
            </Row>
            <Row>
              <Col>
                <ProductsContainer />
              </Col>
            </Row>
          </React.Fragment>
        );
      case "signin":
        return (
          <Row className="justify-content-md-center">
            <Col md="4">
              <Signin changePage={changePage} inicioSesion={inicioSesion} />
            </Col>
          </Row>
        );
      case "admin":
        return <AdminHome />;
      default:
        return <div></div>;
    }
  }

  changePage = (page) => {
    sessionStorage.setItem("pageState", page);
    this.setState({
      pageState: page,
    });
  }; //.
}
