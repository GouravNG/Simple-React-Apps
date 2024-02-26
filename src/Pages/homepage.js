import { Heading, InputField, NewCustomButton } from "../components/commonComponents"
import { Banner } from "../components/banner."
import { Navigation } from "../components/navigation"
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
                    <Banner />
                </div>
                <div className="facts">
                    <NewCustomButton buttonName="Random Country Facts" />
                </div>
            </div>
        </div>
    )
}