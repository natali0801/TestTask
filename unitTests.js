var unitTests = [
  {Input:"{\r\n}",Result:"{}"},
  {Input:"",Result:"SyntaxError: Unexpected end of JSON input"},
  {
    Input:"{\r\n  \"$schema\": \"http:\/\/json-schema.org\/draft-07\/sc#\",\r\n  \"$id\": \"http:\/\/example.com\/product.schema.json\",\r\n  \"title\": \"Product\",\r\n  \"description\": \"A product from Acme's catalog\",\r\n  \"type\": \"object\",\r\n  \"properties\": {\r\n    \"productId\": {\r\n      \"description\": \"The unique identifier for a product\",\r\n      \"type\": \"integer\"\r\n    },\r\n    \"productName\": {\r\n      \"description\": \"Name of the product\",\r\n      \"type\": \"string\"\r\n    },\r\n    \"price\": {\r\n      \"description\": \"The price of the product\",\r\n      \"type\": \"number\",\r\n      \"exclusiveMinimum\": 0\r\n    },\r\n    \"tags\": {\r\n      \"description\": \"Tags for the product\",\r\n      \"type\": \"array\",\r\n      \"items\": {\r\n        \"type\": \"string\"\r\n      },\r\n      \"minItems\": 1,\r\n      \"uniqueItems\": true\r\n    },\r\n    \"dimensions\": {\r\n      \"type\": \"object\",\r\n      \"properties\": {\r\n        \"length\": {\r\n          \"type\": \"number\"\r\n        },\r\n        \"width\": {\r\n          \"type\": \"number\"\r\n        },\r\n        \"height\": {\r\n          \"type\": \"number\"\r\n        }\r\n      },\r\n      \"required\": [ \"length\", \"width\", \"height\" ]\r\n    }\r\n  },\r\n  \"required\": [ \"productId\", \"productName\", \"price\" ]\r\n}",
    Result:"{\"productId\":26,\"productName\":\"he\",\"price\":\"15.51\",\"tags\":[\"home\",\"happy\",\"helicopter\",\"house\",\"his\",\"handbag\"],\"dimensions\":{\"length\":\"15.18\",\"width\":\"19.80\",\"height\":\"0.33\"}}"},
  {
    Input:"{\r\n  \"$schema\": \"http:\/\/json-schema.org\/draft-07\/sc#\",\r\n  \"$id\": \"http:\/\/example.com\/product.schema.json\",\r\n  \"title\": \"Product\",\r\n  \"description\": \"A product from Acme's catalog\",\r\n  \"type\": \"object\",\r\n  \"properties\": {\r\n    \"productId\": {\r\n      \"description\": \"The unique identifier for a product\",\r\n      \"type\": \"integer\"\r\n    },\r\n    \"productName\": {\r\n      \"description\": \"Name of the product\",\r\n      \"type\": \"string\"\r\n    },\r\n    \"price\": {\r\n      \"description\": \"The price of the product\",\r\n      \"type\": \"number\",\r\n      \"exclusiveMinimum\": 0\r\n    },\r\n    \"tags\": {\r\n      \"description\": \"Tags for the product\",\r\n      \"type\": \"array\",\r\n      \"items\": {\r\n        \"type\": \"string\"\r\n      },\r\n      \"minItems\": 1,\r\n      \"uniqueItems\": true\r\n    },\r\n    \"dimensions\": {\r\n      \"type\": \"object\",\r\n      \"properties\": {\r\n        \"length\": {\r\n          \"type\": \"number\"\r\n        },\r\n        \"width\": {\r\n          \"type\": \"number\"\r\n        },\r\n        \"height\": {\r\n          \"type\": \"number\"\r\n        }\r\n      },\r\n      \"required\": [ \"length\", \"width\", \"height\" ]\r\n    }\r\n  },\r\n  \"required\": [\"productName\", \"price\" ]\r\n}",
    Result:"{\"productName\":\"house\",\"price\":\"8.91\",\"tags\":[\"have\",\"home\",\"happy\",\"helicopter\",\"house\",\"his\",\"handbag\",\"hers\",\"hit\",\"hair\",\"poss\",\"horse\",\"hippo\",\"head\",\"hall\",\"old\"],\"dimensions\":{\"length\":\"24.42\",\"width\":\"9.57\",\"height\":\"8.58\"}}"},
  {
    Input:"{\r\n  \"$schema\": \"http:\/\/json-schema.org\/draft-07\/sc#\",\r\n  \"$id\": \"http:\/\/example.com\/product.schema.json\",\r\n  \"title\": \"Product\",\r\n  \"description\": \"A product from Acme's catalog\",\r\n  \"type\": \"object\",\r\n  \"properties\": {\r\n    \"productName\": {\r\n      \"description\": \"Name of the product\",\r\n      \"type\": \"string\"\r\n    },\r\n    \"price\": {\r\n      \"description\": \"The price of the product\",\r\n      \"type\": \"number\",\r\n      \"exclusiveMinimum\": 0\r\n    },\r\n    \"tags\": {\r\n      \"description\": \"Tags for the product\",\r\n      \"type\": \"array\",\r\n      \"items\": {\r\n        \"type\": \"string\"\r\n      },\r\n      \"minItems\": 1,\r\n      \"uniqueItems\": true\r\n    },\r\n    \"dimensions\": {\r\n      \"type\": \"object\",\r\n      \"properties\": {\r\n        \"length\": {\r\n          \"type\": \"number\"\r\n        },\r\n        \"width\": {\r\n          \"type\": \"number\"\r\n        },\r\n        \"height\": {\r\n          \"type\": \"number\"\r\n        }\r\n      },\r\n      \"required\": [ \"length\", \"width\", \"height\" ]\r\n    }\r\n  },\r\n  \"required\": [ \"productId\", \"productName\", \"price\" ]\r\n}",
    Result:"Error: productId required"}
];