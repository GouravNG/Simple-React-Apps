import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link to="/aboutme">Navigation | </Link> {/* for now let it be like this */}
            </div>
            <div className="aboutme">
                <Link to="/aboutme"> Aboutme</Link>
            </div>
        </>
    )
}