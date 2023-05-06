import './RightSideBar.scss';
import trending from '../../assets/data/trends.json';

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
        </div>

      </div>
    </>
  )
}
