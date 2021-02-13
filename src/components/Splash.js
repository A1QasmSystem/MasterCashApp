import React, {Component} from 'react';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';
import Navigator from '../router/Navigator';

class Splash extends Component {
  constructor() {
    super();
    this.state = {role: true};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({role: false});
    }, 500);
  }

  render() {
    if (this.state.role) {
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../assets/login/white.jpg')}
            style={styles.viewMain}></ImageBackground>
        </View>
      );
    } else {
      return <Navigator />;
    }
  }
}

const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Splash;
