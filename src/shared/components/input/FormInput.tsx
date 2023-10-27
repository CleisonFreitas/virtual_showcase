import { FormInputStyle } from "./FormInputStyle";

type IFormInput = {
    nameInput: string;
    label: string;
    type: string;
    name: string;
    value: string | number | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    sx: {
        lg: string;
        md: string;
        sm: string;
    };
    disabled?: true | false;
}

export const FormInput: React.FC<IFormInput> = (
    {
        type,
        placeholder,
        value,
        name,
        sx,
        onChange,
        disabled,
        label,
        nameInput
    }) => {

    return (
        <div className="flex flex-col gap-2 ml-2">
            <label
                className="font-bold "
                htmlFor={`${label}`} >
                {`${nameInput}:`}
            </label>
            <input
                type={type}
                id={label}
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={disabled}
                className={`${FormInputStyle} ${sx["lg"]} ${sx["md"]} ${sx["sm"]}`}
            />
        </div>

    )
}
