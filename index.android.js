/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/App';

export default class demo_app extends Component {
  render() {
    return (
      <App />
    );
  }
}



AppRegistry.registerComponent('demo_app', () => demo_app);
