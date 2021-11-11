import React from 'react';
import Header from '../../../Shared/Header/Header';
import HomeProducts from '../HomeProducts/HomeProducts';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <HomeProducts></HomeProducts>
            
        </div>
    );
};

export default Home;