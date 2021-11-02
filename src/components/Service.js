import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDatabase } from '../Hook/useDatabase';
import ServiceItem from './ServiceItem';

const Service = () => {
    const { service } = useDatabase();
    return (
        <>
            <h1 className="text-5xl text-center mt-8 font-semibold">Services</h1>
            <div className="grid grid-cols-3 gap-5 w-9/12 mx-auto my-12">
                {
                    service.map(item => <ServiceItem key={item._id} service={item} />)
                }
            </div>
        </>
    );
};

export default Service;