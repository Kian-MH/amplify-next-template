/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
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
export const getBrandGroup = /* GraphQL */ `
  query GetBrandGroup($id: ID!) {
    getBrandGroup(id: $id) {
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
export const listBrandGroups = /* GraphQL */ `
  query ListBrandGroups(
    $filter: ModelBrandGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrandGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        group
        id
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        brandGroupId
        brandName
        createdAt
        id
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
