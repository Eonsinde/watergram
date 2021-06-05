import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

import "./title.css";


const Title = () => {
    return ( 
       <header className='title'>
           <h1><a href="#">WaterGram</a></h1>
           <h2>Your Photos</h2>
           {/* <p>Upload images for fun</p> */}
       </header>
    )
}

export default Title;