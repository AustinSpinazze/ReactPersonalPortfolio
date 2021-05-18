import React from 'react';
import Loaders from './Loader';

const index = (props) => {
    return (
        <Loaders type={props.loader} complete={props.complete}/>
    );
};

export default index;
