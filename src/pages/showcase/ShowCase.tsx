import { useContext, useEffect, useState } from "react"
import { CardProduct, CustomButton } from "../../shared/components"
import { EventContext } from "../../shared/contexts/showcase/ShowCaseContext";
import { ShowCaseContextType } from "../../shared/types/ShowCaseContextType";
import { HandlerProductsContext } from "../../shared/contexts";
import { ICardProduct } from "../../shared/types/ICardProduct";


export const ShowCase = () => {

    const contextValue = useContext(EventContext) as ShowCaseContextType;

    const productContext = useContext(HandlerProductsContext);

    const [itemsCard, setItemsCard] = useState<ICardProduct[]>(productContext ? productContext.items : []);

    useEffect(() => {
        const fetchData = async () => {
            const context = productContext;
        
            if (context && !context.statusRequest) {
              try {
                const data = await context.handleProductsList();
        
                if (data !== null && data !== undefined) {
                  setItemsCard(data);
                }
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            }
          };
        fetchData();
    }, [productContext, itemsCard]);

    return (
        <>
            <div className="w-full flex justify-between items-center bg-white rounded-lg shadow-lg p-4 opacity-80">
                <h3 className="text-lg text-gray-800 italic font-bold">Product list</h3>
                <CustomButton
                    variant="purple"
                    type="button"
                    onClick={contextValue.handleContextStatus}>
                    <span className="text-sm font-bold shadow italic w-full">
                        {contextValue.contentStatus == false ? 'Select multiples' : 'Cancel'}
                    </span>
                </CustomButton>
            </div>
            <div className="w-full flex gap-1 flex-wrap">
                <div className={`flex flex-wrap gap-2 mt-2 justify-between w-full items-center`}>
                    {itemsCard.map((item) => (
                        <CardProduct
                            key={item.id}
                            id={item.id}
                            metric={item.metric}
                            name={item.name}
                            price={item.price}
                            sku={item.sku}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}