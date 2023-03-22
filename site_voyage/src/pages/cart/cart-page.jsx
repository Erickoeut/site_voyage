import { useSelector } from "react-redux"
import CityCardCart from "../../components/city-card-cart/city-card-cart";

export default function CartPage() {
    const cart = useSelector(state => state.cart.destination)
    let sum = 0
    for (let item of cart) {
        sum += item.price
    }

    return (<>
        <h2>Mes Voyages </h2>
        <ul>
            {cart.map((city,i) => <CityCardCart key={i}{...city} />)}
        </ul>
        <p>Total : {sum}€</p>
    </>)
}