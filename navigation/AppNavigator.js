import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, StyleSheet, Alert, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import AddListScreen from '../screens/AddListScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TaskStackNavigator= createNativeStackNavigator();

const defaultStyles={
    headerStyle: {
        backgroundColor: Colors.primary,
      },
    headerTintColor:'#fff',
    headerTitleStyle:{
        fontFamily: 'times new roman',

    },
};



const TasksNavigator=()=> {
    return (
        <TaskStackNavigator.Navigator>
            <TaskStackNavigator.Screen name="Home" component={HomeScreen} options={{...defaultStyles, title:'your list', headerTitleAlign:'center'}}/>
            <TaskStackNavigator.Screen name="NewList" component={AddListScreen} options={{...defaultStyles, title:'Add your New List'}}/>

            

        </TaskStackNavigator.Navigator>
    );
};

const AppNavigator=()=>{
    return (
        <NavigationContainer>
            <TasksNavigator/>

            

        </NavigationContainer>
    );
};



export default AppNavigator;