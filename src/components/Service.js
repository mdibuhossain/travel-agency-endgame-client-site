import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:5000/services',
            responseType: 'stream'
        })
            .then((response) => {
                setService(response.data);
                // console.log(response.data)
            });
    }, [])
    return (
        <div className="grid grid-cols-3 gap-5 w-9/12 mx-auto my-12">
            {
                service.map(item => <ServiceItem key={item._id} service={item} />)
            }
        </div>
    );
};

export default Service;