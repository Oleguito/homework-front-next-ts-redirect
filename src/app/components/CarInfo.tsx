import React from "react";
import { Car } from "../cars/columns";

interface Props {
    car: Car;
}

const CarInfo = (props: Props) => {
    const car: Car = props.car;
    return (
        <>
            <p>id: {car.id}</p>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Mileage: {car.mileage}</p>
            <p>Price: {car.price}</p>
        </>
    );
};

export default CarInfo;
