import React from 'react';
import useTitle from '../../Hooks/UseHooks';
import Gallery from './Gallery/Gallery';
import Hero from './Hero';
import ShowAllToy from './ShowAllToy';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero />
            <Gallery/>
            <ShowAllToy />
            {/* <Testimonial/> */}
        </div>
    );
};

export default Home;