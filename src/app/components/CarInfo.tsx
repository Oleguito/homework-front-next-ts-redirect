import { Car } from "../cars/columns";
import Custom404 from "../pages/404";
import SexyCarInfoTable from "./SexyCarInfoTable";

export interface Props {
    car: Car;
}

const CarInfo = (props: Props) => {
    const car: Car = props.car;
    return (
        car ? <SexyCarInfoTable car={car}/> : <Custom404 />
    );
};

export default CarInfo;
