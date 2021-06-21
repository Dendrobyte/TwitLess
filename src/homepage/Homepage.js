import logo from "./logo.png";
import "./Homepage.css";

function Homepage(){
    return (
        <div className="container bg-color">
            <div className="logo">
                <img src={logo} className="App-logo" alt="TwitLess Logo" />
                <p className="welcome-text">Welcome to TwitLess... for it has officially hatched!</p>
            </div>
        </div>
    )
}



export default Homepage;