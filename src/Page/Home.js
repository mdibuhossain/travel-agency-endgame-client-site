import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import BannerBG from '../components/BannerStyled';
import PageTitle from '../components/PageTitle';
import Service from '../components/Service';
import { useDatabase } from '../Hook/useDatabase';

const Home = () => {
    const { service } = useDatabase();

    return (
        <div>
            <PageTitle title="Home" />
            <BannerBG img="assets/img/banner.jpg">
                <Banner
                    greeting="WORLD TRIP"
                />
            </BannerBG>
            <Service />
        </div>
    );
};

export default Home;