import { useCallback, useState } from "react"
import { SoftAlert } from ".."
import { FormInput } from "../input/FormInput"
import { BsInfo } from "react-icons/bs";
import { FlexDisplay } from "../input/FlexDisplay";

export const BookSchema = () => {
    const [visibleNotify, setVisibleNotify] = useState<boolean>(false);
    const [weight, setWeight] = useState<string>('');

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(e.target.value);
    }
    const ShowNotify = useCallback(() => {
        setVisibleNotify((prev) => !prev);
    }, [])
    return (
        <>
            <div className="w-full mt-2 flex gap-4 items-start">
                <FormInput
                    label="weight"
                    placeholder="Weight"
                    name="weight"
                    value={weight}
                    nameInput="Weight(KG)"
                    onChange={handleWeightChange}
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
