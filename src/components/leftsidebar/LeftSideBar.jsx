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
                <li> <Link> Home </Link> </li>
                <li> <Link><i className="fa-solid fa-hashtag"></i> Explore </Link> </li>
                <li> <Link> Communities </Link> </li>
                <li> <Link> Notifications </Link> </li>
                <li> <Link> Messages </Link> </li>
                <li> <Link> Bookmarks </Link> </li>
                <li> <Link> Twitter Blue </Link> </li>
                <li> <Link> Profile </Link> </li>
                <li> <Link> More </Link> </li>
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
                  i
              </div>
            </div>
        </div>
    </>
  )
}
