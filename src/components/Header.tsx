import Link from "next/link";;
import {Nav,Navbar} from "reactstrap";

const Header=()=>{

    return(
        <Navbar container="sm" color="primary" primary>
            <Link href="/" passHref>
            <a className="navbar-brand text-white fw-bold">
                Inicio
            </a>
            </Link>
            <Nav className="flex-row gap-32" navbar>
                <Link href="/products" passHref>
                    <a className="nav-link me-2 text-white fw-bold">
                        Produtos
                    </a>
                </Link>
                <Link href="/cart" passHref>
                    <a className="nav-link me-2 text-white fw-bold">
                        Carrinho
                    </a>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Header;