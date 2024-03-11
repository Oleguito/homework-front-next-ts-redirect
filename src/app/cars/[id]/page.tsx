import CarInfo from "@/app/components/CarInfo";
import { cars } from "../../cars_data/carsData";
import { Car } from "../columns";

type ParamsType = {
    params: {
        id: number;
    };
};

async function fetchCar(id: number): Promise<Car> {
    return cars[id];
}

const OneCar = async ({ params }: ParamsType) => {
    const fetchedCar : Promise<Car> = fetchCar(params.id);
    const gottenCar : Car = await fetchedCar;

    return (
        <>
            <CarInfo car={gottenCar} />
        </>
    );
};

export default OneCar;
