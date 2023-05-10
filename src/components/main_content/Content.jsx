import { Link } from 'react-router-dom';
import './Content.scss';

const Content = () => {
    return ( 
        <>
            <div className="main-contents">
                <div className="links">
                    <h2>Home</h2>
                    <div>
                        <Link to={'/'}> <p>For You</p> </Link>
                        <Link to={'/'}> <p>Following</p> </Link>
                    </div>
                </div>

                <div className="search">
                    
                </div>
            </div>
        </>
     );
}
 
export default Content;