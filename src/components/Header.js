import { Link, NavLink } from "react-router-dom"
import { useContext } from "react"
import {FaShoppingCart} from "react-icons/fa"
import "./header.css"
import { cartContext } from "../Context"

export default function Header(){
    const {cart} = useContext(cartContext)
    const activeLink = ({isActive})=>{
                        return{
                            color:isActive ? "darkorange" : "white"
                        }

                    }
    return(
        <header>
              <Link to="/"><h3>Logo</h3></Link>

              <nav>
                    <NavLink to="/" style={activeLink}>Products</NavLink>
                    <NavLink to="/buy" style={activeLink}>Buy</NavLink>
                    <NavLink to="/sell" style={activeLink}>Sell</NavLink>
                    <NavLink to="/contact" style={activeLink}>Contact us</NavLink>
              </nav>

            <Link to='/cart'>
                        <span>
                       Cart <FaShoppingCart /> <small>{cart.length}</small>
                   </span>
            </Link>
        </header>
    )
}