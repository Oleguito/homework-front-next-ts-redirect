import { Car, columns } from "./columns";
import { DataTable } from "./data-table";
import { cars } from "../cars_data/carsData";

async function getData(): Promise<Car[]> {
    return cars;
}

export default async function DemoPage() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
