import React, { Component } from 'react'

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


export default class navbar extends Component {

  render() {

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">IMDB</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Featured Movies</Nav.Link>
            <Nav.Link href="#pricing">Rating</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <h1 className='text-center text-danger' >TOP RATED MOVIES</h1>
      </div>

    )
  }
}


