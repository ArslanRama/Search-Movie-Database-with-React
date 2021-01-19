import React, { Component } from 'react'

// Components
import Navbar from './Component/navbar';
import Movies from './Component/movies';
import Footer from './Component/footer';
import Carousel from "./Component/carousel";

// Images
import Image1 from './images/img1.png';
import Image2 from './images/img2.jpg';
import Image3 from './images/img3.jpg';
import Image4 from './images/img4.jpg';




export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div className="App">
      <Carousel></Carousel>
      {/* Phone Models */}
      <div className="container-fluid">
        <div className="row mx-auto justify-content-center">
        <Movies
            name='Forrest Gump'
            year='1994'
            imdb='9.2'
            image={Image1}/>

          <Movies
            name='Pulp Fiction'
            year='1972'
            imdb='9.1'
            image={Image2}/>

          <Movies
            name='The Dark Knight'
            year='2008'
            imdb='9.0'
            image={Image3}/>

          <Movies
            name='12 Angry Men'
            year='1957'
            imdb='8.9'
            image={Image4}/>

          <Movies
            name='Schindlers List'
            imdb='8.9'/>
        </div>
      </div>
      <div className="container my-5">
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
      </div>
    )
  }
}

