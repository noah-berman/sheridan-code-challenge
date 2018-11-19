import React from "react";

class NavButton extends React.Component {
  renderClassName = () => {
    if (this.props.active === "yes") {
      return "nav-button active";
    } else {
      return "nav-button";
    }
  };

  render() {
    return (
      <div
        onClick={this.props.handleClick}
        onHover={this.props.handleClick}
        id={this.props.id}
        className={this.renderClassName()}
      >
        {this.props.buttonText}
      </div>
    );
  }
}

export default NavButton;
