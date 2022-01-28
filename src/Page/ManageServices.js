import React from 'react';

const ManageServices = () => {
    const [services, setServices] = React.useState([]);
    const [currentServices, setCurrentServices] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setCurrentServices(data)
            })
    }, [currentServices])
    const handleDeleteService = (id) => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE'
        }).then(data => console.log(data))
        const tmpServices = services.filter(item => item._id !== id);
        setCurrentServices(tmpServices);
    }
    return (
        <div className="flex flex-col lg:w-4/12 md:w-6/12 w-11/12 mx-auto mt-10 bg-white p-5 rounded-lg">
            <h1 className="text-center font-semibold text-xl mb-5 uppercase">manage services - {services.length}</h1>
            {
                currentServices.map(item => (
                    <div className="flex justify-between items-center my-2">
                        <div key={item._id} className="flex justify-between w-9/12">
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button onClick={() => handleDeleteService(item._id)} className="text-center bg-red-500 px-2 text-lg rounded-full text-gray-50">X</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ManageServices;