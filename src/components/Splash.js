import React, {Component} from 'react';
import {View, Image, StyleSheet, ImageBackground} from 'react-native';
import Login from '../auth/Login';

class Splash extends Component {
  constructor() {
    super();
    this.state = {role: true};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({role: false});
    }, 5000);
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
      return <Login />;
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

// ==================================================
// import React, {Component} from 'react';
// import {Text, View, Image, StyleSheet} from 'react-native';
// import Login from '../auth/Login';

// class Splash extends Component {
//   constructor() {
//     super();
//     (this.componentDidMount = function () {
//       console.log('ini dari didcomponent');
//       setTimeout(() => {
//         this.setState({
//           role: false,
//         });
//       }, 5000);
//     }),
//       (this.componentDidUpdate = function () {
//         console.log('ini dari DidUpdate');
//       });
//   }
//   state = {
//     role: true,
//   };
//   splash = () => {
//     if (this.state.role) {
//       return (
//         <View
//           style={{
//             height: '100%',
//             width: '100%',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: 'black',
//           }}>
//           <Image
//             source={require('../assets/iconig.png')}
//             style={{
//               width: 200,
//               height: 200,
//               marginTop: 170,
//               alignSelf: 'center',
//               // tintColor: "white",
//             }}
//           />
//           <Text
//             style={{
//               // margin: 20,
//               marginTop: '50%',
//               color: 'white',
//               // textAlign: "center",
//               fontSize: 20,
//               fontWeight: 'bold',
//               alignSelf: 'center',
//             }}>
//             From
//           </Text>
//           <Text
//             style={{
//               marginTop: 0,
//               color: 'white',
//               // textAlign: "center",
//               fontSize: 20,
//               fontWeight: 'bold',
//               alignSelf: 'center',
//               color: 'red',
//             }}>
//             Facebook
//           </Text>
//         </View>
//       );
//     }
//   };

//   render() {
//     if (this.state.role) {
//       return <View style={{flex: 1}}>{this.splash()}</View>;
//     } else {
//       return <Login />;
//     }
//   }
// }
// export default Splash;
