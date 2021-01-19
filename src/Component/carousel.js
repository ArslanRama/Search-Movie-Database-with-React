import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

// Slides
import Slide1 from '../images/slide1.jpg';
import Slide2 from '../images/slide2.jpeg';
import Slide3 from '../images/slide3.jpg';

export default class carousel extends Component {

  render() {
    let myStyle = {
      color: "#7D7D7D",
    };
    return (
      <div>
        <Carousel
          style={{
            height: "500px",
            width: "100%",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-80 mx-auto"
              src={Slide1}
              alt="First slide"
              style={{
                height: "400px",
              }}
            />{" "}
            <Carousel.Caption className="mt-5 text-success">
              <h3 style={myStyle}> Top IMDB Movies</h3>{" "}
              <p style={myStyle}>
                Nulla vitae elit libero, a pharetra augue mollis interdum.{" "}
              </p>{" "}
            </Carousel.Caption>{" "}
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img
              className="d-block w-80 mx-auto text-light"
              src={Slide2}
              alt="Third slide"
              style={{
                height: "400px",
              }}
            />
            <Carousel.Caption className="mt-5">
              <h3 style={myStyle}> Top IMDB Movies</h3>{" "}
              <p style={myStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>{" "}
            </Carousel.Caption>{" "}
          </Carousel.Item>{" "}
          <Carousel.Item>
            <img
              className="d-block w-80 mx-auto"
              src={Slide3}
              alt="Third slide"
              style={{
                height: "400px",
              }}
            />
            <Carousel.Caption className="mt-5">
              <h3 style={myStyle}> Top IMDB Movies </h3>{" "}
              <p style={myStyle}>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.{" "}
              </p>{" "}
            </Carousel.Caption>{" "}
          </Carousel.Item>{" "}
        </Carousel>{" "}
      </div>
    );
  }
}
