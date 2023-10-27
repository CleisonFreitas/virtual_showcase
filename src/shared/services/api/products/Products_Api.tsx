import { ApiConfig } from "../ApiConfig";
import { ApiError, handleApiError } from "../exception/AxiosException";

/**
 * @returns JsonResponse
 */
const list = async () => {
    try {
        const response = await ApiConfig.get('products')
        const data = handleApiError(response);

        return data;
    } catch (error) {
        if (error instanceof ApiError)
            console.error(`API Error: Status ${error.status}, Message: ${error.message}`);
    }
}

/**
 * 
 * @param ids
 * @returns JsonResponse
 */
const deleteItems = async (ids: number[]) => {
    try {
        const response = await ApiConfig.delete('products', {
            method:'delete',
            data: { ids },
        });

        const data = handleApiError(response);
        return data;
    } catch (error) {
        if (error instanceof ApiError) {
            console.error(`API Error: Status ${error.status}, Message: ${error.message}`);
        }
    }
};

const createItem = async(data: object) => {
    try{
        const response = await ApiConfig.post('products', {
            method: 'post',
            data: {data}
        })
        const returnInfo = handleApiError(response);
        return returnInfo;
    }catch (error) {
        if (error instanceof ApiError) {
            console.error(`API Error: Status ${error.status}, Message: ${error.message}`);
        }
    }
}

export const ProductsApi = {
    list,
    deleteItems,
    createItem
}