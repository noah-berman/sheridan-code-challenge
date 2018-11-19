import React, { Component } from 'react';
import { IoIosMail } from "react-icons/io";
import { FaFacebookSquare, FaYoutube, FaTwitter, FaPhone } from "react-icons/fa";
import { GoLocation } from "react-icons/go"

class Footer extends Component {
  render() {
    return (
        <section id="FooterSection">
          <div className="Footer">
            <div className="footer-wrapper">
              <div className="footer-item">
                <p>
                  <FaPhone size={20} />
                   &nbsp; + 1-800 WEBSITE
                </p>
                <p>
                  <IoIosMail size={20} />
                  &nbsp; <a href="mailto:hello@webnow.com">hello@mywebnow.com</a>
                </p>
                <p>
                  <GoLocation size={20} />
                  &nbsp; <a id="golocation"
                    href="https://www.google.com/maps/place/1+Main+St,+New+York,+NY+10044/@40.7547909,-73.958466,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258def46a722f:0x5222f857589ca759!8m2!3d40.7547869!4d-73.9562773">
                    1 Main Street <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Floor 6, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New York, NY 10005
                  </a>
                </p>
              </div>
              <div className="footer-item">
                <p><span className="bold">Company</span></p>
                <p><a href="random.cat">About us</a></p>
                <p><a href="random.cat">News</a></p>
                <p><a href="random.cat">FAQ</a></p>
                <p><a href="random.cat">Contact us</a></p>
              </div>
              <div className="footer-item">
                <p><span className="bold">Services</span></p>
                <p><a href="random.cat">Web Hosting</a></p>
                <p><a href="random.cat">Cloud Hosting</a></p>
                <p><a href="random.cat">VPS Servers</a></p>
                <p><a href="random.cat">Domain Names</a></p>
              </div>
              <div className="footer-item">
                <p><span className="bold">Others</span></p>
                <p><a href="random.cat">Transfer Domains</a></p>
                <p><a href="random.cat">Customer Portal</a></p>
                <p><a href="random.cat">Support Portal</a></p>
                <p><a href="random.cat">Video Tutorials</a></p>
              </div>
              <div className="footer-item-icon">
                <p style={{color: '#5b58b2'}}>
                  <FaFacebookSquare size={40} id="facebook" />
                </p>
                <p style={{color: '#5b58b2'}}>
                  <FaYoutube size={40} id="youtube"/>
                </p>
                <p style={{color: '#5b58b2'}}>
                  <FaTwitter size={40} id="twitter"/>
                </p>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Footer;
