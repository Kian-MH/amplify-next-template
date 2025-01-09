import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  BrandGroup: a
    .model({
      group: a.string(),
      brands: a.hasMany('Brand', 'brandGroupId'),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Brand: a.model({
    brandName: a.string(),
    brandGroupId: a.id(),
    brandGroup: a.belongsTo('BrandGroup', 'brandGroupId')
  })
  .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
