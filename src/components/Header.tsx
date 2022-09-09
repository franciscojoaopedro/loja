import Link from "next/link";;
import {Nav,Navbar} from "reactstrap";

const Header=()=>{

    return(
        <Navbar container="sm" color="dark" dark>
            <Link href="/" passHref>
            <a className="navbar-brand">
                Inicio
            </a>
            </Link>
            <Nav className="flex-row" navbar>
                <Link href="/products">
                    <a className="nav-link me-2">
                        Produtos
                    </a>
                </Link>
                <Link href="/cart">
                    <a className="nav-link me-2">
                        Carrinho
                    </a>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Header;