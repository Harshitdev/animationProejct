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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { Back } from './src/Icon/back.png'
const Back = require('./src/Icon/back.png')
const Search = require('./src/Icon/search.png')
const Plus = require('./src/Icon/plus2.png')
const Star = require('./src/Icon/star.png')
const distance = require('./src/Icon/distance.png')
const Time = require('./src/Icon/time.png')
const value = require('./src/Icon/value.png')
const Dominos = require('./src/image/Dominos.png')
const Pizza = require('./src/image/pizza.png')


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActiveTab: 'Rating',
      showFirst: false,
      showSecond: false,
      showthird: false,
    }
  }
  TabSelect(value) {
    this.setState({
      ActiveTab: value
    })
  }
  SelectProduct() {
    this.setState({
      showFirst: !this.state.showFirst,
      showSecond: false,
      showthird: false
    })
  }
  SelectSecondProduct() {
    this.setState({
      showSecond: !this.state.showSecond,
      showthird: false,
      showFirst: false,
    })
  }
  SelectthirdProduct() {
    this.setState({
      showthird: !this.state.showthird,
      showFirst: false,
      showSecond: false,
    })
  }

  render() {

    return (

      <View style={styles.mainContainer}>
        {/* ==========Header Design======== */}
        <View style={styles.headerView}>
          <View>
            <Image source={Back} style={styles.headerIcon} />
          </View>
          <View>
            <Text style={styles.headerTitle}>Pizza</Text>
          </View>
          <View>
            <Image source={Search} style={styles.headerIcon} />
          </View>
        </View>

        {/* ==========Timer Design======== */}

        <View style={{ alignItems: 'center' }}>
          <View style={styles.TimerView}>
            <View style={styles.TimerFirstName}>
              <Text style={styles.TimerText}>BIDS</Text>
            </View>
            <View style={styles.TimerSecondView}>
              <Text style={styles.TimerText}>02:07:40</Text>
            </View>
          </View>
        </View>

        {/* ==========Tab Design======== */}

        <View style={styles.mainTabView}>
          <TouchableOpacity onPress={() => this.TabSelect("Rating")} style={this.state.ActiveTab === 'Rating' ? styles.activeChildTabView : styles.ChildTabView}>
            <Image source={Star} style={styles.TabIcon} />
            <Text style={this.state.ActiveTab === 'Rating' ? styles.ActiveTabText : styles.TabText}>Rating</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.TabSelect("Distance")} style={this.state.ActiveTab === 'Distance' ? styles.activeChildTabView : styles.ChildTabView}>
            <Image source={distance} style={styles.TabIcon} />
            <Text style={this.state.ActiveTab === 'Distance' ? styles.ActiveTabText : styles.TabText}>Distance</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.TabSelect("Expiration")} style={this.state.ActiveTab === 'Expiration' ? styles.activeChildTabView : styles.ChildTabView}>
            <Image source={Time} style={styles.TabIcon} />
            <Text style={this.state.ActiveTab === 'Expiration' ? styles.ActiveTabText : styles.TabText}>Expiration</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.TabSelect("Value")} style={this.state.ActiveTab === 'Value' ? styles.activeChildTabView : styles.ChildTabView}>
            <Image source={value} style={styles.TabIcon} />
            <Text style={this.state.ActiveTab === 'Value' ? styles.ActiveTabText : styles.TabText}>Value</Text>

          </TouchableOpacity>

        </View>
        <ScrollView >
          <View style={styles.ListMainView}>
            {!this.state.showFirst ? <TouchableOpacity onPress={() => this.SelectProduct()} style={styles.hideView}>
              <View style={styles.productDetailView}>
                <Image source={Dominos} style={styles.ShopIcon} />
                <View style={styles.shopNameView}>
                  <Text style={styles.shopName}>Papa Jhon's</Text>
                  <Text style={styles.shopDistance}>0.5 mi</Text>
                </View>
              </View>
              <View style={styles.hidePriceMainView}>
                <Text style={styles.hidePriceAndOffText}>$</Text>
                <Text style={styles.hideTextPrice}>20:00</Text>
                <Text style={styles.hidePriceAndOffText}>OFF</Text>
              </View>
            </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.SelectProduct()} style={styles.ShowView}>
                <View style={styles.productDetailView}>
                  <View style={{ alignItems: 'center' }}>
                    <Image source={Dominos} style={styles.ShopIcon} />
                    <Text style={styles.shopDistance}>0.5 mi</Text>
                  </View>

                  <View style={styles.shopNameView}>
                    <View style={styles.showPriceMainView}>
                      <Text style={styles.ShowPriceAndOffText}>$</Text>
                      <Text style={styles.ShowTextPrice}>20:00</Text>
                      <Text style={styles.ShowPriceAndOffText}>OFF</Text>
                    </View>
                    <View style={styles.showPriceMainView}>
                      <Text style={styles.showPTS}>99% value - 10 pts</Text>
                    </View>
                    <View style={styles.showTimer}>
                      <Text style={styles.showTimerText}>02 : 07 : 20</Text>

                    </View>
                  </View>
                </View>
                <View style={styles.showImageMainView}>
                  <Image source={Pizza} style={styles.showProductImage} />
                </View>
                <View style={styles.plusMainView}>
                  <Image source={Plus} style={styles.plusIcon} />
                </View>
              </TouchableOpacity>}
          </View>

          {/* ==========Second======== */}
          <View style={styles.ListMainView}>
            {!this.state.showSecond ? <TouchableOpacity onPress={() => this.SelectSecondProduct()} style={styles.hideView}>
              <View style={styles.productDetailView}>
                <Image source={Dominos} style={styles.ShopIcon} />
                <View style={styles.shopNameView}>
                  <Text style={styles.shopName}>Papa Jhon's</Text>
                  <Text style={styles.shopDistance}>0.5 mi</Text>
                </View>
              </View>
              <View style={styles.hidePriceMainView}>
                <Text style={styles.hidePriceAndOffText}>$</Text>
                <Text style={styles.hideTextPrice}>20:00</Text>
                <Text style={styles.hidePriceAndOffText}>OFF</Text>
              </View>
            </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.SelectSecondProduct()} style={styles.ShowView}>
                <View style={styles.productDetailView}>
                  <View style={{ alignItems: 'center' }}>
                    <Image source={Dominos} style={styles.ShopIcon} />
                    <Text style={styles.shopDistance}>0.5 mi</Text>
                  </View>

                  <View style={styles.shopNameView}>
                    <View style={styles.showPriceMainView}>
                      <Text style={styles.ShowPriceAndOffText}>$</Text>
                      <Text style={styles.ShowTextPrice}>20:00</Text>
                      <Text style={styles.ShowPriceAndOffText}>OFF</Text>
                    </View>
                    <View style={styles.showPriceMainView}>
                      <Text style={styles.showPTS}>99% value - 10 pts</Text>
                    </View>
                    <View style={styles.showTimer}>
                      <Text style={styles.showTimerText}>02 : 07 : 20</Text>

                    </View>
                  </View>
                </View>
                <View style={styles.showImageMainView}>
                  <Image source={Pizza} style={styles.showProductImage} />
                </View>
                <View style={styles.plusMainView}>
                  <Image source={Plus} style={styles.plusIcon} />
                </View>
              </TouchableOpacity>}
          </View>

          {/* ==========Third======== */}
          <View style={styles.ListMainView}>
            {!this.state.showthird ? <TouchableOpacity onPress={() => this.SelectthirdProduct()} style={styles.hideView}>
              <View style={styles.productDetailView}>
                <Image source={Dominos} style={styles.ShopIcon} />
                <View style={styles.shopNameView}>
                  <Text style={styles.shopName}>Papa Jhon's</Text>
                  <Text style={styles.shopDistance}>0.5 mi</Text>
                </View>
              </View>
              <View style={styles.hidePriceMainView}>
                <Text style={styles.hidePriceAndOffText}>$</Text>
                <Text style={styles.hideTextPrice}>20:00</Text>
                <Text style={styles.hidePriceAndOffText}>OFF</Text>
              </View>
            </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this.SelectthirdProduct()} style={styles.ShowView}>
                <View style={styles.productDetailView}>
                  <View style={{ alignItems: 'center' }}>
                    <Image source={Dominos} style={styles.ShopIcon} />
                    <Text style={styles.shopDistance}>0.5 mi</Text>
                  </View>

                  <View style={styles.shopNameView}>
                    <View style={styles.showPriceMainView}>
                      <Text style={styles.ShowPriceAndOffText}>$</Text>
                      <Text style={styles.ShowTextPrice}>20:00</Text>
                      <Text style={styles.ShowPriceAndOffText}>OFF</Text>
                    </View>
                    <View style={styles.showPriceMainView}>
                      <Text style={styles.showPTS}>99% value - 10 pts</Text>
                    </View>
                    <View style={styles.showTimer}>
                      <Text style={styles.showTimerText}>02 : 07 : 20</Text>

                    </View>
                  </View>
                </View>
                <View style={styles.showImageMainView}>
                  <Image source={Pizza} style={styles.showProductImage} />
                </View>
                <View style={styles.plusMainView}>
                  <Image source={Plus} style={styles.plusIcon} />
                </View>
              </TouchableOpacity>}
          </View>
        </ScrollView>

      </View>

    );
  }
}





