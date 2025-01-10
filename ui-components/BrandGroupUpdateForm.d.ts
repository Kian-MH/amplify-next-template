import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BrandGroup } from "./graphql/types";
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
export declare type BrandGroupUpdateFormInputValues = {
    group?: string;
};
export declare type BrandGroupUpdateFormValidationValues = {
    group?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BrandGroupUpdateFormOverridesProps = {
    BrandGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BrandGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: BrandGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    brandGroup?: BrandGroup;
    onSubmit?: (fields: BrandGroupUpdateFormInputValues) => BrandGroupUpdateFormInputValues;
    onSuccess?: (fields: BrandGroupUpdateFormInputValues) => void;
    onError?: (fields: BrandGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BrandGroupUpdateFormInputValues) => BrandGroupUpdateFormInputValues;
    onValidate?: BrandGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BrandGroupUpdateForm(props: BrandGroupUpdateFormProps): React.ReactElement;
