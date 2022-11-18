import React from 'react';

const VehicleInput = () => {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const handlePark = (event) => {
        event.preventDefault()
        const driverName = event.target.name.value;
        const vehicleNumber = event.target.number.value;
        const vehicle = { driverName, vehicleNumber, checkin: time, checkout: '' };
        console.log(vehicle)
        fetch('http://localhost:5000/vehicles', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(vehicle)
        })
            .then(res => res.json())
            .then(data => {
                alert('This vehicle is added in the database');
                window.location.reload();
                
            })


    }
    return (
        <div className='flex justify-center items-center my-2'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Parking App</h2>
                    <form onSubmit={handlePark} action="">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Driver Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Vehicle Number</span>
                            </label>
                            <input type="text" name="number" placeholder="Number Plate" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Check In Time</span>
                            </label>
                            <input type="text" value={time} className="input input-bordered w-full max-w-xs" disabled />
                        </div>
                        <input className='btn w-full max-w-xs mt-2' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VehicleInput;