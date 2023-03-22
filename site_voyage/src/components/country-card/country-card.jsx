import { useNavigate } from "react-router-dom"
import style from './country-card.module.css'
export default function CountryCard({ countryId, name ,destinations}) {
    const navigate = useNavigate()
    return (<article className={style.countryCard}>
        <img src={destinations[0].image} alt={name + 'illustration'} />
            <h3>{name}</h3>
        <div>
            <p>
                {destinations.length} destination{destinations.length > 1 && 's'}
            </p>
            <button onClick={() => navigate('/countries/' + countryId)}>Go</button>
        </div>
    </article>)
}