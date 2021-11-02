import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import BannerBG from '../components/BannerStyled';
import Newsletter from '../components/Newsletter';
import Service from '../components/Service';
import { useDatabase } from '../Hook/useDatabase';

const Home = () => {
    const { service } = useDatabase();

    return (
        <div>
            <BannerBG img="assets/img/banner.jpg">
                <Banner
                    greeting="historical landmarks"
                />
            </BannerBG>
            <Service />
            <Newsletter />
        </div>
    );
};

export default Home;