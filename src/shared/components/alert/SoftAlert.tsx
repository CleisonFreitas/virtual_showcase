type SoftAlertType = {
    title: string;
    message: string;
}
export const SoftAlert: React.FC<SoftAlertType> = ({title,message}) => {
  return (
        <div className="p-2 w-full flex flex-col gap-2 bg-blue-50 rounded border border-black">
            <h1 className="text-bold text-md text-black border w-full h-full">{title}</h1>
            <p className="text-medium text-sm text-gray-700">{message}</p>
        </div>
  )
}
