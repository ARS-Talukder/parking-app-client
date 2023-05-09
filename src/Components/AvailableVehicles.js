import React, { useEffect, useState } from 'react';
import AvailableVehicle from './AvailableVehicle';

const AvailableVehicles = () => {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const [allVehicles, setAllVehicles] = useState([]);
    const [availableVehicles, setAvailableVehicles] = useState([]);
    useEffect(() => {
        fetch('https://parking-app-server.onrender.com/vehicles')
            .then(res => res.json())
            .then(data => setAllVehicles(data));
    }, [])
    useEffect(() => {
        fetch('https://parking-app-server.onrender.com/available-vehicles')
            .then(res => res.json())
            .then(data => setAvailableVehicles(data));
    }, [])
    console.log(availableVehicles)
    return (
        <div className="overflow-x-auto mx-8">
            <h2 className='text-blue-500 text-2xl text-center font-bold my-4 underline'><span className='font-bold text-red-500'>{availableVehicles.length}</span> Vehicles Are Available Right Now.</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Driver Name</th>
                        <th>Vehicle Number</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allVehicles.map((a, index) => <AvailableVehicle key={a._id} index={index} a={a} time={time}></AvailableVehicle>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default AvailableVehicles;