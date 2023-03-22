import App from "../App";
import CartPage from "../pages/cart/cart-page";
import CityPage from "../pages/city/city.page";
import CountriesPage from "../pages/countries/countries.page";
import CountriesIndex from "../pages/countries/pages/countries-index";
import CountryDetail from "../pages/countries/pages/country-details";
import WelcomePage from "../pages/welcome/welcome.page";

const route = [
    {
        path: '',
        element: <App />,
        children: [
            {
                index: true,
                element: <WelcomePage />
            },
            {
                path:'/countries',
                element:<CountriesPage/>,
                children:[
                    {
                        index:true,
                        element:<CountriesIndex/>
                    },
                    {
                        path:':countryId',
                        element:<CountryDetail/>
                    }
                ]
            },
            {
                path:'/cart',
                element:<CartPage/>
            },
            {
                path:'city/:cityId',
                element:<CityPage/>
            }
        ]
    }
]

export default route