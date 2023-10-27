type IMain = {
    children: React.ReactNode;
}
export const Main: React.FC<IMain> = ({ children }) => {
    return (
        <div
            className="w-full h-full overflow-auto py-3 px-5 bg-slate-200"
        >
            {children}
        </div>
    )
}
