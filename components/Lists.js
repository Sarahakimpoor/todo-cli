
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import { useSelector } from 'react-redux';
import globalStyles from '../styles/global';

const Lists=()=>{
    const { lists } = useSelector(state => state.list);
    console.log(lists);
   

    return (
        <View>
          { lists.length > 0 ? <FlatList
            keyExtractor={(item) => item.id}
            contentContainerStyle={globalStyles.listContainer}
            data={lists}
            renderItem={({ item }) => <TouchableOpacity style={globalStyles.listItem} >
               
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>}
          /> : <Text style={globalStyles.noData}>No lists</Text>}
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      flex: 1,
    },
    itemText: {
      fontFamily: 'times new roman',
      fontSize: 16,
      color: '#556b2f',
    },
  });

export default Lists;