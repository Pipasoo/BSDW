import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button, Nav, Navbar, NavLink, Container, Form} from 'react-bootstrap';
import LogoTryAll from '../images/logotryall.png';

function Index() {
    return (
        <>
            <header>
                <Navbar className='navBar' expand="lg">
                    <div className="container-fluid">
                        <Navbar.Brand>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="contenedor me-auto mb-2 mb-lg-0">
                                <NavLink href="/"><font color="white">Persona</font></NavLink>
                                <NavLink href="/"><font color="white">Empresa</font></NavLink>
                            </Nav>
                            <Button href="/registro">Registro</Button>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </header>

            <Container className="d-flex justify-content-end align-items-center vh-100">
                <div className=" login card p-4">
                    <a>
                        <img src={LogoTryAll} />
                    </a>
                    <Form>
                    <Form.Group className="mb-3 text-start">
                            <Form.Label><font color="white">Email</font></Form.Label>
                            <Form.Control
                                type="email"
                                id="correo"
                                placeholder='Ingrese su email'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-start">
                            <Form.Label><font color="white">Ingrese su contraseña</font></Form.Label>
                            <Form.Control
                                type="password"
                                id="pass"
                                placeholder='Contraseña'
                            />
                        </Form.Group>
                        <Button className="loginboton" type="submit">Ingresar</Button>
                    </Form>
                </div>
            </Container>
            <footer></footer>
        </>
    );
}

export default Index;