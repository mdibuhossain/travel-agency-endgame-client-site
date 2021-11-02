import { useState, useEffect } from 'react';

export const useDatabase = () => {
    const [service, setService] = useState([]);
    const [blog, setBlog] = useState([]);
    const [isDataLoading, setDataLoading] = useState(true);
    // https://damp-chamber-98224.herokuapp.com/
    useEffect(() => {
        const loadService = async () => {
            setDataLoading(true);
            const res = await fetch('http://localhost:5000/services');
            const data = await res.json();
            setService(data);
            setDataLoading(false);
        }
        const loadBlog = async () => {
            setDataLoading(true);
            const res = await fetch('http://localhost:5000/blog');
            const data = await res.json();
            setBlog(data);
            setDataLoading(false);
        }
        loadService();
        loadBlog();
    }, [])

    return {
        service,
        blog,
        setService,
        setBlog,
        isDataLoading
    }
}