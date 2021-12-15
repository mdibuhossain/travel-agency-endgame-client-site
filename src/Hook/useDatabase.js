import { useState, useEffect } from 'react';

export const useDatabase = () => {
    const [blog, setBlog] = useState([]);
    const [isDataLoading, setDataLoading] = useState(true);
    // https://heroku-world-trip.herokuapp.com/
    useEffect(() => {
        setDataLoading(true);
        fetch('https://heroku-world-trip.herokuapp.com/blog')
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