import { useState, useEffect } from 'react';

export const useDatabase = () => {
    const [service, setService] = useState([]);
    const [blog, setBlog] = useState([]);
    const [order, setOrder] = useState([]);
    const [isDataLoading, setDataLoading] = useState(true);
    // http://localhost:5000/
    useEffect(() => {
        setDataLoading(true);
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setDataLoading(false);
            })
    }, [])
    useEffect(() => {
        setDataLoading(true);
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                setDataLoading(false);
            })
    }, [])
    useEffect(() => {
        setDataLoading(true);
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setService(data)
                setDataLoading(false);
            })
    }, [])
    return {
        service,
        blog,
        order,
        setService,
        setBlog,
        setOrder,
        isDataLoading
    }
}