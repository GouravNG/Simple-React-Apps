const ListMaker = ({ neighbours }) => {
    return (
        <ul>
            {neighbours.map((i) => {
                return (
                    <li>{i}</li>
                )
            })}
        </ul>
    )

}
export const DynamicPage = ({ data }) => {
    return (
        <>
            <div className="upperBox">
                <div className="mapBox">
                    <div className="mapImg">
                        <img style={{ paddingTop: "2em" }} src={data.flagLinks} alt={data.flagalt} />
                    </div>
                    <div className="mainText">
                        <p>{data.name}</p>
                        <p>{data.capital}</p>
                    </div>
                </div>
                <div className="geoBox">GeoMap</div>
            </div>
            <div className="lowerBox">
                <div className="left">
                    <ul>
                        <li>Continent: {data.continent}</li>
                        <li>Timezone: {data.timezone}</li>
                        <li>Land Area: {data.landArea}</li>
                        <li>Population: {data.population}</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>currencies
                            <ul>
                                <li>CurrencyCode:{Object.keys(data.currencies)[0]}</li>
                                <li>CurrencySymbol:{Object.entries(data.currencies)[0][1].symbol}</li>
                                <li>CurrencyName:{Object.entries(data.currencies)[0][1].name}</li>
                            </ul>
                        </li>
                        <li>
                            Shared the border with
                            <ListMaker neighbours={data.neighbours} />
                        </li>
                        <li>Languages Spoken: {Object.entries(data.languages)[0][1]}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}