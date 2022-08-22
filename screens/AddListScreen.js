import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, TextInput, Keyboard, Alert, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../components/CustomButton';
import { Colors } from '../constants';
import globalStyles from '../styles/global';
import { createList } from '../store/actions/listActions';

 

const AddListScreen=()=>{
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput style={globalStyles.input}  onChangeText={(val) => setName(val)}
         placeholder="List name" placeholderTextColor={Colors.tertiary} />
        <CustomButton text="Submit" onPress={submitHandler} round />
      </View>
    </TouchableWithoutFeedback>

    );

};
const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingTop: 50,
      backgroundColor: '#fff',
      flex: 1,
    },
  });

export default AddListScreen;
