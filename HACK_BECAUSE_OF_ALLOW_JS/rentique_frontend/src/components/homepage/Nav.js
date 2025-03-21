import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faShoppingBasket, faShoppingCart, faUser, } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Nav = () => {
    const handleItemClick = () => {
        window.location.href = `/Fork`;
    };
    const handleItemClick1 = () => {
        window.location.href = `/`;
    };
    return (<div className="nav">
      <img onClick={handleItemClick1} src="/images/logo.png" alt="logo"/>

      <div className="right">
        <button onClick={handleItemClick}>SignUp/Login</button>
      </div>
    </div>);
};
export default Nav;
