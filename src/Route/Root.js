import React, { useState, Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Button, Text, View, TouchableOpacity, Animated, Image, Dimensions, AsyncStorage } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './../Component/Search';
import Map from './../Component/Map';
import Wallet from './../Component/Wallet';
import Market from './../Component/Market';
import ProductList from './../Component/ProductList';

const SearchIcon = require('./../Icon/search.png')
const Star = require('./../Icon/star.png')
const StarSelect = require('./../Icon/starSelected.png')
const Marker = require('./../Icon/marker01.png');
const MarkerSelect = require('./../Icon/markerSelected.png');
const wallet = require('./../Icon/wallet.png');
const market = require('./../Icon/market.png');


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



// const homeSelected = require("./../../assets/android/all_screens/drawable-hdpi/icn_home_selected.png")



function RootStack() {


  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName={"Follow"}
        backBehavior={'initialRoute'}
        showLabel={true}
        tabStyle={{
          backgroundColor: "red",
          alignItems: 'center'
        }}
        tabBarOptions={{
          activeBackgroundColor: 'gray',
          activeTintColor: '#000',
          keyboardHidesTabBar: true,
          tabStyle: {
            backgroundColor: '#fff',
            height: 60
          },

        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Follow") {
              iconName = focused
                ? StarSelect
                : StarSelect;
            }
            if (route.name === "Map") {
              iconName = focused
                ? MarkerSelect
                : MarkerSelect;
            }
            if (route.name === "Wallet") {
              iconName = focused
                ? wallet
                : wallet;
            }
            if (route.name === "Market") {
              iconName = focused
                ? market
                : market;
            }

            return <Image
              style={{ height: 30, width: 30 }}
              resizeMode={'contain'}
              source={iconName} />
          }

        })}
      >

        <Tab.Screen name="Follow" component={ScreenStack} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Market" component={Market} />
      </Tab.Navigator>
    );
  }

  return <MyTabs />
}
function ScreenStack() {
  return (
    <Stack.Navigator
      header={false}
    >
      <Stack.Screen name="Search" component={Search} options={{ headerMode: 'none', headerShown: false }} />
      <Stack.Screen name="ProductList" component={ProductList} options={{ headerMode: 'none', headerShown: false }} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Market" component={ProductList} />
    </Stack.Navigator>
  );
}


class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RootStack />
    );
  }
}



export default Root;