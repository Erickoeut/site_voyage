import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CityCard from "../../components/city-card/city-card";
import NavBar from "../../containers/nav-bar/nav-bar";
import style from './welcome.module.css'
export default function WelcomePage() {
    const navigate = useNavigate()

    const [topVoyage, setTopVoyage] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/city')
            .then(res => res.json())
            .then((data) => {
                const top = data.filter(city=>city.top==true)
                setTopVoyage(top)
            })
    }, [])
    
    return (
        <>
            <div className={style.background}>
                <div>
                    <h2>Laissez vous emporter par une de nos destinations</h2>
                    <button onClick={() => navigate('/countries')}>Go</button>
                </div>
            </div>

            <div className={style.topDestination}>
                <h2>Le top de nos destinations :</h2>
                <div>
                    {topVoyage.map(city => <CityCard key={city.cityId} city={city} />)}
                </div>
            </div>
        </>
    )
}