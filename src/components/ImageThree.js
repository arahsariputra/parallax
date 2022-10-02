import React from 'react';
import { Parallax } from 'react-parallax';
import SpaceStation from '../img/spaceStation.jpeg';

const ImageTwo = () => (
    <Parallax className='image' bgImage={SpaceStation} strength={800}>
        <div className='content'>
            <span className='img-txt'> a trip to space</span>
        </div>
    </Parallax>
);

export default ImageTwo