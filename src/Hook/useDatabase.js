import { useState, useEffect } from 'react';

export const useDatabase = () => {
    const [service, setService] = useState([]);
    const [blog, setBlog] = useState([]);
    const [order, setOrder] = useState([]);
    const [isDataLoading, setDataLoading] = useState(true);
    // https://heroku-world-trip.herokuapp.com/
    useEffect(() => {
        const loadService = async () => {
            setDataLoading(true);
            fetch('https://heroku-world-trip.herokuapp.com/services')
                .then(res => res.json())
                .then(data => {
                    setService(data)
                    setDataLoading(false);
                })
        }
        const loadBlog = async () => {
            setDataLoading(true);
            const res = await fetch('https://heroku-world-trip.herokuapp.com/blog');
            const data = await res.json();
            setBlog(data);
            setDataLoading(false);
        }
        const loadOrder = async () => {
            setDataLoading(true);
            const res = await fetch('https://heroku-world-trip.herokuapp.com/order');
            const data = await res.json();
            setOrder(data);
            setDataLoading(false);
        }
        loadService();
        loadBlog();
        loadOrder();
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