// IMPORTS

import React from 'react';
import '../styles/components/menu/menu.css';
import { menuOptions } from '../index';


// COMPONENT

class Menu extends React.Component {
  menuItemTransition() {
    const menuItems = document.querySelectorAll(".menu__list__item__content");
  
    menuItems.forEach((element) => {
  
      element.addEventListener("mouseover", () => {
        menuItems.forEach((el) => {el.style.color = "gray"})
        element.style.color = "white";
      });
  
      element.addEventListener("mouseout", () => {
        menuItems.forEach((el) => {el.style.color = "white"})
      });
    });
  }

  componentDidMount() {
    setTimeout(() => {this.menuItemTransition()}, 500);
  }

  render() {
    return (
      <nav className="menu">

        <div className="menu__exit" onClick={this.props.exit}></div>

        <ul className="menu__list">

          {
            menuOptions[Number(this.props.isPhotoModeEnabled)].map(option => {
               return (

                <li className="menu__list__item">
                  <button className="menu__list__item__content" onClick={this.props.linkTo}>{option}</button>
                </li>

               )
            })
          }

        </ul>

      </nav>
    );
  }
}


// EXPORTING COMPONENT

export default Menu;