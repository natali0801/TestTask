var defaultInput = {
  definitions: {
    attendees: {
      type: "object",
      $id: "#attendees",
      properties: {
        userId: {
          type: "integer"
        },
        access: {
          enum: [
            "view",
            "modify",
            "sign",
            "execute"
          ]
        },
        formAccess: {
          enum: [
            "view",
            "execute",
            "execute_view"
          ]
        }
      },
      required: [
        "userId",
        "access"
      ]
    }
  },
  type: "object",
  properties: {
    id: {
      anyOf: [
        {
          type: "string"
        },
        {
          type: "integer"
        }
      ]
    },
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    startDate: {
      type: "integer"
    },
    endDate: {
      type: "integer"
    },
    attendees: {
      type: "array",
      items: {
        $ref: "#attendees"
      },
      default: []
    },
    parentId: {
      anyOf: [
        {
          type: "null"
        },
        {
          type: "string"
        },
        {
          type: "integer"
        }
      ]
    },
    locationId: {
      anyOf: [
        {
          type: "null"
        },
        {
          type: "integer"
        }
      ]
    },
    process: {
      anyOf: [
        {
          type: "null"
        },
        {
          type: "string",
          pattern: "https:\\/\\/[a-z]+\\.corezoid\\.com\\/api\\/1\\/json\\/public\\/[0-9]+\\/[0-9a-zA-Z]+"
        }
      ]
    },
    readOnly: {
      type: "boolean"
    },
    priorProbability: {
      anyOf: [
        {
          type: "null"
        },
        {
          type: "integer",
          minimum: 0,
          maximum: 100
        }
      ]
    },
    channelId: {
      anyOf: [
        {
          type: "null"
        },
        {
          type: "integer"
        }
      ]
    },
    externalId: {
      anyOf: [
        {
          type: "null"
        },
        {
          type: "string"
        }
      ]
    },
    tags: {
      type: "array"
    },
    form: {
      type: "object",
      properties: {
        id: {
          type: "integer"
        },
        viewModel: {
          type: "object"
        }
      },
      required: [
        "id"
      ]
    },
    formValue: {
      type: "object"
    }
  },
  required: [
    "id",
    "title",
    "description",
    "startDate",
    "endDate",
    "attendees"
  ]
};

