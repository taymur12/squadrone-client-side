import React from 'react';
import Header from '../../../Shared/Header/Header';
import DroneExtra from '../../DroneExtra/DroneExtra';
import HomeProducts from '../HomeProducts/HomeProducts';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <HomeProducts></HomeProducts>
            <DroneExtra></DroneExtra>
        </div>
    );
};

export default Home;