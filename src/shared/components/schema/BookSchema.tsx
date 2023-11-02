import { useCallback, useState } from "react"
import { SoftAlert } from ".."
import { FormInput } from "../input/FormInput"
import { BsInfo } from "react-icons/bs";
import { FlexDisplay } from "../input/FlexDisplay";
import { BookSchemaType } from "../../types/BookSchemaType";

export const BookSchema: React.FC<BookSchemaType> = ({value, handleFormControl,name}) => {
    const [visibleNotify, setVisibleNotify] = useState<boolean>(false);

    const ShowNotify = useCallback(() => {
        setVisibleNotify((prev) => !prev);
    }, [])
    return (
        <>
            <div className="w-full mt-2 flex gap-4 items-start">
                <FormInput
                    label="weight"
                    placeholder="Weight"
                    name={name}
                    value={value}
                    nameInput="Weight(KG)"
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
                        <SoftAlert title="Weight attribute" message="In case of registering a new book, informing this weight is required" />}
                </FlexDisplay>
            </div>


        </>
    )
}
