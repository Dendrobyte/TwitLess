import logo from "../assets/logo.png";
import "./Homepage.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Twitter, QuestionCircle } from 'react-bootstrap-icons';

function Homepage(){

    const [infoToggle, setInfoToggle] = useState(false);

    let infoBox = () => {
        if (infoToggle) {
        return (
            <div className="infoPopupText">
                <div className="infoPopupTextTitle">
                    <p>Why Only Twitter Login?</p>
                </div>
                <div className="infoPopupTextBody">
                    <p>TwitLess uses your Twitter account to show you a minimal
                        version of Twitter. Thus, we require you to log in with your
                        Twitter account. It also means we don't have to do image
                        verification or handling any data!
                        TwitLess does not track any of your data or store anything
                        beyond simple toggles in the settings page. How this works,
                        and what pages show, can be found on the info page.</p>
                </div>
            </div>
            
        );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    return (
        <div className="container">
            <div className="logo">
                <img src={logo} className="App-logo" alt="TwitLess Logo" />
                <p className="welcome-text">Welcome to TwitLess... for it has officially hatched!</p>
            </div>
            <div className="buttons">
                <div className="loginButtonBody">
                    <Button size="md" className="loginButton">
                        <div className="loginButtonText">
                            <Twitter />{' Log in with Twitter'}
                        </div>
                    </Button>
                </div>
                <div className="infoButtonBody">
                    <QuestionCircle className="qCircleIcon" onClick={() => setInfoToggle(!infoToggle)}/>
                    <div className="infoButtonText">
                       
                        {infoBox()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;