var defaultJsonInValue = "{\r\n  \"$schema\": \"http:\/\/json-schema.org\/draft-07\/schema#\",\r\n  \"definitions\": {\r\n    \"attendees\": {\r\n      \"type\": \"object\",\r\n      \"$id\": \"#attendees\",\r\n      \"properties\": {\r\n        \"userId\": {\r\n          \"type\": \"integer\"\r\n        },\r\n        \"access\": {\r\n          \"enum\": [\r\n            \"view\",\r\n            \"modify\",\r\n            \"sign\",\r\n            \"execute\"\r\n          ]\r\n        },\r\n        \"formAccess\": {\r\n          \"enum\": [\r\n            \"view\",\r\n            \"execute\",\r\n            \"execute_view\"\r\n          ]\r\n        }\r\n      },\r\n      \"required\": [\r\n        \"userId\",\r\n        \"access\"\r\n      ]\r\n    }\r\n  },\r\n  \"type\": \"object\",\r\n  \"properties\": {\r\n    \"id\": {\r\n      \"anyOf\": [\r\n        {\r\n          \"type\": \"string\"\r\n        },\r\n        {\r\n          \"type\": \"integer\"\r\n        }\r\n      ]\r\n    },\r\n    \"title\": {\r\n      \"type\": \"string\"\r\n    },\r\n    \"description\": {\r\n      \"type\": \"string\"\r\n    },\r\n    \"startDate\": {\r\n      \"type\": \"integer\"\r\n    },\r\n    \"endDate\": {\r\n      \"type\": \"integer\"\r\n    },\r\n    \"attendees\": {\r\n      \"type\": \"array\",\r\n      \"items\": {\r\n        \"$ref\": \"#attendees\"\r\n      },\r\n      \"default\": []\r\n    },\r\n    \"parentId\": {\r\n      \"anyOf\": [\r\n        {\r\n          \"type\": \"null\"\r\n        },\r\n        {\r\n          \"type\": \"string\"\r\n        },\r\n        {\r\n          \"type\": \"integer\"\r\n        }\r\n      ]\r\n    },\r\n    \"locationId\": {\r\n      \"anyOf\": [\r\n        {\r\n          \"type\": \"null\"\r\n        },\r\n        {\r\n          \"type\": \"integer\"\r\n        }\r\n      ]\r\n    },\r\n    \"process\": {\r\n      \"anyOf\": [\r\n        {\r\n          \"type\": \"null\"\r\n        },\r\n        {\r\n          \"type\": \"string\",\r\n          \"pattern\": \"https:\\\\\/\\\\\/[a-z]+\\\\.corezoid\\\\.com\\\\\/api\\\\\/1\\\\\/json\\\\\/public\\\\\/[0-9]+\\\\\/[0-9a-zA-Z]+\"\r\n        }\r\n      ]\r\n    },\r\n    \"readOnly\": {\r\n      \"type\": \"boolean\"\r\n    },\r\n    \"priorProbability\": {\r\n      \"anyOf\": [\r\n        {\r\n          \"type\": \"null\"\r\n        },\r\n        {\r\n          \"type\": \"integer\",\r\n          \"minimum\": 0,\r\n          \"maximum\": 100\r\n        }\r\n      ]\r\n    },\r\n    \"channelId\": {\r\n      \"anyOf\": [\r\n        {\r\n          \"type\": \"null\"\r\n        },\r\n        {\r\n          \"type\": \"integer\"\r\n        }\r\n      ]\r\n    },\r\n    \"externalId\": {\r\n      \"anyOf\": [\r\n        {\r\n          \"type\": \"null\"\r\n        },\r\n        {\r\n          \"type\": \"string\"\r\n        }\r\n      ]\r\n    },\r\n    \"tags\": {\r\n      \"type\": \"array\"\r\n    },\r\n    \"form\": {\r\n      \"type\": \"object\",\r\n      \"properties\": {\r\n        \"id\": {\r\n          \"type\": \"integer\"\r\n        },\r\n        \"viewModel\": {\r\n          \"type\": \"object\"\r\n        }\r\n      },\r\n      \"required\": [\r\n        \"id\"\r\n      ]\r\n    },\r\n    \"formValue\": {\r\n      \"type\": \"object\"\r\n    }\r\n  },\r\n  \"required\": [\r\n    \"id\",\r\n    \"title\",\r\n    \"description\",\r\n    \"startDate\",\r\n    \"endDate\",\r\n    \"attendees\"\r\n  ]\r\n}";

var randomNamesStr = "hair,hall,hand,handbag,happy,hat,have,have,got,he,head,helicopter,hello,her,poss,here,hers,hi,him,hippo,his,hit,hobby,hockey,hold,home,hooray,horse,house,how,how,many,how,old,Hugo";
var randomTagsStr = "dad,Dan,day,desk,dining room,dinner,dirty,do,dog,doll,donkey,dont,worry,excl,door,double,draw,drawing,dress,drink,drive,duck,ear,eat,egg,elephant,end,English,enjoy,eraser,Eva,evening,example,eye";
var randomNames = randomNamesStr.split(",");
var randomTags = randomTagsStr.split(",");

var maxRandomNumberValue = Math.min(randomNames.length,randomTags.length)-1;// no need to use Number.MAX_VALUE, currently it's set to max arr len for exclusion endless cycle
var pseudoRandomValuesForUnitTests = [80,27,47,16,71,10,31,80,58,8,46,60,1,39,77,39,32,53,19,57,28,4,93,74,29,26,81,90,41,42,81,31,63,59,94,38,19,17,5,88,61,52,6,27,14,46,11,8,40,60,5,60,99,97,79,43,33,54,8,12,79,12,93,9,85,39,44,52,8,34,50,13,66,42,44,29,64,78,55,61,29,67,53,10,20,3,19,6,22,43,74,25,58,11,21,93,18,52,33,1];