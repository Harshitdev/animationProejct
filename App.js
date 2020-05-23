/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/Route/Root";
import ProductList from './src/Component/ProductList';
import Search from './src/Component/Search'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

    return (
      <View style={styles.mainContainer}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
        {/* <Search /> */}
        {/* <ProductList /> */}
      </View>



    );
  }
}





const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },


});

