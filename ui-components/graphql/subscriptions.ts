/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand($filter: ModelSubscriptionBrandFilterInput) {
    onCreateBrand(filter: $filter) {
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
export const onCreateBrandGroup = /* GraphQL */ `
  subscription OnCreateBrandGroup(
    $filter: ModelSubscriptionBrandGroupFilterInput
  ) {
    onCreateBrandGroup(filter: $filter) {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand($filter: ModelSubscriptionBrandFilterInput) {
    onDeleteBrand(filter: $filter) {
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
export const onDeleteBrandGroup = /* GraphQL */ `
  subscription OnDeleteBrandGroup(
    $filter: ModelSubscriptionBrandGroupFilterInput
  ) {
    onDeleteBrandGroup(filter: $filter) {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand($filter: ModelSubscriptionBrandFilterInput) {
    onUpdateBrand(filter: $filter) {
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
export const onUpdateBrandGroup = /* GraphQL */ `
  subscription OnUpdateBrandGroup(
    $filter: ModelSubscriptionBrandGroupFilterInput
  ) {
    onUpdateBrandGroup(filter: $filter) {
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
