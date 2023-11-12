import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Popular from '../Popular/Popular';
import Featured from '../Featured/Featured';
import Review from '../Review/Review';
import About from '../About/About';

const Home = () => {
    return (
        <div className='space-y-6  md:space-y-8 lg:space-y-12 '>
            <Helmet>
                <title>Bistro | Home </title>
            </Helmet>
            <Banner></Banner>
            <div className='mx-auto max-w-6xl space-y-12'>
                <Categories></Categories>
                <About></About>
                <Popular></Popular>
                <Featured></Featured>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;