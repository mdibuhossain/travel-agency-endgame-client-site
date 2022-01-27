import { useState, useEffect } from 'react';

export const useDatabase = () => {
    const [blog, setBlog] = useState([]);
    const [isDataLoading, setDataLoading] = useState(true);
    // http://localhost:5000/
    useEffect(() => {
        setDataLoading(true);
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlog(data);
                setDataLoading(false);
            })
    }, [])
    return {
        blog,
        setBlog,
        isDataLoading
    }
}