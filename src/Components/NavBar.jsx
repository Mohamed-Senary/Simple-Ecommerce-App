import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function NavBar (){
    const itemCount = useSelector(state =>state.cart.cartCount)

    return(
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                        <Link className="navbar-brand text-success" to={"/"}>Products App</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <a className="nav-link" ><b>Sign Up</b></a>
                                <a className="nav-link" ><b>Login</b></a>
                                <Link to={"/cart"} className="nav-link">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="badge text-bg-secondary">{itemCount}</span>
                                </Link>
                            </div>
                        </div>
                </div>
            </nav>
    )
}