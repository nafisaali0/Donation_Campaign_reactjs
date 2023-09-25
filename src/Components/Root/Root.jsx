// import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";
import Header from './../Header/Header';

const Root = () => {
    return (
        <div className="container mx-auto">
            <div>              
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

// Root.propTypes = {

// };

export default Root;