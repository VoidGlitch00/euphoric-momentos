import React from 'react';
import { Button } from 'react-bootstrap';
import myPhoto from '../../Images/my-vector.png'

const About = () => {
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#EBF5FB" }}>
            <h2>This is Shawon, the sole owner of Euphoric Momentos.</h2>
            <img src={myPhoto}></img>
            <p>Hey there! This is Shawon. Currently pursuing BSc in CSE from BRAC University. Living is absolute & that is why living. That's all for now in a nutshell.</p>
            <a href="https://voidglitch00.github.io/hunkypunky-portfolio/" target="_blank"><Button style={{ backgroundColor: "#207398" }}>Click here to know me!</Button></a>
        </div>
    );
};

export default About;