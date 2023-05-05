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
                <li> <Link><i className="fa-solid fa-house"></i> Home </Link> </li>
                <li> <Link><i className="fa-solid fa-hashtag"></i> Explore </Link> </li>
                <li> <Link><i className="fa-solid fa-user-group"></i> Communities </Link> </li>
                <li> <Link><i className="fa-regular fa-bell"></i> Notifications </Link> </li>
                <li> <Link><i className="fa-regular fa-envelope"></i> Messages </Link> </li>
                <li> <Link><i className="fa-regular fa-bookmark"></i> Bookmarks </Link> </li>
                <li> <Link><i className="fa-brands fa-square-twitter"></i> Twitter Blue </Link> </li>
                <li> <Link><i className="fa-regular fa-user"></i> Profile </Link> </li>
                <li> <Link><i className="fa-solid fa-ellipsis"></i> More </Link> </li>
              </ul>
            </div>

            <button>Tweet</button>

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
