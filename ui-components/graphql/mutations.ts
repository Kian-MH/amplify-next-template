/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $condition: ModelBrandConditionInput
    $input: CreateBrandInput!
  ) {
    createBrand(condition: $condition, input: $input) {
      brandGroup {
        createdAt
        group
        id
        updatedAt
        __typename
      }
      brandGroupId
      brandName
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const createBrandGroup = /* GraphQL */ `
  mutation CreateBrandGroup(
    $condition: ModelBrandGroupConditionInput
    $input: CreateBrandGroupInput!
  ) {
    createBrandGroup(condition: $condition, input: $input) {
      brands {
        nextToken
        __typename
      }
      createdAt
      group
      id
      updatedAt
      __typename
    }
  }
`;
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $condition: ModelBrandConditionInput
    $input: DeleteBrandInput!
  ) {
    deleteBrand(condition: $condition, input: $input) {
      brandGroup {
        createdAt
        group
        id
        updatedAt
        __typename
      }
      brandGroupId
      brandName
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const deleteBrandGroup = /* GraphQL */ `
  mutation DeleteBrandGroup(
    $condition: ModelBrandGroupConditionInput
    $input: DeleteBrandGroupInput!
  ) {
    deleteBrandGroup(condition: $condition, input: $input) {
      brands {
        nextToken
        __typename
      }
      createdAt
      group
      id
      updatedAt
      __typename
    }
  }
`;
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $condition: ModelBrandConditionInput
    $input: UpdateBrandInput!
  ) {
    updateBrand(condition: $condition, input: $input) {
      brandGroup {
        createdAt
        group
        id
        updatedAt
        __typename
      }
      brandGroupId
      brandName
      createdAt
      id
      updatedAt
      __typename
    }
  }
`;
export const updateBrandGroup = /* GraphQL */ `
  mutation UpdateBrandGroup(
    $condition: ModelBrandGroupConditionInput
    $input: UpdateBrandGroupInput!
  ) {
    updateBrandGroup(condition: $condition, input: $input) {
      brands {
        nextToken
        __typename
      }
      createdAt
      group
      id
      updatedAt
      __typename
    }
  }
`;
