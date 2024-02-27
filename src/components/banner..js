import { useState } from "react";
import erroImg from "./Errorimg.png";

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

const FlagImg = ({ setImgErr }) => {
    return (
        <>
            <p>Country of the Day: India</p>
            <img
                src="https://flagcdn.com/w640/in.png"
                alt="Map of the country"
                onError={() => setImgErr(true)}
                width="400px"
            />
            <p>Get to know more about India </p>
        </>
    );
};

export const Banner = () => {
    const [imgError, setImgErr] = useState(false);
    return (
        <div>
            {imgError ? (
                <ErrorImg />
            ) : (
                <FlagImg setImgErr={setImgErr} />
            )}
        </div>
    );
};
