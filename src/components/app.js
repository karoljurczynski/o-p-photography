// IMPORTS

import React from 'react';
import '../styles/components/app/app.css';
import Header from './header';
import Main from './main/main';
import Footer from './footer';


// COMPONENT

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPhotoModeEnabled: true };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(newState) {
    this.setState({isPhotoModeEnabled: newState})
  }
  
  render() {
    return (
      
      <div className="wrapper">

        <div id="top"></div>
        <Header changeMode={ this.changeMode } />
        <Main isPhotoModeEnabled={ this.state.isPhotoModeEnabled } />
        <Footer />

      </div>
    );
  }
}


// EXPORTING COMPONENT

export default App;