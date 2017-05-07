// @flow

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './Home';

// Needed for onTouchTap.
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


export default class App extends Component {
  // state = {
  //   val: 42,
  // }

  // onChange = (e: Event & { currentTarget: HTMLInputElement }) => {
  //   this.setState({ val: parseInt(e.currentTarget.value, 10) });
  // }

  render() {
    return (
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    );
  }
}
