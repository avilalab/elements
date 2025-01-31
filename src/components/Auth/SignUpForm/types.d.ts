interface IFormSignUpFormProps {
    title?: string;
    bordered?: boolean;
    options?: {
        usernameMinLength?: number;
        passwordValidation?: IFormPasswordCreationValidation;
    };
    onSubmitForm: (form: any) => void;
}