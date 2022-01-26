import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ServiceItem from './ServiceItem';

const Service = () => {
    const [service, setService] = useState([]);
    const [pageOffset, setPageOffset] = useState(0);
    const [pageCount, setPageCount] = useState(100);
    useEffect(() => {
        fetch('https://heroku-world-trip.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                // setPageCount(Math.ceil(data.length / 6));
                setService(data)
            })
    }, [])
    const handlePageChange = (event) => {
        console.log(event);
        // TODO Only change displayed selected page
        // when its content is loaded in useEffect.
        setPageOffset(event.selected);
    };
    return (
        <>
            <h1 className="text-5xl text-center mt-8 font-semibold">Blogs</h1>
            {!service.length ? <div className=" flex justify-center items-center my-10">
                <div className="animate-spin rounded-full h-52 w-52 border-t-2 border-b-2 border-purple-300"></div>
            </div> :

                <div className="grid md:grid-cols-3 gap-y-3 md:gap-5 w-9/12 mx-auto my-12">
                    {
                        service.map(item => <ServiceItem key={item._id} services={service} service={item} />)
                    }
                </div>
            }
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                nextLinkClassName="page-link"
                previousLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={6}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
                forcePage={pageOffset}
            />
        </>
    );
};

export default Service;