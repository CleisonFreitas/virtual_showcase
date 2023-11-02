export type DvdSchemaType = {
    value: string | undefined;
    name: string;
    handleFormControl:(event: React.ChangeEvent<HTMLInputElement>) => void;
}