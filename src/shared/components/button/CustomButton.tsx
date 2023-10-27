import React from "react"

type ICustomButton = {
    type: "button" |"submit" | "reset";
    children: React.ReactNode;
    variant: "primary" | "warning" | "danger" | "purple" | "success" | "disabled";
    disable?:true | false;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const variants = {
    primary: 'border border-blue-900 bg-blue-950 hover:bg-white hover:text-blue-950 text-white',
    warning: 'border border-orange-700 bg-orange-700 hover:bg-white hover:text-orange-700 text-white',
    danger: 'border border-red-700 bg-red-700 hover:bg-white hover:text-red-700 text-white',
    purple: 'border border-purple-950 bg-purple-950 hover:bg-white hover:text-purple-950 text-white',
    success: 'border border-green-900 bg-green-950 hover:bg-white hover:text-green-900 text-white',
    disabled: 'border border-slate-300 bg-slate-300 text-black shadow opacity-60'
}
export const CustomButton: React.FC<ICustomButton> = ({children, variant, type, onClick, disable}) => {
    const variantClass = disable == true ? variants["disabled"] : variants[variant];
    return (
        <button
            className={`text-xs w-24 h-12 font-bold lg:w-32 lg:h-8 rounded shadow ${variantClass}`}
            type={type}
            disabled={disable}
            onClick={onClick}
        >
            {children}
        </button>
    )
}