import { useCallback, useState } from "react"
import { SoftAlert } from ".."
import { FormInput } from "../input/FormInput"
import { BsInfo } from "react-icons/bs";
import { FlexDisplay } from "../input/FlexDisplay";

type DimensionsType = {
    height: string;
    width: string;
    length: string;
}


export const FurnitureSchema = () => {

    const DimensionValues:DimensionsType = {
        height: '',
        width: '',
        length: ''
    }
    const [visibleNotify, setVisibleNotify] = useState<boolean>(false);
    const[dimensions, setDimensions] = useState<DimensionsType>(DimensionValues);

    const handleDimensionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setDimensions({
            ...dimensions,
            [name]: value
        })
    }
    const ShowNotify = useCallback(() => {
        setVisibleNotify((prev) => !prev);
    }, [])
    return (
        <>
            <div className="w-full mt-2 flex flex-wrap gap-4 items-start">
                <FormInput
                    label="height"
                    placeholder="Height"
                    nameInput="Height(CM)"
                    name="height"
                    value={dimensions.height}
                    onChange={handleDimensionsChange}
                    sx={{
                        lg: 'lg:w-44',
                        md: 'md:w-44',
                        sm: 'w-44'
                    }}
                    type="text"
                />
                <FormInput
                    label="width"
                    placeholder="Width"
                    nameInput="Width(CM)"
                    name="width"
                    value={dimensions.width}
                    onChange={handleDimensionsChange}
                    sx={{
                        lg: 'lg:w-44',
                        md: 'md:w-44',
                        sm: 'w-44'
                    }}
                    type="text"
                />
                <FormInput
                    label="length"
                    placeholder="Length"
                    nameInput="Length(CM)"
                    name="length"
                    value={dimensions.length}
                    onChange={handleDimensionsChange}
                    sx={{
                        lg: 'lg:w-44',
                        md: 'md:w-44',
                        sm: 'w-44'
                    }}
                    type="text"
                />
                
            </div>
            <FlexDisplay>
                    <span
                        title="info"
                        onClick={ShowNotify}
                        className="rounded-full border border-gray-700 bg-gray-200 "
                    >
                        <BsInfo size={32} />
                    </span>
                    {visibleNotify &&
                        <SoftAlert title="Dimensions attribute" message="Please, provide dimensions in HxWxL format" />}
                </FlexDisplay>

        </>
    )
}
