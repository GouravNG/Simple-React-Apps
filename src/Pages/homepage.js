export const HomePage = () => {
    return (
        <div className="countrywebApp">
            <div className="headingBar">
                <div className="topBar">
                    <div>Hamberger</div>
                    <div className="heading">Site Name</div>
                    <div className="theme">dark mode</div>
                </div>
                <div className="bottomBar">
                    <div className="navigation">continents</div>
                    <div className="aboutme">About me</div>
                </div>
            </div>
            <div className="body">
                <div className="banner">
                    Contry of the day
                </div>
                <div className="facts">
                    <div className="countryDrop">Select Countries</div>
                    <div className="factDrop">Select Fact</div>
                    <div className="button">Genrate button</div>
                </div>
            </div>
        </div>
    )
}