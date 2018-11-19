import React, { Component, Fragment } from 'react';

import CreateAccountButton from '../Components/CreateAccountButton.js'
import ContactUsButton from '../Components/ContactUsButton.js'

class Main extends Component {
  render() {
    return (
        <section id="MainSection">
          <div className="Main">
            <div className="text-container">
              <div className="inside-text">Sheridan is the best! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id hendrerit ante. Nullam varius ex sodales libero rutrum facilisis ut vel est.</div>
            </div>
            <CreateAccountButton />
            <h2>Our Services</h2>
            <hr />

            <div className="card-container">

              <div className="ui card">
                <div className="row">
                  <div class="column">
                    <img
                      src="https://clarkcenter.org/wp-content/uploads/2018/01/internet-clipart-icon-black-1024x1024.png" class="ui image" align="left" height="150px" width="200px"/>
                  </div>
                  <div className="column">
                    <div class="header">
                      WEB HOSTING ➡
                    </div>
                    <div className="description">
                      Bring to the table win-win survival strategies to ensure proactive domination.
                    </div>
                  </div>
                </div>
              </div>

              <div className="ui card">
                <div className="row">
                  <div class="column">
                    <img
                      src="https://openclipart.org/download/289121/1509009405.svg" class="ui image" align="left" height="150px" width="200px"/>
                  </div>
                  <div className="column">
                    <div class="header">
                      RESELLERS ➡
                    </div>
                    <div className="description">
                      Please consider Noah Berman for the front-end engineer role!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-container">

              <div className="ui card">
                <div className="row">
                  <div class="column">
                    <img
                      src="https://openclipart.org/image/2400px/svg_to_png/180867/1373811890.png" class="ui image" align="left" height="150px" width="200px"/>
                  </div>
                  <div className="column">
                    <div class="header">
                      VPS HOSTING ➡
                    </div>
                    <div className="description">
                      Your very own Virtual Private Server!
                    </div>
                  </div>
                </div>
              </div>

              <div className="ui card">
                <div className="row">
                  <div class="column">
                    <img
                      src="https://melbournechapter.net/images/clipart-cloud-clipart-3.png" class="ui image" align="left" height="150px" width="200px"/>
                  </div>
                  <div className="column">
                    <div class="header">
                      CLOUD HOSTING ➡
                    </div>
                    <div className="description">
                      There is a castle on a cloud / I like to go there in my sleep / Aren't any floors for me to sweep / Not in my castle on a cloud
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ready-container">
              <p id="left"><span id="light-purple">Are you ready? </span> <br />
              <span id="dark-purple">create an account, or contact us. </span></p>
              <CreateAccountButton />
              <ContactUsButton />
            </div>
          </div>
        </section>
    );
  }
}

export default Main;
