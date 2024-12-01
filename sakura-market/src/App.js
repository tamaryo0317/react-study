import React from 'react';
import './App.css';
import SAKURA from './components/SAKURA';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      user: 'app',
      headerMessage: 'this is a header message.'
    };
  }
  render() {
    return (
      <>
      <h1>これはAppです</h1>
      <div>
        isLogin: {this.state.isLogin.toString()}<br></br>
        user: {this.state.user}<br></br>
        headerMessage: {this.state.headerMessage}<br></br>
      </div>
      <hr></hr>
      <SAKURA {...this.state}/>
      </>
    );
  }
  
}

export default App;
