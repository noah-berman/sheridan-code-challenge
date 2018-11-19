import React, { Component } from 'react';
import { FaArrowAltCircleDown } from "react-icons/fa";

import NavBar from '../Components/NavBar.js'
import SearchContainer from '../Containers/SearchContainer.js'

class Top extends Component {
  render() {
    return (
        <section id="TopSection">
          <div className="Top">
            <NavBar />
            <h1>Get a website in <br></br>
              15 minutes <span className="green">or less</span></h1>
            <SearchContainer />
            <p>LEARN HOW WE CAN ENHANCE YOUR BUSINESS</p>
            <p className="scrolldown" id="scroll-arrow">
              <a className="smoothscroll" href="#about">
                <div style={{color: '#81d398'}}>
                  <FaArrowAltCircleDown size={64} />
                </div>
              </a>
            </p>
          </div>
        </section>
    );
  }
}

export default Top;
