export interface IFormProps {
    title?: string;
    bordered?: boolean;
    message?: string;
    onSubmitForm?: (form: any) => Promise<void>;
}