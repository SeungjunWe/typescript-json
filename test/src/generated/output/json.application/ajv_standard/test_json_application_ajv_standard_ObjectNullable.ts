import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_json_application_ajv_standard_ObjectNullable =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ObjectNullable",
  })({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectNullable",
      },
    ],
    components: {
      schemas: {
        ObjectNullable: {
          $id: "#/components/schemas/ObjectNullable",
          type: "object",
          properties: {
            value: {
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectNullable.IProduct",
              },
            },
          },
          required: ["value"],
        },
        "ObjectNullable.IProduct": {
          $id: "#/components/schemas/ObjectNullable.IProduct",
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            manufacturer: {
              $ref: "#/components/schemas/ObjectNullable.IManufacturer",
            },
            brand: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectNullable.IBrand",
                },
              ],
            },
            similar: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  $ref: "#/components/schemas/ObjectNullable.IBrand",
                },
                {
                  $ref: "#/components/schemas/ObjectNullable.IManufacturer",
                },
              ],
            },
          },
          required: ["name", "manufacturer", "brand", "similar"],
        },
        "ObjectNullable.IManufacturer": {
          $id: "#/components/schemas/ObjectNullable.IManufacturer",
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["manufacturer"],
            },
            name: {
              type: "string",
            },
          },
          required: ["type", "name"],
        },
        "ObjectNullable.IBrand": {
          $id: "#/components/schemas/ObjectNullable.IBrand",
          type: "object",
          properties: {
            type: {
              type: "string",
              enum: ["brand"],
            },
            name: {
              type: "string",
            },
          },
          required: ["type", "name"],
        },
      },
    },
    purpose: "ajv",
    surplus: false,
  });
