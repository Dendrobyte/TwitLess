import "./Homepage.css";
import { QuestionCircle } from 'react-bootstrap-icons';

function ErrorPage(){
    return (
        <div className="container bg-color">
            <div className="logo">
                <QuestionCircle className="questionCircleIcon"/>
                <p className="welcome-text">Page not found! If you think this is a bug, please <a href="https://github.com/Dendrobyte/TwitLess/issues">report it here</a> or <a href="https://www.twitter.com/Mobkinz78">tweet it at me.</a></p>
            </div>
        </div>
    )
}



export default ErrorPage;