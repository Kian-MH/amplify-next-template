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
export declare type BrandCreateFormInputValues = {
    brandName?: string;
};
export declare type BrandCreateFormValidationValues = {
    brandName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BrandCreateFormOverridesProps = {
    BrandCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    brandName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BrandCreateFormProps = React.PropsWithChildren<{
    overrides?: BrandCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BrandCreateFormInputValues) => BrandCreateFormInputValues;
    onSuccess?: (fields: BrandCreateFormInputValues) => void;
    onError?: (fields: BrandCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BrandCreateFormInputValues) => BrandCreateFormInputValues;
    onValidate?: BrandCreateFormValidationValues;
} & React.CSSProperties>;
export default function BrandCreateForm(props: BrandCreateFormProps): React.ReactElement;
