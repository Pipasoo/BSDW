import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import LogoTryAll from '../images/logotryall.png';
import { Nav, Navbar, NavLink,Button } from 'react-bootstrap';

import {
    FaAngleRight,
    FaTint,
    FaReceipt,
    FaHome
} from "react-icons/fa";

function Perfil() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/inicio",
            name: "Inicio",
            icon: <FaHome />
        },
        {
            path: "/boletas",
            name: "Boletas",
            icon: <FaReceipt />
        },
        {
            path: "/biblioteca",
            name: "Consumo",
            icon: <FaTint />
        },


    ]
    return (
        <>
            <header>
                <Navbar className='navBarA' expand="lg">
                    <div className="container-fluid">
                        <Navbar.Brand>
                            <img className='logoA' src={LogoTryAll} alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="ml-auto"> 
                                <NavLink href="/"><font color="white">Perfil</font></NavLink>
                                <h1><font color="white">|</font></h1>
                                <NavLink href="/"><font color="white">Contactenos</font></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>

            <div className="containerR">
                <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                    <div className="top_section">
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                            <FaAngleRight onClick={toggle} />
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            
            </div>
        </>
    );

}

export default Perfil;