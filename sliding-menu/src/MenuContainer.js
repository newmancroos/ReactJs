import React, { Component } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    //this.handleMosueDown = this.handleMosueDown.bind(this);
  }

  toggleMenu() {
    this.setState({ visible: !this.state.visible });
  }
  //   handleMosueDown(e) {
  //     this.toggleMenu();
  //     console.log("Clicked");
  //     //e.stopPropagation();
  //   }
  render() {
    return (
      <div>
        <MenuButton handleMosueDown={this.toggleMenu} />
        <Menu
          handleMosueDown={this.toggleMenu}
          menuVisibility={this.state.visible}
        />
        <div>
          <p>Can you spot the item that doesn't blong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Dumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MenuContainer;
