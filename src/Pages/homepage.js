import { Heading, InputField, NewCustomButton } from "../components/commonComponents"
import { Banner } from "../components/banner."
import { Navigation } from "../components/navigation"
import { Link } from "react-router-dom"
export const HomePage = () => {
    return (
        <div className="countrywebApp">
            <div className="headingBar">
                <div className="topBar">
                    <div className="heading">
                        <Heading headingName="PROJECT | Countries Data" />
                    </div>
                    <div className="theme">
                        <InputField forName="countrySearch" placeHolderName="ex:India" labelName="🔍 Search" />
                    </div>
                </div>
                <div className="bottomBar">
                    <Navigation />
                </div>
            </div>
            <div className="body">
                <div className="banner">
                    <Link to="/aboutme">
                        <Banner />
                    </Link>
                </div>
                <div className="facts">
                    <Link to="/random">
                        <NewCustomButton buttonName="Random Country Facts" />
                    </Link>
                </div>
            </div>
        </div>
    )
}