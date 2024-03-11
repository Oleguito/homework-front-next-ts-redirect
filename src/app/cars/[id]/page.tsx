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

const OneCar = ({ params }: ParamsType) => {
    return (
        <>
            <CarInfo car={fetchCar(params.id)} />
        </>
    );
};

export default OneCar;
