import React from 'react';
import Loaders from './Loader';

const index = ({ loader }) => {
    return (
        <Loaders type={loader}/>
    );
};

export default index;
