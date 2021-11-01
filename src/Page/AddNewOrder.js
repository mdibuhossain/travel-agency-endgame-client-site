import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Hook/useAuth';

const AddNewOrder = () => {

    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }



    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-5xl font-semibold my-5">Add new service</h1>
            <form className="grid grid-col-1 w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input className="border my-1 py-2 px-1 rounded-md pl-3" type="text" placeholder="Name" defaultValue={user.displayName} {...register("Name", { required: true, maxLength: 100 })} />
                <input className="border my-1 py-2 px-1 rounded-md pl-3" type="text" placeholder="Title" defaultValue="" {...register("title", { required: true, maxLength: 80 })} />
                <input className="border my-1 py-2 px-1 rounded-md pl-3" type="text" placeholder="Email" defaultValue="" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input className="border my-1 py-2 px-1 rounded-md pl-3" type="text" placeholder="Price" defaultValue="" {...register("price")} />
                <input className="border my-1 py-2 px-1 rounded-md pl-3" type="text" placeholder="Rating" defaultValue="" {...register("rate")} />
                <textarea className="border my-1 py-2 px-1 rounded-md pl-3" type="text" placeholder="Description" defaultValue="" {...register("description")} />
                <input className="border my-1 py-2 px-1 rounded-md pl-3" type="text" placeholder="Image URL" defaultValue="" {...register("img")} />
                <input className="py-3 rounded-lg" type="submit" />
            </form>
        </div>
    );
};

export default AddNewOrder;