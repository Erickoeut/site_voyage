import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { destinationDelete } from '../../store/actions/cart.action'
import style from './city-card-cart.module.css'
export default function CityCardCart({ image, cityName, price, selectId }) {
    const dispatch = useDispatch()
    const handleRemove = useCallback((selectId) => {
        dispatch(destinationDelete(selectId))
    })
    return (
        <>
            <li className={style.cityCard}>
                <h3>
                    {cityName}
                </h3>
                <p>
                    prix : {price}€
                </p>
                <button onClick={() => handleRemove(selectId)}>Retirer</button>
            </li>
        </>
    )
}