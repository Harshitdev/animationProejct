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

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }


    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 100 }}>Map</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#EBF5FB',
        height: '100%',
        padding: 40,
        alignItems: 'center'
    },


});