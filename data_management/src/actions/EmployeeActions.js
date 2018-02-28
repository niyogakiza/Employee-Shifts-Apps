import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from "./types";

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload:{ prop, value }
    };
 };

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({type: EMPLOYEE_CREATE});
                Actions.employeeList({type: 'reset'});// removes back

            })
    }

};

export const employeesFetch = () =>{
    const { currentUser } = firebase.auth();
    return (dispatch) =>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => { // snapshot is an object that describes what is in there
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export  const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return() =>{
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() =>{
                dispatch({ EMPLOYEE_SAVE_SUCCESS });
                Actions.employeeList({ type: 'reset'});
            });
    }
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList({ type: 'reset' });
            });
    };
};