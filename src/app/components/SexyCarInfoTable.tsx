import React from "react";
import { Props } from "./CarInfo";

const SexyCarInfoTable = ({car} : Props) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
                <tbody>
                    <tr className="bg-gray-100">
                        <td className="px-4 py-2 font-bold">ID</td>
                        <td className="px-4 py-2">{car.id}</td>
                    </tr>
                    <tr className="bg-gray-200">
                        <td className="px-4 py-2 font-bold">Make</td>
                        <td className="px-4 py-2">{car.make}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="px-4 py-2 font-bold">Model</td>
                        <td className="px-4 py-2">{car.model}</td>
                    </tr>
                    <tr className="bg-gray-200">
                        <td className="px-4 py-2 font-bold">Year</td>
                        <td className="px-4 py-2">{car.year}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="px-4 py-2 font-bold">Mileage</td>
                        <td className="px-4 py-2">{car.mileage}</td>
                    </tr>
                    <tr className="bg-gray-200">
                        <td className="px-4 py-2 font-bold">Price</td>
                        <td className="px-4 py-2">{car.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SexyCarInfoTable;
