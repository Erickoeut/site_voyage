import style from './nav-bar.module.css'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function NavBar() {
    const travelNb = useSelector(state => state.cart.destination).length
    // console.log(cart);
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <NavLink to={''}>Accueil</NavLink>
                </li>

                <li>
                    <NavLink to={'/countries'}>Les pays</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to={'cart'}>Panier{travelNb > 0 && `(${travelNb} article${travelNb > 1 ? 's' : ''})`}</NavLink>
                </li>
            </ul>
        </nav>
    )
}