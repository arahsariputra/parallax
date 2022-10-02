import React from 'react';
import { Parallax } from 'react-parallax';
import Satellite from '../img/satellite.jpeg';

const ImageTwo = () => (
    <Parallax className='image' bgImage={Satellite} strength={800}>
        <div className='content'>
            <span className='img-txt'> a trip to space</span>
        </div>
    </Parallax>
);

export default ImageTwo