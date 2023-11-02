import { BookSchemaType } from "./BookSchemaType";
import { DimensionSchemaType } from "./DimensionSchemaType";
import { DvdSchemaType } from "./DvdSchemaType";

export type ProductsSchemaType = {
    children: React.ReactNode;
    type: string;
    value: object | undefined;
    size: string | undefined;
    weight: string | undefined;
    dimension: object | undefined;
    createData: (type:string,value: DvdSchemaType | BookSchemaType | DimensionSchemaType | undefined) => void;
    formType: {
        dvd: object;
        book: object;
        furniture: object;
    }
}