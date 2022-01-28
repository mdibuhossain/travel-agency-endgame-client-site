import { useState, useEffect } from 'react';

export const useDatabase = () => {
    const [blog, setBlog] = useState([]);
    const [isDataLoading, setDataLoading] = useState(true);
    // https://travel-pagla.herokuapp.com/
    useEffect(() => {
        setDataLoading(true);
        fetch('https://travel-pagla.herokuapp.com/blogs')
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