import { useEffect, useState } from "react";
import erroImg from "./Errorimg.png";
import { randomCountry } from "../utils/countryFunctions";

const ErrorImg = () => {
    return (
        <>
            <p>Country of the Day: India</p>
            <div className="countryOftheDay">
                <img src={erroImg} alt="Error Img" width="500px" />
                <p>Get to know more about India </p>
            </div>
        </>
    );
};

const FlagImg = ({ setImgErr, cc }) => {
    console.log(cc)
    return (
        <>
            <p>Country of the Day: {cc[1].country}</p>
            <img
                src={`https://flagcdn.com/w640/${cc[0].toLowerCase()}.png`}
                alt="Map of the country"
                onError={() => setImgErr(true)}
                width="400px"
            />
            <p>Get to know more about {cc[1].country} </p>
        </>
    );
};

export const Banner = () => {
    const [loading, setLoading] = useState(true)
    const [imgError, setImgErr] = useState(false);
    const [country, setCountry] = useState(null)
    useEffect(() => {
        async function getRandomCountryName() {
            setCountry(await randomCountry())
            setLoading(false)
        }
        getRandomCountryName()
    }, [])
    return (
        <div>
            {
                loading ? <h1>Loading</h1> : imgError ? (
                    <ErrorImg />
                ) : (
                    <FlagImg setImgErr={setImgErr} cc={country} />
                )}

        </div>
    );
};
