import React, { useCallback, useState } from "react";

type IDropdownButton = {
    children: React.ReactNode;
    linkColumns: ILinkColumns[];
}

type ILinkColumns = {
    label: string;
    destiny?: string;
    action?: () => void;
}

export const DropdownButton: React.FC<IDropdownButton> = ({ children, linkColumns }) => {
    const [display, setDisplay] = useState(false);
    const [showOption, setShowOption] = useState("opacity-50");

    const handleDisplay = useCallback(() => {
        setShowOption(display == false ? "opacity-100" : "opacity-50")
        setTimeout(() => {
            setDisplay(display == false ? true : false)
        }, 100);


    }, [display])
    return (
        <>
            <div>
                <button
                    onClick={handleDisplay}
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-200 px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    {children}
                </button>
            </div>
            {display &&
                <div
                    className={`${showOption} transition duration-700 ease-in-out absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu" aria-orientation="vertical"
                    aria-labelledby="menu-button">
                    <div
                        className="py-1"
                        role="none">
                        {linkColumns.map((item, index) => (
                            <a
                                href={item.destiny}
                                key={index}
                                onClick={item.action}
                                className="text-gray-700 flex justify-between items-center px-4 py-2 text-sm hover:bg-slate-100"
                                role="menuitem"
                                id={`menu-item-${index}`}>
                                    
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            }

        </>
    )
}
