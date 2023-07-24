import React from 'react';
import useTitle from '../../Hooks/UseHooks';
import Hero from './Hero';
import ShowAllToy from './ShowAllToy';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero />
            <ShowAllToy/>
        </div>
    );
};

export default Home;