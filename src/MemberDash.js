import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground, Image} from 'react-native';

export default class MemberDash extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.viewTop}>
          <View style={styles.headerBg}>
            <Text style={styles.headerText}>History</Text>
            <Image
              source={require('./assets/round-account-button-with-user-inside.png')}
              style={styles.headerIcon}
            />
          </View>
          <ImageBackground
            source={require('./assets/grafik.png')}
            style={styles.viewLogin}>
            <Text style={{paddingBottom: '2%'}}>Saldo</Text>
            <Text style={{paddingBottom: '50%'}}>Rp. 5.000.000,00,-</Text>
          </ImageBackground>
        </View>
        {/* <View style={{backgroundColor: 'red', flex: 1}}>
          <Text> textInComponent </Text>
        </View> */}
        <View style={styles.viewTop}>
          {/* <Text style={{marginBottom: 10}}>Member</Text> */}
          <View
            source={require('./assets/grafik.png')}
            style={styles.viewLogin1}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Nama Member</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Nomor Handphone</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Kode Member</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerBg: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    // height: 60,
    resizeMode: 'center',
  },
  headerText: {
    // color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  viewLogin: {
    width: '95%',
    backgroundColor: '#3e3ff5',
    elevation: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: '20%',
    flex: 1,
  },
  viewLogin1: {
    width: '95%',
    backgroundColor: '#cccccc',
    elevation: 10,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: '5%',
    flex: 2,
  },
  textContainer: {
    backgroundColor: 'white',
    paddingTop: '5%',
    margin: 10,
    borderRadius: 10,
  },
  text: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  viewTop: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    paddingTop: '5%',
    // width: '100%',
    // height: '100%',
  },
  headerIcon: {
    // width: 25,
    // height: 25,
    // // tintColor: 'white',
    width: 35,
    height: 35,
    marginRight: 15,
    // tintColor: 'white',
  },
});
