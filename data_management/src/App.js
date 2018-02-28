import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';



export default class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: 'AIzaSyBPegtbHX2ozRj9yMRNYACKt8l-ID8byhg',
            authDomain: 'manager-faea3.firebaseapp.com',
            databaseURL: 'https://manager-faea3.firebaseio.com',
            projectId: 'manager-faea3',
            storageBucket: '',
            messagingSenderId: '246273172266'
        };
        firebase.initializeApp(config);
    }

  render() {

        const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
        <Provider store ={store}>
           <Router/>
        </Provider>

    );
  }
}

