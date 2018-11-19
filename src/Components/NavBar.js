import React from "react";
import NavButton from "./NavButton";

class NavBar extends React.Component {
  state = {
    active: "home"
  };

  componentDidMount() {
    const location = window.location.href;
    const currentPage = location.split("/").pop();
    this.setState({
      active: currentPage
    });
  }

  handleClick = id => {
    if (this.state.active !== id) {
      this.setState({
        active: id
      });
    }
  };

  renderActive = buttonId => {
    if (this.state.active === buttonId) {
      return "yes";
    } else {
      return "no";
    }
  };

  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-bar-container">
          <NavButton
            id="left"
            buttonText="MyWebNow"
          />
          <NavButton
            handleClick={() => this.handleClick("Home")}
            active={this.renderActive("Home")}
            id="Home"
            buttonText="Home"
          />
          <NavButton
            handleClick={() => this.handleClick("Why Us")}
            active={this.renderActive("Why Us")}
            id="Why Us"
            buttonText="Why Us"
          />
          <NavButton
            handleClick={() => this.handleClick("Contact Us")}
            active={this.renderActive("Contact Us")}
            id="Contact Us"
            buttonText="Contact Us"
          />
          <NavButton
            handleClick={() => this.handleClick("Login")}
            active={this.renderActive("Login")}
            id="Login"
            buttonText="Login"
          />
          <NavButton
            handleClick={() => this.handleClick("Support")}
            active={this.renderActive("Support")}
            id="Support"
            buttonText="Support"
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
