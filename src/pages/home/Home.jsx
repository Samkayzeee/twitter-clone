import './Home.scss';
import LeftSideBar from '../../components/leftsidebar/LeftSideBar';
import RightSideBar from '../../components/rightsidebar/RightSideBar';
import Content from '../../components/main_content/Content';

const Home = () => {
    return ( 
        <>
            <main className='main'>
                <div className="lefisidebar">
                    <LeftSideBar />
                </div>

                <div className="together">
                    <div className="content">
                        <Content />
                    </div>

                    <div className="rightsidebar">
                        <RightSideBar />
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default Home;