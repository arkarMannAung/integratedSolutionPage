import React, {useState} from 'react';
import { connect } from 'react-redux';
import Home from './views/Home';
import Navbar from './components/navbar/Navbar';
const App = props => {  
  return (
    <div className="bg-white text-base font-poppin dark:text-gray-100 dark:bg-gray-800">
      <Navbar/>
      {/* <Home/>
      Hello World */}
    </div>
  );
}

export default App;

// const stateToProps = state => {
//   return {
//     value: state
//   }
// }
// const dispathchToProps = dispatch => {
//   return {
//     action: (type,value) => {
//       dispatch({type,value})
//     }
//   }
// }
// const ReduxApp = connect(stateToProps,dispathchToProps) (App)