import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Brand } from "./graphql/types";
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
export declare type BrandUpdateFormInputValues = {
    brandName?: string;
};
export declare type BrandUpdateFormValidationValues = {
    brandName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BrandUpdateFormOverridesProps = {
    BrandUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    brandName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BrandUpdateFormProps = React.PropsWithChildren<{
    overrides?: BrandUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    brand?: Brand;
    onSubmit?: (fields: BrandUpdateFormInputValues) => BrandUpdateFormInputValues;
    onSuccess?: (fields: BrandUpdateFormInputValues) => void;
    onError?: (fields: BrandUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BrandUpdateFormInputValues) => BrandUpdateFormInputValues;
    onValidate?: BrandUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BrandUpdateForm(props: BrandUpdateFormProps): React.ReactElement;
