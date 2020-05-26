import React, { Component } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Routes from './routes';

export default class App extends Component {
  state = {
    appIsReady: false,
    initalRoute: 'Login'
  }

  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync()
      this.prepareResources();
    } catch (error) {
      console.warn(error);
    }
  }

  prepareResources = async () => {
    setTimeout(() => {
      this.setState({ appIsReady: true }, async () => {
        await SplashScreen.hideAsync();
      });
    }, 3000);
  }
  render() {
    const { appIsReady, initalRoute } = this.state;

    if(!appIsReady)
      return null;

    return (
      <Routes initialRoute={initalRoute} />
    );
  }
}