// import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";
import Header from './../Header/Header';
import Home from "../Home/Home";
const Root = () => {
    return (
        <div>
            <h2>Root</h2>
            <Header></Header>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

// Root.propTypes = {

// };

export default Root;