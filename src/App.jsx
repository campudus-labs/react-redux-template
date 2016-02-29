import React from 'react';
import { connect } from 'react-redux';
import { ActionTypes } from './reducer';
import Header from './components/header';
import Menu from './components/Menu';

const App = (props) => {
  const sayHello = () => {
    props.dispatch({type : ActionTypes.SAY_HELLO, name : 'xyz'});
  };
  return (
    <div>
      <Header/>
      <Menu/>
      <h1>{props.greeting}</h1>
      <p onClick={sayHello}>I mean, why not?</p>
    </div>
  );
};

export default connect(state => {
  return {greeting : state.get('greeting')};
}, (dispatch) => {
  return {dispatch : dispatch};
})(App);
