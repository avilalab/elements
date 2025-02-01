export const PasswordValidations: PasswordValidations = {
    minimumChars: (password: string, numChar: number = 8) => password.length >= numChar,
    hasNumber: (password: string) => /\d/.test(password),
    hasUpperCase: (password: string) => /[A-Z]/.test(password),
    hasSpecialChar: (password: string) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
    matchPassword: (password: string, confirmPassword: string) => confirmPassword !== "" && password === confirmPassword,
    completeValidation: (password: string, confirmPassword: string, numChar: number) => {
        let results: boolean[] = [];

        results.push(PasswordValidations.minimumChars(password, numChar));
        results.push(PasswordValidations.hasNumber(password));
        results.push(PasswordValidations.hasUpperCase(password));
        results.push(PasswordValidations.matchPassword(password, confirmPassword));
        results.push(PasswordValidations.hasSpecialChar(password));

        return !(results.filter( x => x === false).length > 0);
    }
}

export type PasswordValidationsType = 'minimumChars' | 'hasNumber' | 'hasUpperCase' | 'hasSpecialChar' | 'matchPassword';

export interface PasswordValidations { 
    minimumChars: PasswordValidationCount;
    hasNumber: PasswordValidation;
    hasUpperCase: PasswordValidation;
    hasSpecialChar: PasswordValidation;
    matchPassword: PasswordValidationMatch;
    completeValidation: PasswordValidationComplete;
}

const testeTipo: PasswordValidationsType = "minimumChars";

PasswordValidations[testeTipo]("", 2)

export type PasswordValidation = (password: string) => boolean;
export type PasswordValidationCount = (password: string, numChar?: number ) => boolean;
export type PasswordValidationMatch = (password: string, confirmPassword: string ) => boolean;
export type PasswordValidationComplete = (password: string, confirmPassword: string, numChar: number) => boolean;