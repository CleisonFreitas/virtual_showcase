import { createContext, useCallback, useState } from "react";
import { DeleteProductType } from "../../types/DeleteProductType";

type ExportDeleteProductType = {
  children: React.ReactNode;
}

export const DeleteProductsContext = createContext<DeleteProductType | undefined>(undefined);

export const DeleteProducts: React.FC<ExportDeleteProductType> = ({ children }) => {
  const [productIds, setProductIds] = useState<number[]>([]);

  const handleOnClick = useCallback((productId: number) => {
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

  return (
    <DeleteProductsContext.Provider value={{ productIds, handleOnClick }}>
      {children}
    </DeleteProductsContext.Provider>
  );
}
