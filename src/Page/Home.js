import React from 'react';
import Banner from '../components/Banner';
import BannerBG from '../components/BannerStyled';
import PageTitle from '../components/PageTitle';
import Service from '../components/Service';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home" />
            <BannerBG img="assets/img/banner1.jpg">
                <Banner
                    greeting="WORLD TRIP"
                />
            </BannerBG>
            <Service />
        </div>
    );
};

export default Home;