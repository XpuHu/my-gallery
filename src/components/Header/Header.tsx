import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Profile from './Profile/Profile';

const Header = () => {

    return (
        <Navbar bg='light' expand='true'>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className={styles.menu}>
                        <Link to='/'>Галерея</Link>
                        <Link to='/about'>Обо мне</Link>
                    </Nav>
                    <Profile/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;