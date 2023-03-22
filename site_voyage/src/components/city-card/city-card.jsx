import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { destinationAdd } from '../../store/actions/cart.action'
import style from './city-card.module.css'
export default function CityCard({city}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAddDestination = useCallback((city)=>{
        dispatch(destinationAdd(city))
    })

    return (
        <>
            <article className={style.cityCard}>
                <img src={city.image} alt={city.cityName + 'illustration'} />
                    <h3>
                        Destination : {city.cityName}
                    </h3>
                <div>
                    <p>
                        prix : {city.price}€
                    </p>
                    <div>
                    <button onClick={() => navigate('/city/' +city.cityId)}>Détails</button>
                    <button onClick={()=>handleAddDestination(city)}>Ajouter au panier</button>
                    </div>
                </div>
            </article>

        </>
    )
}