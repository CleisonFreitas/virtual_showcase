import { FormDisplay } from ".."

type FlexDisplayType = {
    children: React.ReactNode;
}
export const FlexDisplay: React.FC<FlexDisplayType> = ({children}) => {
  return (
    <div className={FormDisplay}>{children}</div>
  )
}
