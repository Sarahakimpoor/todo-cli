
import React,{useEffect,useState} from 'react';
import {View, Text, Button,StyleSheet, ActivityIndicator} from 'react-native';
import { Color } from '../constants';
import {useDispatch} from 'react-redux';

import { getlists } from '../store/actions/listAction';
import globalStyles from '../styles/global';
import Lists from '../components/Lists';
import CustomButton from '../components/CustomButton';
 

/*const HomeScreen=({navigation})=>{
    const [loading,setLoading]= useState(true);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getlists(()=>setLoading(false)));
    }, [dispatch]);*/

    
    const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getlists(() => setLoading(false)));
  }, [dispatch]);
    

    if (loading) {
        return <ActivityIndicator color={Color.primary} size="large" style={globalStyles.loader} /> ;
    }
    return(
        <View style={styles.contariner} >
           <Lists/>
           <CustomButton text="Add new list" icon="add" iconColor="#fff" onPress={() => navigation.navigate('NewList')}  />
        </View>

    );
};

const styles=StyleSheet.create({
    contariner:{
        flex:1,

    },
});

export default HomeScreen;
