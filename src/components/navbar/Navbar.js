import riveLogo from '../../images/logo.riv';
import Rive from '@rive-app/react-canvas';
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import MenuIcon from './MenuIcon';
import DarkModeIcon from './DarkModeIcon';
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaLaptopCode, FaBusinessTime, FaUserTag, FaLightbulb } from 'react-icons/fa';
// /all-files/fa/FaHome
const Navbar = props=>{
// DarkMode
    const darkToogle = (val)=>props.action('setDark',val);
// DarkMode

// Dropdown
    const [isDrop,setIsDrop]=useState(false);
    const onDrop = (val)=>setIsDrop(val);
// Dropdown

// Nav Item
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/home', icon: <FaHome /> },
        { name: 'About', path: '/about', icon: <FaInfoCircle /> },
        { name: 'Experience', path: '/experience', icon: <FaLaptopCode /> },
        { name: 'Our Work', path: '/ourwork', icon: <FaBusinessTime /> },
    ];
    const navItem = ({name,path})=>{
        if(location.pathname==path || (location.pathname=="/" && path=="/home")){
            return (
                <div className='flex flex-col cursor-pointer select-none'>
                    <div className='uppercase mx-2 px-3 pt-2 tracking-widest hover:font-semibold'>{name}</div>
                    <div className='overflow-hidden h-1'>
                        <div className='w-full h-2 bg-sky-500 rounded-full'></div>
                    </div>
                </div>
            );
        }
        return (
            <div className='flex flex-col cursor-pointer select-none'>
                <div className='uppercase mx-2 px-3 pt-2 tracking-widest hover:font-semibold'>{name}</div>
            </div>
        );
    }
// Nav Item
    useEffect(()=>{
        // console.log(location.pathname);
    })
    return (
    <div className='fixed top-0'>
        <div className='w-screen flex flex-row px-6 lg:px-24 justify-between items-center h-20 lg:h-24 shadow-lg dark:shadow-none bg-white dark:bg-[#576F72] z-50'>
            {/* Logo */}
            <div className="flex flex-row items-center select-none">
                <div className='w-14 h-14 lg:w-16 lg:h-16'>
                    <Rive src={riveLogo} className="" width="100%" />
                </div>
                <div className='ml-3 text-base lg:text-xl'><span className='text-gray-500 dark:text-gray-300'>Integrated</span> <span className='text-gray-900 dark:text-white dark:font-semibold'>Solution</span> </div>
            </div>
            {/* Nav Item */}
            <div className='hidden lg:flex flex-row items-center'>
                {navItems.map((val)=>(
                    <Link to={val.path} key={val.name}>
                        {navItem(val)}
                    </Link>
                ))}
                <Link to="/contact">
                    <div className='uppercase mx-2 px-3 h-10 rounded-full ring-2 ring-sky-500 cursor-pointer shadow-lg shadow-gray-400 dark:shadow-md dark:shadow-gray-700 flex flex-col justify-center select-none hover:font-semibold'>
                        Contact Us
                    </div>
                </Link>
                <DarkModeIcon dark={props.state.dark} onToogle={darkToogle}/>
            </div>
            <div className="lg:hidden select-none">
                <MenuIcon dark={props.state.dark} onDrop={onDrop} isDrop={isDrop} />
            </div>
        </div>
        <div className={'lg:hidden w-screen absolute bg-gray-200 dark:bg-gray-600 opacity-80 divide-y-2 divide-gray-400' + (isDrop? ' ': ' hidden')}>
            {navItems.map((val)=>{
                return (
                    <div key={val.name}>
                        <Link to={val.path}>
                            <div className={'flex flex-row px-4 py-4 items-center'}>
                                <div className="mr-4">{val.icon}</div>
                                <div className="">{val.name}</div>
                            </div>
                        </Link>
                    </div>
                );
            })}
            <div>
                <Link to="/contact">
                    <div className='flex flex-row px-4 py-4 items-center'>
                        <div className="mr-4"><FaUserTag /></div>
                        <div className="">Contact Us</div>
                    </div>
                </Link>
            </div>
            <div onClick={()=>darkToogle(!props.state.dark)} className='flex flex-row px-4 py-4 items-center justify-center'>
                <div className="mr-4"><FaLightbulb/></div>
                <div className="">{props.state.dark==1?'Light Mode': 'Dark Mode'}</div>
            </div>
        </div>
    </div>
    );
}

const stateToProps = state=>{
    return {state}
}
const dispatchToProps = dispatch=>{
    return {
        action: (type,value)=> dispatch({type,value})
    }
}
const ReduxApp = connect(stateToProps,dispatchToProps) (Navbar);
export default ReduxApp;