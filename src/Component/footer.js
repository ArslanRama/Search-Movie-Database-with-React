import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export default class footer extends Component {
  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Header className="font-weight-bold">
            Hello World
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="secondary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
