import { ICardProduct } from "./ICardProduct";

export type ShowCaseItemsType = {
    statusRequest: boolean;
    items: ICardProduct[];
    productIds: number[];
    handleProductsList: () => void;
    handleDeleteProducts?: () => void;
    handleInsertItems: (id:number) => void;
}