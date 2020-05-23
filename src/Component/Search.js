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
    TextInput
} from 'react-native';
import ProductList from './ProductList';


const Menu = require('./../Icon/Menu01.png');
const Marker = require('./../Icon/marker01.png');
const SearchLogo = require('./../Icon/search.png');
const SearchLogo01 = require('./../Icon/search01.png');
const Logo = require('./../image/logo.png');




export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Input: false,
            searchValue: '',
        }


    }
    activeInpute() {
        this.setState({
            Input: !this.state.Input
        })
    }
    SearchItem() {
        if (!this.state.searchValue) {
            alert("Please Enter Product")
        }
        else {
            this.props.navigation.navigate('ProductList')
        }
    }


    render() {

        return (

            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    {/* ==========Header Design======== */}
                    <View style={styles.headerView}>
                        <View>
                            <Image source={Menu} style={styles.headerIcon} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={Marker} style={styles.headerMarkerIcon} />
                            <View>
                                <Text style={styles.locationTitle}>Current</Text>
                                <Text style={styles.locationTitle}>Location</Text>
                            </View>
                        </View>
                    </View>

                    {/* ==========PTS Design======== */}
                    <View style={styles.PTSView}>
                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Text style={styles.PointValue}>1,160</Text>
                            <Text style={styles.PointDegere}>Ms</Text>
                        </View>
                    </View>

                    {/* ==========Logo Design======== */}
                    <View style={styles.logoMainView}>
                        <Image source={Logo} style={styles.logoImg} />
                        <Text style={styles.LogoTitle}>The Real-Time Discount Marketplance</Text>

                    </View>
                    {/* ==========input Design======== */}
                    <View style={styles.InputMainView}>
                        {!this.state.Input ? <TouchableOpacity onPress={() => this.activeInpute()} style={styles.InputInsideView}>
                            <Image source={SearchLogo} style={styles.searchInputIcon} />
                            <View>
                                <Text style={styles.keywordText}>Enter Keyword</Text>
                                <Text style={styles.exampleText}>[E.g. Pizza,Coffie name]</Text>


                            </View>

                        </TouchableOpacity>
                            :
                            <View style={styles.InputInsideView}>
                                <TextInput
                                    style={styles.inputTypeCss}
                                    onChange={(searchValue) => this.setState({ searchValue: searchValue })}
                                    placeholder=''
                                    autoFocus={true}
                                    value={this.state.searchValue}
                                />

                            </View>}

                    </View>
                </View>
                {/* ==========Search Design======== */}
                {this.state.Input && <TouchableOpacity onPress={() => this.SearchItem()} style={styles.SearchContainer}>
                    <View style={styles.SearchMainView}>
                        <Image source={SearchLogo} style={styles.SearchIcon} />
                    </View>
                </TouchableOpacity>}



            </View >


        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#EBF5FB',
        height: '100%'
    },
    headerContainer: {
        position: 'relative',
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
        width: 20,
        height: 20,
        marginLeft: 5
    },
    headerMarkerIcon: {
        width: 25,
        height: 25,
        marginRight: 5
    },
    locationTitle: {
        fontSize: 10,
        fontWeight: 'bold',
    },

    /* ==========PTS CSS======== */

    PTSView: {
        width: '100%',
        alignItems: 'flex-end',

    },
    PointValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 1
    },
    PointDegere: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'gray',

    },


    /* ==========Logo CSS======== */
    logoMainView: {
        alignItems: 'center',
        marginTop: 40
    },

    logoImg: {
        width: 210,
        height: 80
    },
    LogoTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 3,
    },

    /* ==========Input CSS======== */
    InputMainView: {
        alignItems: 'center',
        marginTop: 140,



    },
    InputInsideView: {
        height: 70,
        width: 300,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 50,
        position: 'absolute',
        bottom: -33,
        backgroundColor: '#fff',
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    searchInputIcon: {
        width: 35,
        height: 35,
    },

    keywordText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    exampleText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'gray',

    },
    inputTypeCss: {
        height: 50,
        width: 250,
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },

    /* ==========Search View CSS======== */
    SearchContainer: {
        marginTop: 80,
        alignItems: 'center',
    },

    SearchMainView: {

        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: '#FF6619',
        shadowColor: '#FF6619',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 2,
        flexDirection: 'row',
    },
    SearchIcon: {
        width: 45,
        height: 45
    },

});