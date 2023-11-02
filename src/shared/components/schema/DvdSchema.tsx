import { useCallback, useState } from "react"
import { SoftAlert } from ".."
import { FormInput } from "../input/FormInput"
import { BsInfo } from "react-icons/bs";
import { FlexDisplay } from "../input/FlexDisplay";
import { DvdSchemaType } from "../../types/DvdSchemaType";

export const DvdSchema: React.FC<DvdSchemaType> = ({value, handleFormControl,name }) => {
    const [visibleNotify, setVisibleNotify] = useState<boolean>(false);

    const ShowNotify = useCallback(() => {
        setVisibleNotify((prev) => !prev);
    }, [])
    return (
        <>
            <div className="w-full mt-2 flex gap-4 items-start">
                <FormInput
                    label="size"
                    placeholder="Size"
                    name={name}
                    value={value}
                    nameInput="Size(MB)"
                    onChange={handleFormControl}
                    sx={{
                        lg: 'lg:w-44',
                        md: 'md:w-44',
                        sm: 'w-44'
                    }}
                    type="text"
                />
                <span
                    title="info"
                    onClick={ShowNotify}
                    className="rounded-full border border-gray-700 bg-gray-200 mt-7 "
                >
                    <BsInfo size={32} />
                </span>
                <FlexDisplay>
                    {visibleNotify &&
                        <SoftAlert title="Size attribute" message="In case of registering a new dvd, informing this size is required" />}
                </FlexDisplay>
            </div>


        </>
    )
}
