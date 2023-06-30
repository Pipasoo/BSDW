import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button, Nav, Navbar, NavLink, Container, Form} from 'react-bootstrap';
import LogoTryAll from '../images/logotryall.png';

function Registro() {
    return (
        <>
            <header>
                <Navbar className='navBar' expand="lg">
                    <div className="container-fluid">
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="contenedor me-auto mb-2 mb-lg-0">
                                <NavLink href="/"><font color="white">Persona</font></NavLink>
                                <h1><font color="white">|</font></h1>
                                <NavLink href="/"><font color="white">Empresa</font></NavLink>
                            </Nav>
                            <Button className="botonav" href="/">Inicio</Button>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>

            <Container className="d-flex justify-content-center align-items-center vh-100">
                <div className=" login card p-4 w-25">
                    <a>
                        <img src={LogoTryAll} />
                    </a>
                    <Form>
                        <Form.Group className="mb-3 text-start">
                            <Form.Label><font color="white">Nombre</font></Form.Label>
                            <Form.Control
                                type="text"
                                id="nombre"
                                placeholder='Ingrese su nombre'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-start">
                            <Form.Label><font color="white">Apellido Paterno</font></Form.Label>
                            <Form.Control
                                type="text"
                                id="subnameone"
                                placeholder='Ingrese su apellido paterno'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-start">
                            <Form.Label><font color="white">Apellido Materno</font></Form.Label>
                            <Form.Control
                                type="text"
                                id="subnametwo"
                                placeholder='Ingrese su apellido materno'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-start">
                            <Form.Label><font color="white">Email</font></Form.Label>
                            <Form.Control
                                type="email"
                                id="correo"
                                placeholder='Ingrese su email'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-start">
                            <Form.Label><font color="white">Contraseña</font></Form.Label>
                            <Form.Control
                                type="password"
                                id="pass"
                                placeholder='Ingrese su contraseña'
                            />
                        </Form.Group>
                        <Button className="loginboton" type="submit">Ingresar</Button>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default Registro;