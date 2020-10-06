import React, { Component, useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import UserService from "../../services/userService";
export default class Signin extends Component {
  state = {
    username: "",
    passwd: "",
    userService: new UserService(),
  };

  //Handler para el cambio de usuario
  onChangeUsuario = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  //Handler para el cambio de clave
  onChangeClave = (e) => {
    this.setState({
      passwd: e.target.value,
    });
  };

  //submit pora el inicio de sesion
  onSubmit = async () => {
    const { username, passwd, userService } = this.state;
    const data = await userService.Signin(username, passwd);
    return data;
  };

  //Boton de inicio de sesion
  submitButton = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [state, changeState] = useState({
      message: "",
    });
    return (
      <React.Fragment>
        <Button
          className="primaryButton"
          variant="outline-primary"
          onClick={async () => {
            const data = await props.onSubmit();
            if (data.message === "username-false") {
              handleShow();
              changeState((state) => ({
                ...state,
                message: "El nombre de usuario ingresado no existe.",
              }));
            } else if (data.message === "password-false") {
              handleShow();
              changeState((state) => ({
                ...state,
                message: "Contraseña Incorrecta",
              }));
            } else {
              props.inicioSesion(data);
            }
          }}
        >
          Entrar
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error en el inicio de sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>{state.message}</Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  };

  render() {
    return (
      <Card className="shadowCard mt-4">
        <h3 className="mb-4 mt-2 mx-auto">Inicio de Sesión</h3>

        <Card.Body>
          {/* Formulario de inicio de sesion */}
          <Form>
            {/* Nombre de usuario */}
            <Form.Group controlId="txtName" onChange={this.onChangeUsuario}>
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre de usuario"
                required
              />
            </Form.Group>

            {/* Contraseña */}
            <Form.Group controlId="txtPasswd" onChange={this.onChangeClave}>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                required
              ></Form.Control>
            </Form.Group>
            <this.submitButton
              inicioSesion={this.props.inicioSesion}
              onSubmit={this.onSubmit}
            />
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
