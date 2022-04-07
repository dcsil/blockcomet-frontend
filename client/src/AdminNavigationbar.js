import { Navbar, Button, Container } from 'react-bootstrap';
import './css/Navigationbar.css';
import logo from './assets/blockcomet_logo_no_name.png';
import { Link } from "react-router-dom";
import useToken from './useToken'
import { makeGetReq } from './helpers'
import { BsArrowLeftShort } from "react-icons/bs";

const getAdminButtons = (onLogout) => {
    return <>
        <Link to="/dashboard"><Button className="logout-btn" variant="primary" size="lg" data-testid="logout-btn"> <h5>Dashboard</h5> </Button></Link>
        <Link to="/"><Button className="logout-btn" variant="primary" size="lg" data-testid="logout-btn" onClick={onLogout}> <h5>Logout</h5> </Button></Link>
    </>
}

function Navigationbar(props) {
    const { token } = useToken()
    const onLogout = () => {
        localStorage.removeItem('token')
        makeGetReq('logout', token)
    }
    return (
        <Navbar bg="light" expand="lg">
            {!token && <Link to="/"><BsArrowLeftShort id="navbar-back" /></Link>}
                <Container id="bc-navbar">
                    <Link id="logo-link" to="/">
                        <img src={logo} className="logo-navbar" alt="logo" data-testid="logo" />
                        <Navbar.Brand id="text-navbar">BlockComet</Navbar.Brand>
                    </Link>
                </Container>

            {token && getAdminButtons(onLogout)}
        </Navbar>
    )
}

export default Navigationbar;