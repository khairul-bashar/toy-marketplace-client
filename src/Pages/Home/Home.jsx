import React from 'react';
import useTitle from '../../Hooks/UseHooks';
import Gallery from './Gallery/Gallery';
import Hero from './Hero';
import ShowAllToy from './ShowAllToy';
import Services from '../../Components/Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero />
            <Gallery/>
            <ShowAllToy />
            <Services/>
        </div>
    );
};

export default Home;