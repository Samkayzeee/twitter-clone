import './RightSideBar.scss';
import trending from '../../assets/data/trends.json';
import follow from '../../assets/data/follow.json';
import { Link } from 'react-router-dom';

export default function RightSideBar() {
  return (
    <>
      <div className="main-rightsidebar">
        <form action="">
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
          <input type="search" placeholder='Search Twitter' />
        </form>

        <div className="trends">
            <h2>Trends for you</h2>
            {
              trending.map((trends) => {
                return(
                  <div className='main-trend' key={trends.id}>
                      <div className="contents">
                        <p>{trends.trending}</p>
                        <h5>{trends.title}</h5>
                        <p>{trends.tweets} Tweets</p>
                      </div>

                     <div><i className="fa-solid fa-ellipsis"></i></div>
                  </div>
                )
              })
            }
            <Link to={'/'}>Show more</Link>
        </div>

        <div className="follow">
            <h2>Who to follow</h2>
            {
              follow.map((new_follow) => {
                return (
                  <div className="main-follow" key={new_follow.id}>
                      <div className="main-content">
                        <img src={new_follow.img} alt="Profile Pic" />
                        <div className="profile-content">
                          <h5>{new_follow.title}</h5>
                          <p>@{new_follow.handle}</p>
                        </div>
                      </div>

                      <button>Follow</button>
                  </div>
                )
              })
            }
            <Link to={'/'}>Show more</Link>
        </div>

        <div className="footer">
          <div className="first">
            <Link to={'/'}>Terms of Service</Link>
            <Link to={'/'}>Privacy Policy</Link>
            <Link to={'/'}>Cookie Policy</Link>
          </div>

          <div className="second">
            <Link to={'/'}>Accessibility</Link>
            <Link to={'/'}>Ads info</Link>
            <Link to={'/'}>More...</Link>
            <span><i className="fa-regular fa-copyright"></i> 2023 X Corp.</span>
          </div>
        </div>

      </div>
    </>
  )
}
