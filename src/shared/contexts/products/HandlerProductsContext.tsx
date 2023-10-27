import { createContext, useCallback, useState } from "react";
import { ShowCaseItemsType } from "../../types/ShowCaseItemsType";
import { ProductsApi } from "../../services/api/products/Products_Api";
import { ICardProduct } from "../../types/ICardProduct";

export const HandlerProductsContext = createContext<ShowCaseItemsType | undefined>(undefined)

type HandlerProductsType = {
  children: React.ReactNode;
}
export const HandlerProducts: React.FC<HandlerProductsType> = ({ children }) => {
  const [statusRequest, setStatusRequest] = useState(false); // Request Status
  const [items, setItems] = useState<ICardProduct[]>([]); // Array of the total of objects
  const [productIds, setProductIds] = useState<number[]>([]); // array of ids that will be deleted.

  const handleInsertItems = useCallback((productId: number) => {
    setProductIds((prevProductIds) => {
      // Check if productId is already in the list
      if (prevProductIds.includes(productId)) {
        // If it's in the list, remove it
        return prevProductIds.filter((id) => id !== productId);
      }
      // If it's not in the list, add it
      return [...prevProductIds, productId];
    });
  }, []);

  const handleProductsList = useCallback(async () => {

    try {
      const response = await ProductsApi.list();
      setItems(response);

      setStatusRequest(true);
      return response;
    } catch (error) {
      console.error(error);
    }

  }, [])

  const handleDeleteProducts = useCallback(async () => {
    try {
      const data = await ProductsApi.deleteItems(productIds)
      setStatusRequest(false);

      return await data;
    } catch (error) {
      console.error(error)
    }
  }, [productIds]);

  return (
    <HandlerProductsContext.Provider value={{
      handleProductsList,
      handleDeleteProducts,
      handleInsertItems,
      productIds,
      items,
      statusRequest
    }}>
      {children}
    </HandlerProductsContext.Provider>
  )
}

