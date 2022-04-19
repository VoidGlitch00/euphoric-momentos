import React from 'react';

const Blogs = () => {
    return (
        <div className="container mt-3">
            <h3>What is the Difference between authorization and authentication?</h3>
            <p>-Authentication is the act of confirming a person's identity, whereas authorisation is the process of confirming a user's access to certain apps, files, and data. The scenario is similar to that of an airline deciding which passengers are allowed to board. The first stage is to verify a passenger's identification to ensure that they are who they claim they are. After confirming a customer's identification, the next stage is to confirm any unique services the passenger has access to, such as flying first-class or entering the VIP lounge.</p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>All data in the database is managed by Firebase in real time. As a result, data is easily and quickly transferred to and from the database. Connecting and using built-in third-party authentication providers, such as Google, Facebook, and Twitter, is rather straightforward with Firebase. One can have the option of using a ready-made authentication UI. Some other options to implement authentication are Auth0, Amazon Cognito, Okta, Parse, Kinvey and so on.</p>
            <h3>What other services does firebase provide other than authentication</h3>
            <p>Firebase offers free authentication by email, password, and one-time password (OTP) for phone numbers. Remote Configuration, It allows you to change the UI and content of your app without having to republish it. Cloud Firestore, Cloud Functions</p>
        </div>
    );
};

export default Blogs;