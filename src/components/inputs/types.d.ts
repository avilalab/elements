import React, { InputHTMLAttributes, SetStateAction } from "react";

export type InputValidationStatus = 'valid' | 'invalid';

interface IInputValidation {
    status: InputValidationStatus;
    message?: string;
}

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    label?: string;
    validation?: IInputValidation;
}

interface IFormForgotPasswordFormProps {
    title?: string;
    bordered?: boolean;
    message?: string;
    options?: {
        backToSignIn?: () => void;
    };
    onSubmitForm: (form: any) => void;
}

export interface SetStateInput<T> {
    value?: T;
    setValue?: React.Dispatch<SetStateAction<T>>;
}

export type OnValidateInputState = 'default' | 'valid' | 'invalid';

export interface OnValidateInput<T> {
    onValidate?: (value: T) => boolean | null;
    state?: OnValidateInputState;
    onErrorMessage?: () => string;
    onSuccessMessage?: () => string;
}

export interface InputProps<T> extends InputProps, SetStateInput<T>, OnValidateInput<T>,  InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    name?: string;
    id?: string;
    validation?: IInputValidation;
}

export interface BasicInputProps<T> extends InputProps<T> {
    type?: React.HTMLInputTypeAttribute | 'textarea';
}

export interface TextInputProps extends InputProps<string> {
}

export interface EmailInputProps extends InputProps<string> {
}

export interface PasswordInputProps extends InputProps<string> {
}

export interface CheckboxInputProps extends InputProps<boolean> {
}

export interface TextAreaInputProps extends InputProps<boolean> {
}