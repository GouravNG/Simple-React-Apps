export const HomePage = () => {
    return (
        <div className="countrywebApp">
            <div className="headingBar">
                <div className="topBar">
                    <div className="heading"><h1>PROJECT | COUTRIES DATA</h1></div>
                    <div className="theme">
                        <label for='searchField'><span>🔍</span>Search</label>
                        <input type="text" id="searchField" placeholder="ex: india" ></input>
                    </div>
                </div>
                <div className="bottomBar">
                    <div className="navigation">Regions</div>
                    <div className="aboutme">About me</div>
                </div>
            </div>
            <div className="body">
                <div className="banner">
                    Contry of the day
                </div>
                <div className="facts">
                    <button>Random country | Random Fact</button>
                </div>
            </div>
        </div>
    )
}