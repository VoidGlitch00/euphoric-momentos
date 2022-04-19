import React from 'react';
import image from '../../Images/IMG_3137.JPG';

const NewsLetter = () => {
    return (
        <div className="my-4">
            <h2>Get latest click and behind the story!</h2>
            <div>
                <img className="w-75" src={image} alt="Moonlit"/>
                <p>This is the moment which you want to crave for! Humayun Ahmed used to say the beauty of this "Full Moon".</p>
            </div>
        </div>
    );
};

export default NewsLetter;