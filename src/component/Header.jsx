import React from 'react';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import logo from '../assets/logo.png';
const Header = (props) => {
  const navigate=useNavigate();
    return (
            <StyledHeader className="flex a-center j-between">
            <div className="logo">
                <img src={logo} alt="logo" />
                
            </div>

            <button onClick={()=>navigate(props.login?"/login":"/signup")}>
                {props.login?"Log In":"Sign In"}
                </button>
            </StyledHeader>
    )
}

export default Header;
const  StyledHeader =styled.header`
padding: 0 4rem;
.logo{
    img{
        height: 5rem;
    }
}
button{
    padding: 0.5rem 1 rem;
    background-color:#e50914;
    border:none;
    color:white;
    cursor:pointer;
    border-radius:0.2rem;
    font-weight:bolder;
    font-size:1.05rem;
}
`;