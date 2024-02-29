import { useEffect, useState } from "react"
import { DynamicPage } from "../components/dynamicPage"
import { giveMeCountryDetails } from "../utils/countryFunctions"


export const RandomCountry = ({ rand = "in" }) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    useEffect(() => {
        try {
            async function fetchData() {
                setData(await giveMeCountryDetails(rand))
                setLoading(false)
            }
            fetchData();
        }
        catch (e) {
            console.log(e)
            return (
                <>z
                    <h1>ERROR IN LOADING THE PAGE</h1>
                </>
            )
        }

    }, [])
    return (
        <div className="container">
            {loading ? <h1>loading...</h1> : <DynamicPage data={data} />}
        </div>
    )
}   