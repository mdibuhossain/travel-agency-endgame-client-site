import React from 'react';
import Banner from '../components/Banner';
import BannerBG from '../components/BannerStyled';
import PageTitle from '../components/PageTitle';
import Service from '../components/Service';
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
        </div>
    );
};

export default Home;