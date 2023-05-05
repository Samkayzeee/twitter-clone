import './Home.scss';
import LeftSideBar from '../../components/leftsidebar/LeftSideBar';
import RightSideBar from '../../components/rightsidebar/RightSideBar';

const Home = () => {
    return ( 
        <>
            <main className='main'>
                <div className="lefisidebar">
                    <LeftSideBar />
                </div>

                <div className="content">
                    This is content
                </div>

                <div className="rightsidebar">
                    <RightSideBar />
                </div>
            </main>
        </>
     );
}
 
export default Home;