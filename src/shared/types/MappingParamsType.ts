import { IDataBook } from "./IDataBook";
import { IDataDvd } from "./IDataDvd";

export type MappingParamsType = {
    size?:IDataDvd;
    weight?: IDataBook
    furniture?:object;
}