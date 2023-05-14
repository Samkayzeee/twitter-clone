import { Link } from 'react-router-dom';
import './Content.scss';
import profile_pic from '../../assets/profile_pic.jpeg';
import posts from "../../assets/data/posts.json";

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
                        <input type="text" placeholder='What is Happening?!'/>
                        <div className="links">
                            <div className="main-links">
                                <i className="fa-regular fa-image"></i>
                                <i className="fa-regular fa-image"></i>
                                <i className="fa-regular fa-calendar"></i>
                                <i className="fa-regular fa-face-smile"></i>
                                <i className="fa-regular fa-calendar"></i>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <button>Tweet</button>
                        </div>
                    </div>
                </div>

                <div className="posts">
                   {
                    posts.map(post => {
                        return(
                            <div className="main-post" key={post.id}>
                                <div className="profile-pic">
                                    <img src={post.profile_pic} alt="" />
                                </div>

                                <div className="contents">
                                    
                                </div>
                            </div>
                        )
                    })
                   }
                </div>
            </div>
        </>
     );
}
 
export default Content;