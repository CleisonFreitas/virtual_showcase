import { BsFillBasket2Fill } from "react-icons/bs";
import { ICardProduct } from "../../types/ICardProduct";
import { useCallback, useContext, useEffect, useState } from "react";
import { EventContext, HandlerProductsContext } from "../../contexts";
import { ShowCaseContextType } from "../../types/ShowCaseContextType";


const checkStatus = {
    true: 'flex',
    false: 'hidden'
}

const cardClass = `flex justify-between items-center gap-8 py-2 px-4 h-52 w-[99%] lg:h-32  md:w-[49%] lg:w-[306px] bg-white border border-gray-200 rounded-lg`;

export const CardProduct: React.FC<ICardProduct> = ({ id, name, sku, price, metric }) => {
    const showCheck = useContext(EventContext) as ShowCaseContextType;

    const [checkClass, setCheckClass] = useState("");

    useEffect(() => {
        setCheckClass(showCheck.contentStatus == false ? checkStatus['false'] : checkStatus['true'])
    }, [checkClass, showCheck]);

    const listId = useContext(HandlerProductsContext);
    const handleClick = useCallback((e: React.MouseEvent<HTMLInputElement>) => {
        const numberId = parseInt(e.currentTarget.value, 10);
        listId?.handleInsertItems(numberId)
    }, [listId])

    return (
        <div className={cardClass}>
            <div className={`${checkClass} flex-col justify-start items-start h-full relative right-1`}>
                <input
                    type="checkbox"
                    name="productid[]"
                    id={`product_${id}`}
                    value={id}
                    onClick={handleClick}
                />
            </div>
            <span className="flex-grow w-full bg-gray-200 h-[60%] lg:h-[80%] flex justify-center items-center rounded-lg opacity-70">
                <BsFillBasket2Fill size={48} color="purple" />
            </span>
            <div className="font-bold w-full text-sm box-border flex-grow">
                <ul key={id} className="w-full flex flex-col justify-start items-start">
                    <li>Name: {name}</li>
                    <li>Sku: {sku}</li>
                    <li>Price: ${price}</li>
                    <li>{metric}</li>
                </ul>
            </div>

        </div>

    )
}
