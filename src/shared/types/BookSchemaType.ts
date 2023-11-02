export type BookSchemaType = {
    value: string | undefined;
    name: string;
    handleFormControl:(event: React.ChangeEvent<HTMLInputElement>) => void;
}