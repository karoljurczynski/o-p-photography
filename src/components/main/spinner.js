// IMPORTS

import React from 'react';
import '../../styles/components/main/spinner/spinner.css';


// COMPONENT

class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
    this.loading = this.loading.bind(this);
  }

  loading() {
    this.setState({ isLoaded: true });
    this.props.loaded();
  }

  componentDidMount() {
    window.addEventListener("load", this.loading);
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.loading);
    this.setState({ isLoaded: false });
  }

  render() {
    return (
      <div className={ this.state.isLoaded ? "spinner spinner--animate-exit" : "spinner" }>
        <div className={ this.state.isLoaded ? "spinner__item spinner__item--animate-exit" : "spinner__item" }></div>
      </div>
    );
  } 
}

// EXPORTING COMPONENT

export default Spinner;