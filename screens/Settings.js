import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native'; 


const Setting = () => {
    return (
        <View style={style.container}>
            <StatusBar />
            <StatusBar />
            <Text>Setting</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#B4161B',
        flex: 1,
    }
});


export default Setting;