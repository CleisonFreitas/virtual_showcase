import { FormInputStyle } from "..";

type FormSelectType = {
    nameSelect: string;
    label: string;
    name: string;
    options: string[]; // Define the data options as an array of strings
    value: string;
    onChange: (selectedValue: string) => void;
    sx: {
        lg: string;
        md: string;
        sm: string;
    };
}
export const FormSelect: React.FC<FormSelectType> = ({ label, nameSelect, options, value, onChange, sx,name }) => {
    return (
        <div className="flex flex-col gap-2 ml-2">
            <label
                className="font-bold "
                htmlFor={`${label}`} >
                {`${nameSelect}:`}
            </label>
            <select
                id={label}
                value={value}
                name={name}
                onChange={(e) => onChange(e.target.value)}
                className={`${FormInputStyle} ${sx["lg"]} ${sx["md"]} ${sx["sm"]}`}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
