import { Link } from 'react-router-dom';
import './Content.scss';
import profile_pic from '../../assets/profile_pic.jpeg';

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
                <img src={profile_pic} alt="profile_pic" />
                
                    <div className="main-search">
                        <input type="text" placeholder='What is Happening?'/>
                        <div className="links">
                            <div className="main-links">

                            </div>
                            <button>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Content;