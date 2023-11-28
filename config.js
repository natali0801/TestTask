var defaultInput = {
    $schema: "http://json-schema.org/draft-07/schema#qwe",
    $id: "http://example.com/product.schema.json",
    title: "Product",
    description: "A product from Acme's catalog",
    type: "object",
    properties: {
      productId: {
        description: "The unique identifier for a productsss",
        type: "integer"
      },
      productName: {
        description: "Name of the product",
        type: "string"
      },
      price: {
        description: "The price of the product",
        type: "number",
        exclusiveMinimum: 0
      },
      tags: {
        description: "Tags for the product",
        type: "array",
        items: {
          type: "string"
        },
        minItems: 1,
        uniqueItems: true
      },
      dimensions: {
        type: "object",
        properties: {
          length: {
            type: "number"
          },
          width: {
            type: "number"
          },
          height: {
            type: "number"
          }
        },
        required: [ "length", "width", "height" ]
      }
    },
    required: [ "productId", "productName", "price" ]
  };

  var defaultInput = {
    type: "object",
    properties: {
      productId: {
        type: "integer"
      },
      productName: {
        type: "string"
      },
      price: {
        type: "number",
        exclusiveMinimum: 0
      },
      tags: {
        type: "array",
        items: {
          type: "string"
        },
        minItems: 1,
        uniqueItems: true
      },
      dimensions: {
        type: "object",
        properties: {
          length: {
            type: "number"
          },
          width: {
            type: "number"
          },
          height: {
            type: "number"
          }
        },
        required: [ "length", "width", "height" ]
      }
    },
    required: [ "productId", "productName", "price" ]
  };

var defaultJsonInValue = "{\r\n  \"$schema\": \"http:\/\/json-schema.org\/draft-07\/sc#\",\r\n  \"$id\": \"http:\/\/example.com\/product.schema.json\",\r\n  \"title\": \"Product\",\r\n  \"description\": \"A product from Acme's catalog\",\r\n  \"type\": \"object\",\r\n  \"properties\": {\r\n    \"productId\": {\r\n      \"description\": \"The unique identifier for a product\",\r\n      \"type\": \"integer\"\r\n    },\r\n    \"productName\": {\r\n      \"description\": \"Name of the product\",\r\n      \"type\": \"string\"\r\n    },\r\n    \"price\": {\r\n      \"description\": \"The price of the product\",\r\n      \"type\": \"number\",\r\n      \"exclusiveMinimum\": 0\r\n    },\r\n    \"tags\": {\r\n      \"description\": \"Tags for the product\",\r\n      \"type\": \"array\",\r\n      \"items\": {\r\n        \"type\": \"string\"\r\n      },\r\n      \"minItems\": 1,\r\n      \"uniqueItems\": true\r\n    },\r\n    \"dimensions\": {\r\n      \"type\": \"object\",\r\n      \"properties\": {\r\n        \"length\": {\r\n          \"type\": \"number\"\r\n        },\r\n        \"width\": {\r\n          \"type\": \"number\"\r\n        },\r\n        \"height\": {\r\n          \"type\": \"number\"\r\n        }\r\n      },\r\n      \"required\": [ \"length\", \"width\", \"height\" ]\r\n    }\r\n  },\r\n  \"required\": [ \"productId\", \"productName\", \"price\" ]\r\n}";
var defaultJsonOutValue = "{\r\n    \"productId\": 1,\r\n    \"productName\": \"An ice sculpture\",\r\n    \"price\": 12.50,\r\n    \"tags\": [ \"cold\", \"ice\" ],\r\n    \"dimensions\": {\r\n      \"length\": 7.0,\r\n      \"width\": 12.0,\r\n      \"height\": 9.5\r\n    }\r\n  }";

var randomNamesStr = "hair,hall,hand,handbag,happy,hat,have,have,got,he,head,helicopter,hello,her,poss,here,hers,hi,him,hippo,his,hit,hobby,hockey,hold,home,hooray,horse,house,how,how,many,how,old,Hugo";
var randomTagsStr = "dad,Dan,day,desk,dining room,dinner,dirty,do,dog,doll,donkey,dont,worry,excl,door,double,draw,drawing,dress,drink,drive,duck,ear,eat,egg,elephant,end,English,enjoy,eraser,Eva,evening,example,eye";
var randomNames = randomNamesStr.split(",");
var randomTags = randomTagsStr.split(",");

var maxRandomNumberValue = Math.min(randomNames.length,randomTags.length)-1;// no need to use Number.MAX_VALUE, currently it's set to max arr len for exclusion endless cycle
var pseudoRandomValuesForUnitTests = [80,27,47,16,71,10,31,80,58,8,46,60,1,39,77,39,32,53,19,57,28,4,93,74,29,26,81,90,41,42,81,31,63,59,94,38,19,17,5,88,61,52,6,27,14,46,11,8,40,60,5,60,99,97,79,43,33,54,8,12,79,12,93,9,85,39,44,52,8,34,50,13,66,42,44,29,64,78,55,61,29,67,53,10,20,3,19,6,22,43,74,25,58,11,21,93,18,52,33,1];