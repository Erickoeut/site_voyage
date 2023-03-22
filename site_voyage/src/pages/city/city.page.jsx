import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { destinationAdd } from "../../store/actions/cart.action"

export default function CityPage() {
    const { cityId } = useParams()
    // const city = cityDetails(cityId)
    const [city, setCity] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/city/${cityId}`)
            .then(res => res.json())
            .then((data) => {
                setCity(data)
            })
    }, [])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleAddDestination = useCallback((city) => {
        dispatch(destinationAdd(city))
    })

    return (
        city && <>
            <h2>{city.cityName}</h2>

            <img src={city.image} alt="" />
            <p>{city.desc}</p>
            <p>Prix : {city.price}€</p>
            <button onClick={() => handleAddDestination(city)}>Ajouter au panier</button>
            <button onClick={() => navigate('/countries/' + city.countryId)}>Retour</button>
        </>
    )
}