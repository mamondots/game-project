
import GoToTop from "../../Hooks/GoToTop";
import About from "../About/About";
import Article from "../Article/Article";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import Introduction from "../Introduction/Introduction";
import Match from "../Match/Match";
import Meet from "../Meet/Meet";
import Shop from "../Shop/Shop";
import Team from "../Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Introduction></Introduction>
            <Featured></Featured>
            <Match></Match>
            <Shop></Shop>
            <Article></Article>
            <Meet></Meet>
            <Contact></Contact>
            <Team></Team>
            <GoToTop></GoToTop>
        </div>
    );
};

export default Home;