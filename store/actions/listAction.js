
import AsyncStorage from "@react-native-async-storage/async-storage";
import {SET_LIST, SET_ACTIVE_LIST_ID} from '../types';
import {STORAGE_KEYS} from '../../constants';
import store from "../";

// Get list action

export const getlists=(onSuccess=()=>{}, onError=()=>{})=>{
    return async dispatch =>{
        try{
            const listsRes= await AsyncStorage.getItem(STORAGE_KEYS.lists);
            const lists= listsRes? JSON.parse(listsRes):[];
        dispatch({
            type: SET_LIST,
            payload:lists
        }); 
        onSuccess();   

        } catch(error){
            console.log('Error');
            onError();
        }
    }
};


//Create list action
export const createList=(name, onPress=()=>{}, onError=()=>{})=>{
    return async dispatch => {
        try {
            const newList = {
                name,
                id:`list-${new Date().getTime()}`,
            };
            const {lists}= store.getState().list;
            const listCopy=[...lists];
            listCopy.push(newList);
            await AsyncStorage.setItem(STORAGE_KEYS.lists,JSON.stringify(listCopy));

            dispatch ({
                type: SET_LIST,
                payload: listCopy,
            });
            onSuccess();

        } catch (error) {
            console.log('Error');
            onError();
            
        }
    }
};
