import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingBasket, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate();
    const handleItemClick = () => {
        window.location.href = `/`;
    };
    return (<div className="nav">
        <img onClick={handleItemClick} src="/images/logo.png" alt="logo"/>
        
        <div className='right'>
            <FontAwesomeIcon icon={faUser}/>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </div>
    </div>);
};
export default Nav;