const styles = StyleSheet.create({

  mainContainer: {
    backgroundColor: '#fff',
  },

  /* ==========Header CSS======== */
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 10
  },
  headerIcon: {
    width: 30,
    height: 30
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5
  },



  /* ==========Timer View CSS======== */

  TimerView: {
    backgroundColor: '#FF6619',
    height: 50,
    width: 200,
    borderRadius: 50,
    shadowColor: '#FF6619',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,
    flexDirection: 'row',


  },
  TimerFirstName: {
    backgroundColor: '#E64C00',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    width: '40%',
    alignItems: 'center',
    textAlign: 'center'
  },
  TimerSecondView: {
    width: '60%',
    alignItems: 'center',
    textAlign: 'center'
  },
  TimerText: {
    marginTop: 14,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },



  /* ==========Tab View CSS======== */

  mainTabView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',

  },
  ChildTabView: {
    width: '20%',
    alignItems: 'center',

  },
  TabText: {
    fontSize: 10,
    fontWeight: 'bold',

    color: '#000',
    marginTop: 5,
    marginBottom: 15
  },
  TabIcon: {
    width: 20,
    height: 20
  },
  activeChildTabView: {
    width: '20%',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#2a75c5',
  },
  ActiveTabText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2a75c5',
    marginTop: 5,
    marginBottom: 15
  },



  /* ==========Product List View CSS======== */

  scrollView: {
    backgroundColor: '#EBF5FB',
    height: '100%'
  },
  ListMainView: {
    paddingTop: 40,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#EBF5FB'
  },


  /* ==========Product List fistShow View CSS======== */

  hideView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 85,
    width: 370,
    borderTopLeftRadius: 30,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,

  },
  productDetailView: {
    flexDirection: 'row',
    padding: 20
  },
  ShopIcon: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EBF5FB'

  },
  shopNameView: {

    marginLeft: 10,
    marginTop: 10,
  },
  shopName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  shopDistance: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5
  },
  hidePriceMainView: {
    backgroundColor: '#F8F9F9',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: 120,
    borderTopLeftRadius: 20,
  },
  hidePriceAndOffText: {
    fontSize: 10,
    color: '#2a75c5',
    fontWeight: 'bold'
  },
  hideTextPrice: {
    fontSize: 20,
    color: '#2a75c5',
    fontWeight: 'bold',
    marginTop: 5
  },


  /* ==========Product List SecondShow View CSS======== */

  ShowView: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 120,
    width: 370,
    borderTopLeftRadius: 30,
    borderBottomEndRadius: 30,
    marginBottom: 30,
    shadowColor: 'gray',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,

  },
  showPriceMainView: {
    flexDirection: 'row',
    borderTopLeftRadius: 20,
  },
  ShowPriceAndOffText: {
    fontSize: 12,
    color: '#2a75c5',
    fontWeight: 'bold'
  },
  ShowTextPrice: {
    fontSize: 20,
    color: '#2a75c5',
    fontWeight: 'bold',
  },
  showPTS: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 5
  },
  showTimer: {
    backgroundColor: '#2a75c5',
    height: 30,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 5
  },
  showTimerText: {
    fontSize: 14,
    padding: 6,
    fontWeight: 'bold',
    color: '#fff'
  },
  showImageMainView: {
    backgroundColor: '#F8F9F9',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: 120,
    borderTopLeftRadius: 30,
    borderBottomEndRadius: 30,
  },
  showProductImage: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderBottomEndRadius: 30,
  },


  /* ==========Plus View CSS======== */

  plusMainView: {
    position: 'absolute',
    right: 20,
    bottom: -20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: '#FF6619',
    shadowColor: '#FF6619',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,
    flexDirection: 'row',
  },
  plusIcon: {
    width: 30,
    height: 30
  },

});

