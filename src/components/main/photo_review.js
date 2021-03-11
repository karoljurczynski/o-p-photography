import React from 'react';

import '../../styles/components/main/photo_review/photo_review.css';
import { photosArray } from './main.js';

const reviewButtonsTransition = () => {
  const buttons = [document.querySelector('.photo-review__previous'), document.querySelector('.photo-review__next')];
  
  buttons.forEach(element => {

    element.addEventListener("mouseover", () => {
      element.children[0].style.backgroundColor = "#FFFFFF";
      element.children[1].style.backgroundColor = "#FFFFFF";
    });

    element.addEventListener("mouseout", () => {
      element.children[0].style.backgroundColor = "#828282";
      element.children[1].style.backgroundColor = "#828282";
    });

  });
}

class PhotoReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      src: this.props.src,
      alt: this.props.alt,
      title: this.props.title,
      width: this.props.style.width,
      height: this.props.style.height
    };

    this.handleNextPhoto = this.handleNextPhoto.bind(this);
    this.handlePreviousPhoto = this.handlePreviousPhoto.bind(this);
    this.calcPhotosSizes = this.calcPhotosSizes.bind(this);
  }

  exitIconTransformer(isReviewOpened) {
    const exitIcon = document.querySelector('.photo-review__exit');
    const exitIconBars = exitIcon.children;
  
    if (isReviewOpened) {
      exitIconBars[0].style.cssText = `
        width: 100%;
        top: 50%;
        transform: rotate(-45deg);
        background: #828282`;
  
      exitIconBars[1].style.cssText = `
        opacity: 0`;
  
      exitIconBars[2].style.cssText = `
        width: 100%;
        top: 50%;
        transform: rotate(45deg);
        background: #828282`;
    }
    else {
      exitIconBars[0].style.cssText = `
        width: 100%;
        top: 0;
        transform: rotate(0deg);
        background: #FFFFFF`;
  
      exitIconBars[1].style.cssText = `
        opacity: 1`;
  
      exitIconBars[2].style.cssText = `
        width: 25%;
        top: 20px;
        transform: rotate(0deg);
        background: #FFFFFF`;
    }
  }
  
  calcPhotosSizes() {
    if (window.innerWidth < 480) {
      if (this.state.width > this.state.height) {
        this.setState({width: "100%", height: "50%"});
      }
      if (this.state.width === this.state.height) {
        this.setState({width: "100%", height: "100vw"});
        document.querySelector('.photo-review').style.alignItems = "flex-start"; 
      }
      else {
        this.setState({width: "100%", height: "100%"});
        document.querySelector('.photo-review').style.alignItems = "flex-start";
      }
    }
  }

  handleNextPhoto() {
    this.setState({
      id: this.state.id + 1,
      src: photosArray[this.state.id + 1].src,
      title: photosArray[this.state.id + 1].title,
      alt: photosArray[this.state.id + 1].alt,
      width: photosArray[this.state.id + 1].width,
      height: photosArray[this.state.id + 1].height
    });
  }

  handlePreviousPhoto() {
    this.setState({
      id: this.state.id - 1,
      src: photosArray[this.state.id - 1].src,
      title: photosArray[this.state.id - 1].title,
      alt: photosArray[this.state.id - 1].alt,
      width: photosArray[this.state.id - 1].width,
      height: photosArray[this.state.id - 1].height
    });
    
  }

  firstPhotoChecker() {
    const previousButton = document.querySelector(".photo-review__previous");
    if (Number(this.state.id) === 0)
      previousButton.style.display = "none";
    else
      previousButton.style.display = "block";
  }

  lastPhotoChecker() {
    const nextButton = document.querySelector(".photo-review__next");
    if (Number(this.state.id) === photosArray.length - 1)
      nextButton.style.display = "none";
    else
      nextButton.style.display = "block";
  }
  
  animatePhotoChange() {
    const photoReviewChildren = document.querySelector(".photo-review").children;
    
    /*  
      0 - previous
      1 - photo
      2 - title
      3 - next
      4 - exit 
    */

    if (photoReviewChildren[1].classList.contains("photo-review__picture--animate")) {
      photoReviewChildren[1].style.opacity = "0";
      photoReviewChildren[2].style.opacity = "0";
      photoReviewChildren[1].classList.remove("photo-review__picture--animate");
      photoReviewChildren[2].classList.remove("photo-review__title--animate");
    }

    setTimeout(() => { 
      photoReviewChildren[1].classList.add("photo-review__picture--animate");
      photoReviewChildren[2].classList.add("photo-review__title--animate");
    }, 100);
  }

  componentDidMount() {
    reviewButtonsTransition();
    this.firstPhotoChecker();
    this.lastPhotoChecker();
    this.animatePhotoChange();
    setTimeout(() => {this.exitIconTransformer(true)}, 10);
  }

  componentDidUpdate() {
    this.firstPhotoChecker();
    this.lastPhotoChecker();
    this.animatePhotoChange();
  }

  render() {
    return (
      <div className="photo-review">
        <button className="photo-review__previous" onClick={this.handlePreviousPhoto}>
          <span className="photo-review__previous__top-bar"></span>
          <span className="photo-review__previous__bottom-bar"></span>
        </button>

        <img 
          className="photo-review__picture" 
          src={this.state.src}
          alt={this.state.alt}
          id={this.state.id}>
        </img>

        <h3 
          className="photo-review__title" >
          {this.state.title ? this.state.title : ""}
        </h3>

        <button className="photo-review__next" onClick={this.handleNextPhoto}>
          <span className="photo-review__next__top-bar"></span>
          <span className="photo-review__next__bottom-bar"></span>
        </button>

        <button className="photo-review__exit" onClick={this.props.onClosed}>
          <span className="photo-review__exit__top-bar"></span>
          <span className="photo-review__exit__middle-bar"></span>
          <span className="photo-review__exit__bottom-bar"></span>
        </button>

      </div>
    );
  }
}
export default PhotoReview;