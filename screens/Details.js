import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native'; 


const Details = () => {
    return (
        <View style={style.container}>
            <StatusBar />
            <Text>Details</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#383CC1',
        flex: 1,
    }
});

export default Details;