// Validation interfaces
export interface Validatable<T> extends ValidatableMessage {
    onValidate?: ( value: T ) => boolean | undefined;
}

export interface ValidatableMessage {
    errorMessage?: string;
    successMessage?: string;
}

export interface ValueState<T> {
    value: T;
    setValue: React.Dispatch<SetStateAction<T>>;
}