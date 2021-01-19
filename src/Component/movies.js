import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class movies extends Component {

  static defaultProps ={
    name: 'No Info', 
    year: 'No info',  
    imdb: 'No info',
    image:'No info',
}
  render() {
    const { name, year, imdb, image} = this.props;
    return (
      <div>
        <Card
          style={{
            width: "20rem",
            margin: "10px 15px",
          }}
        >
          <Card.Img
            variant="top"
            src={image}
            style={{ width: "100%", height: "350px" }}
          />
          <Card.Body>
            <Card.Title className="font-weight-bolder">{name}</Card.Title>
            <Card.Text>
              Year: {year}
              <br />
              Rating: {imdb}
              <br />
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
            </Card.Text>
            <Button variant="primary">Trailer</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
