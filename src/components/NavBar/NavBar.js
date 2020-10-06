import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
export default class NavBar extends Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "#f8a5c2" }} className="shadowCard">
        <Navbar.Brand>
          <Image
            rounded
            src="img/logo.jpeg"
            width="35"
            height="35"
            className="d-inline-block align-top mr-2"
            alt="gabycosmetics-logo logo"
          />
          GabyCosmetics
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => {
              this.props.changePage("home");
            }}
          >
            Inicio
          </Nav.Link>
          <Nav.Link href="#features">Contacto</Nav.Link>
          <Nav.Link href="#pricing">Sobre</Nav.Link>
        </Nav>
        <Button
          onClick={() => {
            if (this.props.isLoggedIn) {
              
              this.props.cerrarSesion();
            } else {
              this.props.changePage("signin");
            }
          }}
          className="primaryButton"
          variant="outline-light"
        >
          {this.props.isLoggedIn ? "Cerrar Sesión" : "Acceder"}
        </Button>
      </Navbar>
    );
  }
}
