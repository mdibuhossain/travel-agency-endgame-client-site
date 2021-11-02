import { useState, useEffect } from 'react';

export const useDatabase = () => {
    const [service, setService] = useState([]);
    const [ blog, setBlog ] = useState([]);

    useEffect(() => {
        const loadService = async () => {
            const res = await fetch('https://damp-chamber-98224.herokuapp.com/services');
            const data = await res.json();
            setService(data);
        }
        const loadBlog = async () => {
            const res = await fetch('https://damp-chamber-98224.herokuapp.com/blog');
            const data = await res.json();
            setBlog(data);
        }
        loadService();
        loadBlog();
    }, [])

    return {
        service,
        blog
    }
}