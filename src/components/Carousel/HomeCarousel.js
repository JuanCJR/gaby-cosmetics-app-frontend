import React, { Component, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card,Image  } from "react-bootstrap";
export default class HomeCarousel extends Component {
  render() {
    return (
      <Card className="mt-3 carousel-div shadowCard">
        <Card.Body>
          <this.controlledCarousel />
        </Card.Body>
      </Card>
    );
  }

  controlledCarousel = (props) => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel
        style={{ color: "black" }}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <Image
          rounded
            style={{ height: "23rem", widht: "20rem" }}
            className="d-block mx-auto"
            src="img/item1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
          rounded
            style={{ height: "23rem", widht: "20rem" }}
            className="d-block mx-auto"
            src="img/item2.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
          rounded
            style={{ height: "23rem", widht: "20rem" }}
            className="d-block mx-auto"
            src="img/item3.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
          rounded
            style={{ height: "23rem", widht: "20rem" }}
            className="d-block mx-auto"
            src="img/item4.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
          rounded
            style={{ height: "23rem", widht: "20rem" }}
            className="d-block mx-auto"
            src="img/item5.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };
}
