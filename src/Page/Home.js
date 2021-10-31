import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import BannerBG from '../components/BannerStyled';
import Service from '../components/Service';

const Home = () => {
    return (
        <div>
            <BannerBG img="assets/img/banner.jpg">
                <Banner
                    greeting="historical landmarks"
                />
            </BannerBG>

            <Service />

        </div>
    );
};

export default Home;