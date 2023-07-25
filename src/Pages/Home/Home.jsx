import React from 'react';
import useTitle from '../../Hooks/UseHooks';
import Gallery from './Gallery/Gallery';
import Hero from './Hero';
import ShowAllToy from './ShowAllToy';
import Testimonial from './Testimonial';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero />
            <Gallery/>
            <ShowAllToy />
            <Testimonial/>
        </div>
    );
};

export default Home;