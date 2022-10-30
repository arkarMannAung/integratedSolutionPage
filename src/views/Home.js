import React, { useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import Layout from '../Layout';
const Home = (props)=> {
    let name = createRef();
    const changeName = ()=>{
        props.action('changeName',name.current.value);
    }
    return (
        <Layout>
            <div className="h-104 flex flex-row justify-center items-center">
                Home Page
            </div>
            <div className='h-208'></div>
        </Layout>
    );
}
const stateToProps = state => {
    return { state }
}
const dispathchToProps = dispatch => {
    return {
      action: (type,value) => {
        dispatch({type,value})
      }
    }
}
const ReduxApp = connect(stateToProps,dispathchToProps) (Home)
export default ReduxApp;