import { createContext, useCallback, useState } from "react"
import { DvdSchemaType } from "../../types/DvdSchemaType"
import { BookSchemaType } from "../../types/BookSchemaType"
import { DimensionSchemaType } from "../../types/DimensionSchemaType"
import { ProductsSchemaType } from "../../types/ProductsSchemaType"

type FormProductType = {
    children: React.ReactNode;
}

export const ProductContext = createContext<ProductsSchemaType | undefined>(undefined)

export const FormProductContext: React.FC<FormProductType> = ({ children }) => {
    const [size, setSize] = useState<DvdSchemaType>();
    const [weight, setWeight] = useState<BookSchemaType>();
    const [dimension, setDimension] = useState<DimensionSchemaType>();
    const [value, setValue] = useState<object>();
    const [type, setType] = useState<string>('Dvd');
    const [formType, setFormType] = useState<object | undefined>({});

    const createData = useCallback((newType: string, newValue: DvdSchemaType | BookSchemaType | DimensionSchemaType) => {
        setType(newType);

        const typeData: Record<string, { size?: DvdSchemaType; weight?: BookSchemaType; dimension?: DimensionSchemaType }> = {
            'Dvd': { size: newValue as DvdSchemaType, weight: undefined, dimension: undefined },
            'Book': { size: undefined, weight: newValue as BookSchemaType, dimension: undefined },
            'Furniture': { size: undefined, weight: undefined, dimension: newValue as DimensionSchemaType },
        };

        const formTypeData = typeData[newType];

        setSize(formTypeData.size);
        setWeight(formTypeData.weight);
        setDimension(formTypeData.dimension);
        setFormType(typeData);
        setValue(typeData);

    }, []);


    return (
        <ProductContext.Provider value={{ type, value, createData, formType, size, weight, dimension } as ProductsSchemaType}>
            {children}
        </ProductContext.Provider>
    )
}
