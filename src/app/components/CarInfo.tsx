import React from "react";
import { Car } from "../cars/columns";

interface Props {
    car: Car;
}

const CarInfo = (props: Props) => {
    const car: Car = props.car;
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Make</th>
                        <th className="px-4 py-2">Model</th>
                        <th className="px-4 py-2">Year</th>
                        <th className="px-4 py-2">Mileage</th>
                        <th className="px-4 py-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-100">
                        <td className="px-4 py-2">{car.id}</td>
                        <td className="px-4 py-2">{car.make}</td>
                        <td className="px-4 py-2">{car.model}</td>
                        <td className="px-4 py-2">{car.year}</td>
                        <td className="px-4 py-2">{car.mileage}</td>
                        <td className="px-4 py-2">{car.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CarInfo;
