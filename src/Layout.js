import Navbar from './components/navbar/Navbar';
const Layout = props=>{
    return(
        <div className="bg-white text-base font-poppin dark:text-gray-100 dark:bg-gray-800">
            <Navbar/>
            {props.children}
        </div>
    );
}
export default Layout;