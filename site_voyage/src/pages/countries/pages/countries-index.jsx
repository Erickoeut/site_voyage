
import { useEffect, useState } from "react"
// import { fetchVoyages } from "../../../api/voyage.api"
import CountryCard from "../../../components/country-card/country-card"
import style from './countries-index.module.css'
export default function CountriesIndex() {
    
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/country')
            .then(res => res.json())
            .then((data) => {
                setCountries(data)
            })
    }, [])

    return (
        <div className={style.cardList} >
            <h2>Liste des pays</h2>
            <div>
                {countries.map(country => <CountryCard key={country.countryId} {...country} />)}
            </div>
        </div>
    )
}