// import React, {Component} from 'react';
// import {Text, StyleSheet, View} from 'react-native';

// export default class AddMember extends Component {
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View style={{backgroundColor: 'red', flex: 1}}>
//           <Text> textInComponent </Text>
//         </View>
//         <View style={{backgroundColor: 'blue', flex: 1}}>
//           <Text> textInComponent </Text>
//         </View>
//         <View style={{backgroundColor: 'green', flex: 1}}>
//           <Text> textInComponent </Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({});
// #####################################################################################

import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ToastAndroid,
} from 'react-native';

class AddMember extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      data: [],
      // user: '',
      user: {},
      loading: false,
    };
  }

  alert() {
    Alert.alert(
      'Sukses',
      'Registrasi berhasil',
      [
        {
          text: 'Ok',
          onPress: () => console.log('Cancel Pressed'),
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/login/green.png')}
          style={styles.mainView}>
          <View style={styles.header}>
            <View
              // source={require('../assets/headerProfile.png')}
              style={styles.headerBg}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/back-arrow.png')}
                  style={styles.headerIcon}
                />
              </TouchableOpacity>
              {/* <Text style={styles.headerText}>Nama Nasabah.</Text> */}

              <Text style={styles.headerText}>
                {/* Halo, {this.state.user.name}. */}
              </Text>

              <TouchableOpacity>
                <Image
                  source={require('../assets/settings-cogwheel-button.png')}
                  style={styles.headerIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.viewLogin}>
            <Text style={styles.text}> Register Member</Text>
            <View style={styles.viewInput}>
              <Image
                source={require('../assets/round-account-button-with-user-inside.png')}
                style={styles.icon}
              />
              <TextInput
                style={{flex: 1}}
                placeholder="Nama"
                onChangeText={(input) => this.setState({name: input})}
              />
            </View>
            <View style={styles.viewInput}>
              <Image
                source={require('../assets/phone-working-indicator.png')}
                style={styles.icon}
              />
              <TextInput
                keyboardType={'number-pad'}
                style={{flex: 1}}
                placeholder="Nomor Handphone"
                onChangeText={(input) => this.setState({email: input})}
              />
            </View>
            <View style={styles.viewInput}>
              <Image
                source={require('../assets/memory-chip.png')}
                style={styles.icon}
              />
              <Text
                style={{flex: 1}}
                onChangeText={(input) => this.setState({password: input})}
                secureTextEntry={true}>
                Input Kode
              </Text>
            </View>
            <View style={styles.viewInput}>
              <Image
                source={require('../assets/rounded-add-button.png')}
                style={styles.icon}
              />
              <TextInput
                keyboardType={'number-pad'}
                style={{flex: 1}}
                placeholder="Isi Saldo"
                onChangeText={(input) => this.setState({email: input})}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Dashboard')}>
              {this.state.loading ? (
                <LottieView
                  source={require('../assets/lottie/890-loading-animation.json')}
                  autoPlay={true}
                  style={{width: 60, height: 60}}
                />
              ) : (
                <View style={styles.viewTextLogin}>
                  <Text style={styles.textLogin}>Sign up</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    // justifyContent: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  viewLogin: {
    width: '95%',
    backgroundColor: '#ffffff',
    elevation: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 40,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: '#4EC5F1',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  viewInput: {
    flexDirection: 'row',
    height: 50,
    width: 300,
    backgroundColor: '#0000001a',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    // borderRightColor: '#000000',
    // borderRightWidth: 1,
  },
  textRegister: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subText: {
    fontWeight: 'bold',
    color: '#8f8f8f',
  },
  viewTextLogin: {
    width: 160,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c9b8d',
    marginTop: 10,
    borderRadius: 10,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  header: {
    // backgroundColor: '#4c9b8d',
    alignItems: 'center',
    marginTop: -80,
    marginBottom: '32%',
  },
  headerBg: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    resizeMode: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 15,
    flex: 1,
  },
  headerIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
});

export default AddMember;
