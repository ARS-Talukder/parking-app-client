import React from 'react';

const AvailableVehicle = ({ a, index, time }) => {

    const handleCheckOut = () => {
        console.log(time)
        const updatedObject = { checkout: time };
        fetch(`http://localhost:5000/vehicle?vehicle=${a.vehicleNumber}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedObject)
        })
            .then(res => res.json())
            .then(data => {
                alert(`${a.vehicleNumber} is cheked out`);
                window.location.reload();
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{a.driverName}</td>
            <td>{a.vehicleNumber}</td>
            <td>{a.checkin}</td>
            <td>
                {
                    a.checkout === '' ? <button onClick={handleCheckOut} className='btn btn-sm btn-warning'>Check Out</button> : a.checkout
                }
            </td>
        </tr>
    );
};

export default AvailableVehicle;