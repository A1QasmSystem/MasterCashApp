// // import ImagePicker from 'react-native-image-picker';
// import React, {Component} from 'react';
// import {
//   ActivityIndicator,
//   Alert,
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   ToastAndroid,
//   TouchableNativeFeedback,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';

// export default class ProfileEdit extends Component {
//   constructor() {
//     super();
//     this.state = {
//       token: '',
//       name: '',
//       alamat: '',
//       nomer: '',
//       avatar: '',
//       photo: '',
//       email: '',
//       id: '',
//       data: '',
//       loading: false,
//       edited: false,
//     };
//   }

//   handleEditPhoto = () => {
//     const options = {
//       noData: true,
//     };
//     ImagePicker.launchImageLibrary(options, (response) => {
//       if (response.uri) {
//         this.setState({photo: response});
//         console.log(JSON.stringify(response));
//       }
//     });
//   };

//   alert() {
//     Alert.alert('', 'Terjadi Kesalahan', [{text: 'Ok'}]);
//   }

//   alert2() {
//     Alert.alert('', 'Setidaknya gambar harus dirubah.', [{text: 'Ok'}]);
//   }

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View style={styles.viewHeader}>
//           <TouchableWithoutFeedback>
//             <Image
//               source={require('../assets/go-back-left-arrow.png')}
//               style={styles.iconHeader}
//             />
//           </TouchableWithoutFeedback>
//           <Text> Pengaturan Profile </Text>
//         </View>
//         <View style={styles.viewProfile}>
//           <View>
//             <TouchableWithoutFeedback>
//               {this.state.photo != '' ? (
//                 <Image
//                   source={{uri: this.state.photo.uri}}
//                   style={styles.imgProfile}
//                 />
//               ) : (
//                 <Image
//                   source={{uri: this.state.avatar}}
//                   style={styles.imgProfile}
//                 />
//               )}
//             </TouchableWithoutFeedback>
//             {this.state.loading ? (
//               <View style={styles.viewButton}>
//                 <ActivityIndicator size="small" color="green" />
//               </View>
//             ) : (
//               <TouchableNativeFeedback>
//                 <View style={styles.viewButton}>
//                   <Text style={styles.textUpdate}>Update Profil</Text>
//                 </View>
//               </TouchableNativeFeedback>
//             )}
//           </View>
//           <View style={styles.viewSplit}></View>
//           <View style={{flex: 1}}>
//             <View style={styles.viewField}>
//               <Image
//                 source={require('../assets/round-account-button-with-user-inside.png')}
//                 style={styles.iconHeader}
//               />
//               <TextInput
//                 placeholder="Nama Anda"
//                 style={styles.mainInput}
//                 value={this.state.name}
//                 onChangeText={(input) => this.setState({name: input})}
//               />
//             </View>
//             <View style={styles.viewField}>
//               <Image
//                 source={require('../assets/black-envelope-email-symbol.png')}
//                 style={styles.iconHeader}
//               />
//               <TextInput
//                 placeholder="Email Anda"
//                 style={styles.mainInput}
//                 value={this.state.email}
//                 onChangeText={(input) => this.setState({email: input})}
//               />
//             </View>
//             <View style={styles.viewField}>
//               <Image
//                 source={require('../assets/map-placeholder.png')}
//                 style={styles.iconHeader}
//               />
//               <TextInput
//                 placeholder="Alamat Anda"
//                 style={styles.mainInput}
//                 value={this.state.alamat}
//                 onChangeText={(input) => this.setState({alamat: input})}
//               />
//             </View>
//             <View style={styles.viewField}>
//               <Image
//                 source={require('../assets/phone-working-indicator.png')}
//                 style={styles.iconHeader}
//               />
//               <TextInput
//                 keyboardType="number-pad"
//                 placeholder="Nomor Anda"
//                 style={styles.mainInput}
//                 value={this.state.nomor}
//                 onChangeText={(input) => this.setState({nomor: input})}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   viewHeader: {
//     backgroundColor: 'white',
//     elevation: 3,
//     padding: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconHeader: {
//     width: 25,
//     height: 25,
//     marginRight: 10,
//   },
//   imgProfile: {
//     width: 100,
//     height: 100,
//     borderRadius: 100 / 2,
//     borderColor: 'grey',
//     borderWidth: 4,
//   },
//   viewProfile: {
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     margin: 10,
//     elevation: 3,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewSplit: {
//     height: '100%',
//     borderColor: 'grey',
//     borderWidth: 0.5,
//     marginHorizontal: 10,
//   },
//   mainInput: {
//     height: 40,
//     maxWidth: 160,
//   },
//   viewField: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewButton: {
//     width: '100%',
//     height: 35,
//     backgroundColor: '#00db00',
//     padding: 7,
//     elevation: 3,
//     borderRadius: 5,
//     marginVertical: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textUpdate: {
//     fontWeight: 'bold',
//     color: 'white',
//     textShadowColor: '#757575',
//     textShadowRadius: 1,
//     textShadowOffset: {
//       width: 1,
//       height: 1,
//     },
//   },
// });
// _______________________________________________________________________________________________________________________
import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';

