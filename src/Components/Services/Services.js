import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() =>{
        fetch("fakeData.json")
        .then(res => res.json())
        .then(data => setService(data))
    }, []);
    return (
        <div className="container mt-5" style={{
            minHeight: "100vh",
        }}>
            <h1>Services</h1>
            
            <div className="container mx-auto d-flex justify-content-evenly mt-5 ">
            {
                service.map(eachService =>
                    <Service
                    key={eachService.id}
                    eachService={eachService}
                    ></Service>
                    )
            }
            </div>

        </div>
    );
};

export default Services;