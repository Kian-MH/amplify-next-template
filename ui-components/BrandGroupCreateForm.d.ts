import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BrandGroupCreateFormInputValues = {
    group?: string;
};
export declare type BrandGroupCreateFormValidationValues = {
    group?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BrandGroupCreateFormOverridesProps = {
    BrandGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BrandGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: BrandGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BrandGroupCreateFormInputValues) => BrandGroupCreateFormInputValues;
    onSuccess?: (fields: BrandGroupCreateFormInputValues) => void;
    onError?: (fields: BrandGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BrandGroupCreateFormInputValues) => BrandGroupCreateFormInputValues;
    onValidate?: BrandGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function BrandGroupCreateForm(props: BrandGroupCreateFormProps): React.ReactElement;