class Profile extends Component {
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

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <View
            // source={require('../assets/headerProfile.png')}
            style={styles.headerBg}>
            <Image
              source={require('../assets/round-account-button-with-user-inside.png')}
              style={styles.headerIcon}
            />
            {this.state.user == '' ? (
              <Text style={styles.headerText}>Nama Nasabah.</Text>
            ) : (
              <Text style={styles.headerText}>
                Halo, {this.state.user.name}.
              </Text>
            )}
            <TouchableOpacity>
              <Image
                source={require('../assets/settings-cogwheel-button.png')}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          source={require('../assets/login/green.png')}
          style={styles.BG}>
          <View style={styles.viewBG}>
            {this.state.user == '' ? (
              <View style={styles.viewLottie}>
                {/* <LottieView
                  source={require('../assets/lottie/890-loading-animation.json')}
                  autoPlay={true}
                  style={{height: 120}} */}
                />
              </View>
            ) : (
              <View style={styles.viewMainProfile}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.replace('ProfileEdit', {
                      data: this.state.user,
                    })
                  }>
                  <Image
                    source={{uri: this.state.user.avatar}}
                    style={styles.pp}
                  />
                </TouchableOpacity>
                <Text style={styles.textDataUser}>{this.state.user.name}</Text>
                <View style={styles.viewTextProfile}>
                  <View style={styles.viewData}>
                    <Image
                      source={require('../assets/black-envelope-email-symbol.png')}
                      style={styles.iconProfile}
                    />
                    <Text style={styles.textProfile}>
                      {this.state.user.email}
                    </Text>
                  </View>
                  <View style={styles.viewData}>
                    <Image
                      source={require('../assets/map-placeholder.png')}
                      style={styles.iconProfile}
                    />
                    <Text style={styles.textProfile}>
                      {this.state.user.location}
                    </Text>
                  </View>
                  <View style={styles.viewData2}>
                    <Image
                      source={require('../assets/phone-working-indicator.png')}
                      style={styles.iconProfile}
                    />
                    <Text style={styles.textProfile}>
                      {this.state.user.phone}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4c9b8d',
    alignItems: 'center',
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
  BG: {
    width: '100%',
    height: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  viewBG: {
    // backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    width: '100%',
    height: '55%',
  },
  viewMainProfile: {
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#ffffff',
    elevation: 10,
    borderRadius: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  viewData: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewData2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  viewBGs: {
    backgroundColor: 'blue',
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  viewIntro: {
    marginBottom: 10,
    backgroundColor: 'white',
    width: '50%',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    padding: 15,
  },
  iconProfile: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  pp: {
    width: 100,
    height: 100,
    // justifyContent: 'center',
    // borderRadius: 120 / 2,
    // marginTop: -120 / 2,
    marginRight: 120,
    borderColor: '#169fb1',
    borderWidth: 5,
  },
  ppnt: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    marginTop: -120 / 2,
    borderColor: '#ffaa00',
    borderWidth: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  textUploadPp: {
    textAlign: 'center',
  },
  textDataUser: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 5,
  },
  viewTextProfile: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    width: '100%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  touchLogInOut: {
    width: 155,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    borderRadius: 10,
    marginBottom: 10,
  },
  touchRegister: {
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffaa00',
    borderRadius: 10,
  },
  touchRegister2: {
    width: 90,
    paddingHorizontal: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4EC5F1',
    borderRadius: 10,
  },
  touchToko: {
    width: 145,
    height: 45,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffaa00',
    borderRadius: 10,
    marginBottom: 15,
  },
  textProduct: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
    marginVertical: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  viewProdukUser: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 135,
    borderRadius: 5,
    padding: 10,
    elevation: 5,
    alignItems: 'center',
  },
  viewDataProduk: {
    backgroundColor: '#00000026',
    marginRight: 5,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 105,
  },
  subViewDataProduk: {
    flexDirection: 'row',
  },
  textDataProduk: {
    textAlign: 'center',
  },
  viewLottie: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
  viewMyProduct: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imgMyProduct: {
    width: 85,
    height: 85,
    borderRadius: 5,
    alignSelf: 'center',
  },
  viewButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  openStore: {
    backgroundColor: '#4EC5F1',
    height: 55,
    borderRadius: 5,
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  textOpenStore: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
});

export default Profile;
