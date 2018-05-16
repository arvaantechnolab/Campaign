/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  NavigatorIOS
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {

    const resizeMode = 'center';
    const text = 'This is some text inlaid in an <Image />';
    let deviceWidth = Dimensions.get('window').width

    return (

      <View style={styles.container}>
      <Image
        style={{ backgroundColor: '#ccc', flex: 1,position: 'absolute', width: '100%',height: '100%',justifyContent: 'center', resizeMode:'center'}}
          source={(require("./image/bg.png"))} />

          <View style={{flexDirection: 'row',justifyContent: 'flex-end', width: deviceWidth,height:44, marginTop:20}}> //backgroundColor:'blue',

            <Button title="Skip"
              style={{
                height:44,
                justifyContent: 'flex-end'}}
                onPress={() => this.props.navigator.replace({name: 'App',})}
                color='#ffffff'
              />
          </View>

          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:90, alignItems: 'center', marginTop:100}}> //backgroundColor:'red',
            <View style={{flexDirection: 'row',justifyContent: 'center',  width: deviceWidth, height:70, alignItems: 'center'}}> //backgroundColor:'orange',
              <Image
                style={{ flex: 1,position: 'absolute', width: 89,height: 70,justifyContent: 'center', resizeMode:'center', alignItems:'center'}}
                source={(require("./image/logo.png"))} />
            </View>
                <Text style={{fontWeight: 'bold',width: deviceWidth, textAlign:'center', color:'#B1A495'}}>
                  Your tag line
                </Text>
          </View>

          <View style={{flexDirection: 'column',  width: deviceWidth, height:130, alignItems: 'center', marginTop:80}}> //backgroundColor:'red',
            <View style={{backgroundColor:'#4ebaba', flexDirection: 'column',justifyContent: 'center',  width: deviceWidth-80, height:70, alignItems: 'center', borderRadius:5, borderWidth: 1, borderColor: '#4ebaba', marginTop:0}}>
              <Button title="Sign In with Instagram"
                style={{
                  width: deviceWidth-80,
                  height:70,
                  justifyContent: 'center'}}
                  onPress={() => this.props.navigator.replace({name: 'App',})}
                  color='#ffffff'
                  />
            </View>
            <View style={{flexDirection: 'column', width: deviceWidth, height:35, alignItems: 'center', marginTop:25}}> //backgroundColor:'blue',
              <Button title="Don't have Instagram?"
                style={{
                  width: deviceWidth,
                  height:35,
                  justifyContent: 'center'}}
                  onPress={() => this.props.navigator.replace({name: 'App',})}
                  color='#B1A495'
                />
            </View>
          </View>

          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:70, alignItems: 'center', marginTop:25}}> //backgroundColor:'blue',
            <Button title="By Signing up you agree to the Terms of Service and Privacy Policy"
              style={{
                numberOfLines:2,
                width: 270,
                height:70,
                justifyContent: 'center'}}
                onPress={() => this.props.navigator.replace({name: 'App',})}
                color='#ffffff'
              />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
