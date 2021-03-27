// IMPORTS

import React from 'react';
import '../../styles/components/main/main/main.css';
import '../../styles/components/main/grid/grid.css';
import Menu from '../menu';
import Picture from './picture';
import Spinner from './spinner';
import { contentArray, menuOptions } from '../../index';


// GLOBALS

let scrollY = 0;


// COMPONENT

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpened: false,
      isLoaded: false,
      isPhotoModeEnabled: this.props.mode,
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.menuClose = this.menuClose.bind(this);
    this.menuOpen = this.menuOpen.bind(this);
    this.linkToId = this.linkToId.bind(this);
    this.spinnerFunction = this.spinnerFunction.bind(this);
  }

  bodyFreezer(isMenuOpened) {
    const body = document.querySelector("body");

    if (isMenuOpened) {
      scrollY = document.documentElement.scrollTop;
      
      // BODY FREEZING
      body.style.cssText = `
        top: ${-(document.documentElement.scrollTop)}px;
        position: fixed`;
    }
    else {

      // BODY POSITION CORRECTING
      body.style.cssText = `
        top: ${-(document.documentElement.scrollTop)}px;
        position: static`;
  
      window.scroll(0, scrollY);
    }
  }

  menuDisplayChanger(isMenuOpened) {
    const menuContainer = document.querySelector(".menu");
    
    if (isMenuOpened) {
      menuContainer.style.cssText = `
        top: ${-(document.documentElement.scrollTop)}px;
        display: flex`;
    }

    else {
      menuContainer.style.cssText = `
        top: ${-(document.documentElement.scrollTop)}px;
        display: none`;
    }
  }
  
  menuIconTransformer(isMenuOpened) {
    const menuIcon = document.querySelector('.main__menu-icon');
    const menuIconBars = menuIcon.children;
  
    if (isMenuOpened) {
      menuIconBars[0].style.cssText = `
        width: 100%;
        top: 50%;
        transform: rotate(-45deg);
        background: #828282`;
  
      menuIconBars[1].style.cssText = `
        opacity: 0`;
  
      menuIconBars[2].style.cssText = `
        width: 100%;
        top: 50%;
        transform: rotate(45deg);
        background: #828282`;
    }

    else {
      menuIconBars[0].style.cssText = `
        width: 100%;
        transform: rotate(0deg);
        background: #FFFFFF`;
  
      menuIconBars[1].style.cssText = `
        opacity: 1`;
  
      menuIconBars[2].style.cssText = `
        width: 25%;
        transform: rotate(0deg);
        background: #FFFFFF`;
    }
  }
  
  menuIconTransition(isMenuOpened) {
    const menuIcon = document.querySelector('.main__menu-icon');
    const menuIconBars = menuIcon.children;
  
    const handleMouseOver = () => {
      menuIconBars[0].style.cssText =
      `width: 40%`;
      menuIconBars[1].style.cssText =
      `width: 100%`;
      menuIconBars[2].style.cssText =
      `width: 55%`;
    }

    const handleMouseOut = () => {
      menuIconBars[0].style.cssText =
      `width: 100%`;
      menuIconBars[1].style.cssText =
      `width: 60%`;
      menuIconBars[2].style.cssText =
      `width: 25%`;
    }
  
    if (isMenuOpened) {
      menuIcon.addEventListener("mouseover", handleMouseOver);
      menuIcon.addEventListener("mouseout", handleMouseOut);
    }

    else {
      menuIcon.removeEventListener("mouseover", handleMouseOver);
      menuIcon.removeEventListener("mouseout", handleMouseOut);
    }
  }

  spinnerFunction() {
    setTimeout(() => { this.setState({ isLoaded: !this.state.isLoaded }) }, 600);
    document.querySelector("#top").scrollIntoView();
  }

  menuClose() {
    this.menuIconTransformer(false);
    this.menuDisplayChanger(false);
    this.bodyFreezer(false);
  }
  
  menuOpen() {
    this.menuIconTransformer(true);
    this.menuDisplayChanger(true);
    this.bodyFreezer(true);
  }

  handleMenu() {
    const menu = document.querySelector(".menu");
    const menuIcon = document.querySelector('.main__menu-icon');

    if (this.state.isMenuOpened === true) {
      menu.classList.add("menu--animate");
      menu.classList.remove("menu--animateOpening");
      menu.classList.add("menu--animateClosing");

      // COOLDOWN BEFORE NEXT CLICK
      menuIcon.style.pointerEvents = "none";
      menu.children[0].style.pointerEvents = "none";
      menu.children[1].style.pointerEvents = "none";

      this.menuIconTransformer(false);
      this.bodyFreezer(false);
      
      setTimeout(() => { 
        this.menuDisplayChanger(false);
        this.setState({isMenuOpened: false});

        menuIcon.style.pointerEvents = "auto";
        menu.children[0].style.pointerEvents = "auto";
        menu.children[1].style.pointerEvents = "auto";
      }, 400);
    }

    else {
      this.setState({isMenuOpened: true});

      menu.classList.remove("menu--animate");
      menu.classList.remove("menu--animateClosing");
      menu.classList.add("menu--animateOpening");

      this.menuIconTransformer(true);
      this.bodyFreezer(true);
      this.menuDisplayChanger(true);
    }
  }

  componentDidMount() {
    this.menuIconTransformer(false);
  }

  linkToId(e) {
    let container;

    if (e.target.innerText.toLowerCase() !== "featured")
      container = document.querySelector("#" + e.target.innerText.toLowerCase());
    else
      container = document.querySelector("#top");

    this.menuClose();
    this.setState({isMenuOpened: !this.state.isMenuOpened});

    container.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <main className="main">

        <Menu exit={this.handleMenu} linkTo={this.linkToId} isPhotoModeEnabled={ this.props.isPhotoModeEnabled } />

        { this.state.isLoaded ? null : <Spinner loaded={ this.spinnerFunction } /> }

        <button className="main__menu-icon" onClick={this.handleMenu} href="">
          <span className="main__menu-icon__top-bar"></span>
          <span className="main__menu-icon__middle-bar"></span>
          <span className="main__menu-icon__bottom-bar"></span>
        </button>

        <section className="main__grid">

          { // RENDERING WORKS
            contentArray[ this.props.isPhotoModeEnabled ? 'photos' : 'artworks' ].map((content, index) => {
              return (
                
                <div id={ index + 1 } className={ this.props.isPhotoModeEnabled ? "main__grid__item__photo" : "main__grid__item__artwork" }>
                  <Picture type={ this.props.isPhotoModeEnabled ? 'photos' : 'artworks' } data={ index } />            
                </div>

              )
            })
          }

          { // RENDERING CATEGORIES
            menuOptions[ Number(this.props.isPhotoModeEnabled) ].map(content => {
              return (
                
                <div className={ this.props.isPhotoModeEnabled ? "main__grid__item__photo" : "main__grid__item__artwork" }>
                  <h2 className="main__grid__item__title" id={ content.toLowerCase() }>{ content }</h2>
                </div>

              )
            })
          }

        </section>
      
      </main>
    );
  }
}


// EXPORTING COMPONENT

export default Main;