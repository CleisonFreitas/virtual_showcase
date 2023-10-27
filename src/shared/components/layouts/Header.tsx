import { useCallback, useContext } from "react";
import { CustomButton } from ".."
import { DropdownButton } from "../dropdown/DropdownButton"
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { AlertDelete } from "../alert/AlertDelete";
import { HandlerProductsContext } from "../../contexts/products/HandlerProductsContext";
import { ShowCaseItemsType } from "../../types/ShowCaseItemsType";

export const Header = () => {

    const productValue = useContext(HandlerProductsContext) as ShowCaseItemsType;
    
    const handleDelete = useCallback(() => {
        const alertEffect = {
            action: () => {
                if(productValue.handleDeleteProducts) {
                    productValue.handleDeleteProducts();
                }
            }
        }
        AlertDelete.handleAlertDelete(alertEffect);
    },[productValue])

    const columns = [
        { label: "Add", destiny: "#" },
        { label: "Mass Delete", destiny: "#"},
    ]

    return (
        <div className="text-bold p-2 flex justify-between items-center italic font-bold border border-gray-400 shadow-2xl">
            <h3 className="text-red-400 text-sm lg:text-2xl ">Virtual Showcase</h3>
            <div className="hidden lg:flex gap-2">
                <CustomButton
                    type="button"
                    variant="primary">
                    ADD
                </CustomButton>
                <CustomButton
                    type="button"
                    variant="danger"
                    onClick={handleDelete}
                    disable={productValue.productIds.length > 0 ? false : true}
                    >
                    MASS DELETE
                </CustomButton>
            </div>
            <div className="lg:hidden relative inline-block text-left">
                <DropdownButton
                    linkColumns={columns}>
                    <BsFillMenuButtonWideFill />
                </DropdownButton>
            </div>
        </div>
    )
}