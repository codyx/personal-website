// @flow

import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './Home';

// Needed for onTouchTap.
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class App extends Component {
  state = {
    theme: 'light',
  }

  toggleLightSwitch = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' }, () => {
      if (document && document.body && document.body.style) {
        document.body.style.backgroundColor = this.state.theme === 'light' ? '#fff' : '#000';
        document.body.style.color = this.state.theme === 'light' ? '#000' : '#fff';
      }
    });
  }

  render() {
    const theme = createMuiTheme({
      palette: createPalette({
        type: this.state.theme,
      }),
    });
    return (
      <MuiThemeProvider theme={theme}>
        <Home toggleLightSwitch={this.toggleLightSwitch} theme={this.state.theme} />
      </MuiThemeProvider>
    );
  }
}
