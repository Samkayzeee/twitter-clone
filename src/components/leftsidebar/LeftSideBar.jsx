import { Link } from 'react-router-dom';
import './LeftSideBar.scss';
import profile_pic from '../../assets/profile_pic.jpeg';

export default function LeftSideBar() {
  return (
    <>
        <div className="main-leftsidebar">
            <div className="logo">
                <Link to={'/'}> <i className="fa-brands fa-twitter"></i> </Link>
            </div>

            <div className="links">
              <ul>
                <li> <Link><i className="fa-solid fa-house"></i> <span>Home</span> </Link> </li>
                <li> <Link><i className="fa-solid fa-hashtag"></i> <span>Explore</span> </Link> </li>
                <li> <Link><i className="fa-solid fa-user-group"></i> <span>Communities</span> </Link> </li>
                <li> <Link><i className="fa-regular fa-bell"></i> <span>Notifications</span> </Link> </li>
                <li> <Link><i className="fa-regular fa-envelope"></i> <span>Messages</span> </Link> </li>
                <li> <Link><i className="fa-regular fa-bookmark"></i> <span>Bookmarks</span> </Link> </li>
                <li> <Link><i className="fa-brands fa-square-twitter"></i> <span>Twitter Blue</span> </Link> </li>
                <li> <Link><i className="fa-regular fa-user"></i> <span>Profile</span> </Link> </li>
                <li> <Link><i className="fa-solid fa-ellipsis"></i> <span>More </span></Link> </li>
              </ul>
            </div>

            <button><span>Tweet</span><span>+<i className="fa-solid fa-feather-pointed"></i></span></button>

            <div className="profile">
              <img src={profile_pic} alt="profile-pic" />
              <div className="profile-content">
                <h5>Abdulsamad</h5>
                <p>@Samkayzee1</p>
              </div>

              <div className="icon">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
            </div>
        </div>
    </>
  )
}
