import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Welcome from './Welcome';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <View style={style.container}>
            <StatusBar />
            <Text>Hello Home</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#02B290',
        flex: 1,
    }
});

export default Home;