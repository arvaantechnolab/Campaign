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
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
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

  constructor(props) {
    super(props);
    this.state = {
      title1: "Already have an account? ",
      title2: 'Sign In'
    };
  }

  onMenuPress = () => {
      this.setState({

  })
}

  render() {

    const resizeMode = 'center';
    const text = 'This is some text inlaid in an <Image />';
    let deviceWidth = Dimensions.get('window').width
    let deviceHeight = Dimensions.get('window').height
    this.state = { text: 'Username' };



    return (

      // <View style={styles.container}>
      // <Image
      //   style={{ backgroundColor: '#ccc', flex: 1,position: 'absolute', width: '100%',height: 270,justifyContent: 'flex-start', resizeMode:'center'}}
      //     source={(require("./image/bg.png"))} />
      //
          // <View style={{backgroundColor:'red',flexDirection: 'row',justifyContent: 'flex-start',  width: deviceWidth, height:64, alignItems: 'center', marginTop:0}}> //backgroundColor:'red',
          //   <TouchableHighlight style={{width:44, height:44, marginTop:20}} onPress={this.onMenuPress}>
          //     <Image
          //       style={{width:20, height:20, marginLeft:10, marginTop:10}}
          //       source={require("./image/menu.png")}
          //       />
          //   </TouchableHighlight>
          //
          //   <View style={{backgroundColor:'orange',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth-88, height:44, alignItems: 'center', marginTop:20}}> //backgroundColor:'orange',
          //     <Text style={{color:'white'}}>
          //       <Text style={{color:'white'}}>Profile</Text>
          //     </Text>
          //   </View>
          // </View>

          // <View style={{backgroundColor:'red', flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:70, alignItems: 'center', marginTop:0}}> //backgroundColor:'red',
          //   <View style={{backgroundColor:'orange',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth, height:70, alignItems: 'center', marginTop:0}}> //backgroundColor:'orange',
          //     <Image
          //       style={{ flex: 1,position: 'absolute', width: 89,height: 70,justifyContent: 'center', resizeMode:'center', alignItems:'center'}}
          //       source={(require("./image/logo.png"))} />
          //   </View>
          // </View>
    // </View>



    <View style={styles.container}>
    <Image
      style={{ backgroundColor: '#ccc', flex: 1,position: 'absolute', width: '100%',height: '100%',justifyContent: 'center', resizeMode:'center'}}
        source={(require("./image/bg.png"))} />

        <View style={{backgroundColor:'red',flexDirection: 'row',justifyContent: 'flex-start',  width: deviceWidth, height:64, alignItems: 'center', marginTop:0}}> //backgroundColor:'red',
          <TouchableHighlight style={{width:44, height:44, marginTop:20}} onPress={this.onMenuPress}>
            <Image
              style={{width:20, height:20, marginLeft:10, marginTop:10}}
              source={require("./image/menu.png")}
              />
          </TouchableHighlight>

          <View style={{backgroundColor:'orange',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth-88, height:44, alignItems: 'center', marginTop:20}}> //backgroundColor:'orange',
            <Text style={{color:'white'}}>
              <Text style={{color:'white'}}>Profile</Text>
            </Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:70, alignItems: 'center', marginTop:50}}> //backgroundColor:'red',
            <View style={{flexDirection: 'row',justifyContent: 'center',  width: deviceWidth, height:70, alignItems: 'center'}}> //backgroundColor:'orange',
              <Image
                style={{ flex: 1,position: 'absolute', width: 89,height: 70,justifyContent: 'center', resizeMode:'center', alignItems:'center'}}
                source={(require("./image/logo.png"))} />
            </View>
          </View>

          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:50, alignItems: 'center', marginTop:30}}> //backgroundColor:'red',
            <View style={{backgroundColor:'rgba(164, 164, 166, 0.6)',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth-60, height:40, alignItems: 'center', borderRadius:25}}> //backgroundColor:'orange',
              <TextInput
                    style={{height: 50, textAlign: 'left', width:deviceWidth-90, color:'white'}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                  />
            </View>
          </View>

          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:50, alignItems: 'center', marginTop:10}}> //backgroundColor:'red',
            <View style={{backgroundColor:'rgba(164, 164, 166, 0.6)',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth-60, height:40, alignItems: 'center', borderRadius:25}}> //backgroundColor:'orange',
              <TextInput
                  style={{height: 50, textAlign: 'left', width:deviceWidth-90, color:'white'}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
            </View>
          </View>

          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:50, alignItems: 'center', marginTop:10}}> //backgroundColor:'red',
            <View style={{backgroundColor:'rgba(164, 164, 166, 0.6)',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth-60, height:40, alignItems: 'center', borderRadius:25}}> //backgroundColor:'orange',
              <TextInput
                  style={{height: 50, textAlign: 'left', width:deviceWidth-90, color:'white'}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
            </View>
          </View>

          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:50, alignItems: 'center', marginTop:10}}> //backgroundColor:'red',
            <View style={{backgroundColor:'rgba(164, 164, 166, 0.6)',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth-60, height:40, alignItems: 'center', borderRadius:25}}> //backgroundColor:'orange',
              <TextInput
                  style={{height: 50, textAlign: 'left', width:deviceWidth-90, color:'white', placeholder:'Username'}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
            </View>
          </View>

          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:50, alignItems: 'center', marginTop:10}}> //backgroundColor:'red',
            <View style={{backgroundColor:'rgba(164, 164, 166, 0.6)',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth-60, height:40, alignItems: 'center', borderRadius:25}}> //backgroundColor:'orange',
              <TextInput
                  style={{height: 50, textAlign: 'left', width:deviceWidth-90, color:'white', placeholder:'Username'}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
            </View>
          </View>

          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:50, alignItems: 'center', marginTop:10}}> //backgroundColor:'red',
            <View style={{backgroundColor:'rgba(164, 164, 166, 0.6)',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth-60, height:40, alignItems: 'center', borderRadius:25}}> //backgroundColor:'orange',
              <TextInput
                  style={{height: 50, textAlign: 'left', width:deviceWidth-90, color:'white'}}
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                />
            </View>
          </View>

          <View style={{flexDirection: 'column',justifyContent: 'center',  width: deviceWidth, height:50, alignItems: 'center', marginTop:10}}> //backgroundColor:'red',
            <View style={{backgroundColor:'#4ebaba',flexDirection: 'row',justifyContent: 'center',  width: deviceWidth-70, height:40, alignItems: 'center', borderRadius:25}}> //backgroundColor:'orange',
              <Button title="Sign Up"
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

          <View style={{flexDirection: 'column',  width: deviceWidth, height:130, alignItems: 'center', marginTop:10}}> //backgroundColor:'red',
            <View style={{flexDirection: 'column', width: deviceWidth, height:35, alignItems: 'center', marginTop:0}}> //backgroundColor:'blue',
            <TouchableOpacity onPress={() => this.selectionOnPress("BASIC")} >
                  <Text style={{color:'white'}}>
                      <Text style={{color:'gray'}}>Already have an account? </Text>
                      <Text style={{color:'white'}}>Sign In</Text>
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
          </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
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
  contentContainer: {
    paddingVertical: 20
  }
});
