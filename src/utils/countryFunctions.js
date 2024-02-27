const countryDataFetcher = async () => {
    try {
        const tdata = await fetch("https://api.first.org/data/v1/countries")
        const tdata2 = await tdata.json()
        return tdata2
    } catch (error) {
        console.log("Something went wrong")
    }
}

export const RandomeNumberGenerator = () => {
    return Math.ceil(Math.random(100) * 100)
}

export const randomCountry = async () => {
    const jData = await countryDataFetcher()
    const randomCountry = Object.entries(jData.data)[RandomeNumberGenerator()]
    const [countryCode, countryData] = randomCountry
    console.log(countryCode, "  ", countryData.country);
}

export const giveMeCountriesCode = async () => {
    const jData = await countryDataFetcher()
    console.log(Object.keys(jData.data))
}

export const giveMeCountriesName = async () => {
    const jData = await countryDataFetcher()
    const countryArr = Object.entries(jData.data)
    console.log(countryArr.map((i) => {
        return (i[1].country)
    }))
}
