// import React, {Component} from 'react';
// import {Text, StyleSheet, View} from 'react-native';

// export default class listMember extends Component {
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
// #########################################################################################################################

// import AsyncStorage from '@react-native-community/async-storage';
// import LottieView from 'lottie-react-native';
import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ShadowPropTypesIOS,
  TouchableOpacity,
} from 'react-native';

class ListMember extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      data: [],
      data: '',
    };
    // AsyncStorage.getItem('token').then((value) => {
    //   if (value != null) {
    //     this.setState({token: value});
    //     console.log('Token tersedia');
    //     this.getUser();
    //   } else {
    //     console.log('Token tidak ada');
    //   }
    // });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/login/wood.png')}
          style={styles.mainView}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backHeader}>
              <Image
                source={require('../assets/back-arrow.png')}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <Image
              source={require('../assets/users-social-symbol.png')}
              style={styles.headerIcon}
            />
            <Text style={styles.headerText}>Users</Text>
            <TouchableOpacity style={styles.settingHeader}>
              <Image
                source={require('../assets/settings-cogwheel-button.png')}
                style={styles.settingIcon}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {/* <View style={styles.viewLoading}>
            <LottieView
              autoPlay
              style={{width: 120}}
              source={require('../assets/lottie/890-loading-animation.json')}
            />
          </View> */}
            <View style={styles.viewTopU}>
              <View style={styles.viewLogin}>
                <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.viewChat}
                    onPress={() =>
                      this.props.navigation.navigate('ChatScreen', {
                        data: this.state.data,
                      })
                    }>
                    <Image
                      source={require('../assets/round-account-button-with-user-inside.png')}
                      style={styles.imgPp}
                    />
                    <View style={styles.viewTextChat}>
                      {/* <Text style={styles.textName}>{value.id}</Text> */}
                      <Text style>Nama: </Text>
                      <Text style>Number:</Text>
                      <Text style>Code Member:</Text>
                      <Text style>Saldo:</Text>
                      {/* <Text style>Kredit{value.kredit}</Text>
                    <Text>Transaksi terakhir</Text> */}
                    </View>
                    {/* <Text>20.46</Text> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewTopU}>
              <View style={styles.viewLogin}>
                <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.viewChat}
                    onPress={() =>
                      this.props.navigation.navigate('ChatScreen', {
                        data: this.state.data,
                      })
                    }>
                    <Image
                      source={require('../assets/round-account-button-with-user-inside.png')}
                      style={styles.imgPp}
                    />
                    <View style={styles.viewTextChat}>
                      {/* <Text style={styles.textName}>{value.id}</Text> */}
                      <Text style>Nama: </Text>
                      <Text style>Number:</Text>
                      <Text style>Code Member:</Text>
                      <Text style>Saldo:</Text>
                      {/* <Text style>Kredit{value.kredit}</Text>
                    <Text>Transaksi terakhir</Text> */}
                    </View>
                    {/* <Text>20.46</Text> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewTopU}>
              <View style={styles.viewLogin}>
                <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.viewChat}
                    onPress={() =>
                      this.props.navigation.navigate('ChatScreen', {
                        data: this.state.data,
                      })
                    }>
                    <Image
                      source={require('../assets/round-account-button-with-user-inside.png')}
                      style={styles.imgPp}
                    />
                    <View style={styles.viewTextChat}>
                      {/* <Text style={styles.textName}>{value.id}</Text> */}
                      <Text style>Nama: </Text>
                      <Text style>Number:</Text>
                      <Text style>Code Member:</Text>
                      <Text style>Saldo:</Text>
                      {/* <Text style>Kredit{value.kredit}</Text>
                    <Text>Transaksi terakhir</Text> */}
                    </View>
                    {/* <Text>20.46</Text> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* {this.state.data == '' ? (
            <View style={styles.viewLoading}>
              <LottieView
                autoPlay
                style={{width: 120}}
                source={require('../assets/16289-no-comments.json')}
              />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.viewChat}
              onPress={() =>
                this.props.navigation.navigate('ChatScreen2', {
                  data: this.state.data,
                })
              }>
              <Image
                source={{uri: this.state.data.image}}
                style={styles.imgPp}
              />
              <View style={styles.viewTextChat}>
                <Text style={styles.textName}>{this.state.data}</Text>
                <Text>Pesan terakhir</Text>
              </View>
              <Text>Waktu</Text>
            </TouchableOpacity>
          )} */}
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    // justifyContent: 'center',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    width: '100%',
    flex: 1,
    // height: '100%',
  },
  container: {
    // padding: 5,
    maxWidth: '100%',
    // alignSelf: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 10,
    borderEndColor: 'blue',
    borderLeftColor: 'red',
    borderWidth: 5,
    // justifyContent: 'center',
    marginTop: 5,
    marginLeft: 5,
    // paddingRight: 20,
    marginRight: 5,
  },
  viewTopU: {
    // justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    paddingTop: '2.5%',
    // width: '100%',
    // height: '100%',
  },
  viewLogin: {
    // flex: 1,
    width: '95%',
    height: '90%',
    backgroundColor: '#b8e0fd',
    elevation: 10,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingTop: '20%',
    // flex: 1,
  },
  settingHeader: {
    // backgroundColor: 'blue',
    // marginLeft: 20,
    // flex: 1,
    alignItems: 'flex-end',
    // alignContent: 'space-around',
    // maxWidth: 150,
    // width: 60,
    // borderBottomRightRadius: 30,
  },
  backHeader: {
    backgroundColor: '#b1835a',
    // maxWidth: 150,
    width: 60,
    borderBottomRightRadius: 30,
  },
  header: {
    flexDirection: 'row',
    // flex: 1,
    // padding: 1,
    height: 50,
    backgroundColor: '#4c9b8d',
    maxWidth: '100%',
    // borderRadius: 10,
    borderBottomRightRadius: 80,
  },
  headerBg: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    resizeMode: 'center',
  },
  headerText: {
    marginTop: 10,
    marginRight: 70,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  backIcon: {
    padding: 20,
    // tintColor: '#fb9357',
    marginLeft: 10,
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  settingIcon: {
    padding: 20,
    marginTop: 5,
    // marginLeft: 50,
    width: 25,
    height: 25,
    tintColor: 'black',
  },
  headerIcon: {
    padding: 20,
    marginTop: 5,
    marginLeft: 50,
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  imgPp: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  viewChat: {
    flexDirection: 'row',
    // padding: '10',
    alignItems: 'center',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 10,
  },
  viewTextChat: {
    flex: 1,
    // height: 60,
    borderColor: 'blue',
    // backgroundColor: '#ffce03',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  textName: {
    fontSize: 20,
  },
  viewLoading: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'center',
    width: '95%',
    elevation: 2,
    marginVertical: 10,
  },
});

export default ListMember;
