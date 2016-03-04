import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from './actions/actionCreators';
import Header from './components/header/Header';
import Menu from './components/Menu';

const App = (props) => {
  const clickHello = () => {
    props.dispatch(sayHello('Im so random!' + Math.random() * 10 + 1));
  };

  let title = "Custom Title";

  return (
    <div>
      <Header title={title}/>
      <Menu/>
      <h1>{props.greeting}</h1>
      <button onClick={clickHello}>Randomize!</button>
    </div>
  );
};

App.propTypes = {
  greeting : React.PropTypes.string,
  dispatch : React.PropTypes.func
};

export default connect(state => {
  //We always want to transform immutable object to vanilla js object
  return {greeting : state.get('greeting')};
}, (dispatch) => {
  return {dispatch : dispatch};
})(App);
