import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import CityCard from "../../../components/city-card/city-card";
import style from './country-details.module.css'

export default function CountryDetail() {
    const { countryId } = useParams()
    // const country = fetchDestinationPays(countryId)
    const [country, setCountry] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/country/${countryId}`)
            .then(res => res.json())
            .then((data) => {
                setCountry(data)
            })
    }, [])

    const navigate = useNavigate()
    return (<>
    {country&&<div className={style.countryDetails}>
        <h2>Destination {country.name}</h2><button onClick={()=>navigate('/countries')}>Retour</button>
        <div >
            {country.destinations.map((city) => <CityCard key={city.cityId} city={city} />)}
        </div>
    </div>}
    </>
    )
}