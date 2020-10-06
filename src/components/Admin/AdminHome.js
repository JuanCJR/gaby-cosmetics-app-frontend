import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import InventoryService from "../../services/inventoryService";
export default class AdminHome extends Component {
  state = {
    products: [],
    inventoryService: new InventoryService(),
  };

  render() {
    return (
      <Card className="mt-4" style={{height:"38rem"}}>
        <Card.Header>
          <Card.Title>Administración</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive="sm">
            <thead>
              <td>
                <th>Codigo Producto</th>
                <th>Categoria</th>
                <th>Sub-Categoria</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>En Oferta</th>
                <th>Precio Oferta</th>
              </td>
            </thead>
          </Table>
        </Card.Body>
      </Card>
    );
  }
}
