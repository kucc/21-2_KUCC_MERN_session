import {Link} from 'react-router-dom';
import './Home.css';

const Home = () => {
    return(
        <div>
            <div className="homeTitle">
                <h1>Welcome to my Homepage!</h1>
            </div>
            <div className="homeNavBox">
                <nav className="homeNav">
                    <ul>
                        <li>
                            <Link className="homeLink" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="homeLink" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="homeLink" to="/login">Login</Link>
                        </li>
                        <li>
                            <Link className="homeLink" to="/signup">SignUp</Link>
                        </li>
                        <li>
                            <Link className="homeLink" to="/board">Board</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Home;