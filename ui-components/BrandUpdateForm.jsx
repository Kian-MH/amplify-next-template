/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getBrand } from "./graphql/queries";
import { updateBrand } from "./graphql/mutations";
const client = generateClient();
export default function BrandUpdateForm(props) {
  const {
    id: idProp,
    brand: brandModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    brandName: "",
  };
  const [brandName, setBrandName] = React.useState(initialValues.brandName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = brandRecord
      ? { ...initialValues, ...brandRecord }
      : initialValues;
    setBrandName(cleanValues.brandName);
    setErrors({});
  };
  const [brandRecord, setBrandRecord] = React.useState(brandModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBrand.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBrand
        : brandModelProp;
      setBrandRecord(record);
    };
    queryData();
  }, [idProp, brandModelProp]);
  React.useEffect(resetStateValues, [brandRecord]);
  const validations = {
    brandName: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          brandName: brandName ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateBrand.replaceAll("__typename", ""),
            variables: {
              input: {
                id: brandRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BrandUpdateForm")}
      {...rest}
    >
      <TextField
        label="Brand name"
        isRequired={false}
        isReadOnly={false}
        value={brandName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              brandName: value,
            };
            const result = onChange(modelFields);
            value = result?.brandName ?? value;
          }
          if (errors.brandName?.hasError) {
            runValidationTasks("brandName", value);
          }
          setBrandName(value);
        }}
        onBlur={() => runValidationTasks("brandName", brandName)}
        errorMessage={errors.brandName?.errorMessage}
        hasError={errors.brandName?.hasError}
        {...getOverrideProps(overrides, "brandName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || brandModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || brandModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
