import React from 'react';
import Banner from '../components/Banner';
import BannerBG from '../components/BannerStyled';
import Feedback from '../components/Feedback';
import PageTitle from '../components/PageTitle';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home" />
            <BannerBG img="assets/img/banner1.jpg">
                <Banner
                    greeting="Travel Pagla"
                />
            </BannerBG>
            <Blog />
            <Feedback />
        </div>
    );
};

export default Home;