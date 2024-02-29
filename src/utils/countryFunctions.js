import testData from "./testData.json"
const countryDataFetcher = async () => {
    try {
        // const tdata = await fetch("https://api.first.org/data/v1/countries")
        // const tdata2 = await tdata.json()
        return testData //work around till cors issue fixed
    } catch (error) {
        console.log("Something went wrong")
    }
}

const countryDetailsFetcher = async (cc) => {
    try {
        const tdata = await fetch(`https://restcountries.com/v3.1/alpha/${cc}`)
        const cData = await tdata.json()
        return cData
    } catch (error) {
        console.log("SOMETHIN WENT WRONG")
    }
}

export const RandomeNumberGenerator = () => {
    return Math.ceil(Math.random(100) * 100)
}

export const randomCountry = async () => {
    const jData = await countryDataFetcher()
    const randomCountry = Object.entries(jData.data)[RandomeNumberGenerator()]
    const [countryCode, countryData] = randomCountry
    return countryCode
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
export const giveMeCountryDetails = async (cc) => {
    try {
        let cdata = await countryDetailsFetcher(cc)
        const newData = {
            name: cdata[0].name.common,
            currencies: cdata[0].currencies,
            capital: cdata[0].capital[0],
            languages: cdata[0].languages,
            neighbours: cdata[0].borders,
            landArea: cdata[0].area,
            officialName: cdata[0].name.official,
            population: cdata[0].population,
            timezone: cdata[0].timezones[0],
            continent: cdata[0].continents[0],
            region: cdata[0].region,
            flagLinks: cdata[0].flags.png,
            flagalt: cdata[0].flags.alt
        }
        return (newData)
    }
    catch (e) {
        console.log(e.message)
    }
}
