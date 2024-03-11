"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string;
    make: string;
    model: string;
    year: number;
    mileage: number;
    price: number;
};

export const columns: ColumnDef<Payment>[] = [
{ accessorKey: 'id', header: 'ID' },
  { accessorKey: 'make', header: 'Make' },
  { accessorKey: 'model', header: 'Model' },
  { accessorKey: 'year', header: 'Year' },
  { accessorKey: 'mileage', header: 'Mileage' },
  { accessorKey: 'price', header: 'Price' },
];
