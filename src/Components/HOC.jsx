import React, { useEffect, useState } from 'react';
import Loader from './Loader';

const HOC = ({ children }) => {
    const [useLoading, setUseLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setUseLoading(false)
        }, 1000);
    }, [])
    if (useLoading) {
        return <Loader/>
    }
    return children;
};

export default HOC;