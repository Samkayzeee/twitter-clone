import { Link } from 'react-router-dom';
import './Content.scss';
import { Icon } from '@iconify/react';
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
                                    <div className="head">
                                        <h4>{post.title}</h4> <p>@{post.handle} . {post.time}</p>
                                    </div>
                                    <p className='desc'>{post.desc}</p>
                                    {
                                        post.post_img ? 
                                        <div className="post-img">
                                            <img src={post.post_img} alt="profile_pic" />
                                        </div> : 
                                        null
                                    }
                                    <div className="reactions">
                                        <p><Icon icon="iconamoon:comment-thin" className='icon'/><span>{post.comments}</span></p>
                                        <p><Icon icon="system-uicons:retweet" className='icon'/><span>{post.retweets}</span></p>
                                        <p><Icon icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" className='icon'/><span>{post.likes}</span></p>
                                        <p><Icon icon="prime:align-left" rotate={3} className='icon'/> <span>{post.views}</span></p>
                                        <p><Icon icon="uil:upload" className='icon'/></p>
                                    
                                    </div>
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