{
  "name": "My workflow 3",
  "nodes": [
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "e1ab362e-2461-4f8e-9909-c28de322e09e",
              "name": "",
              "value": "",
              "type": "string"
            },
            {
              "id": "55548c1e-d212-4bab-8ec2-b95fb344a1d6",
              "name": "Idcontato",
              "value": "={{ $json.sessionId }}",
              "type": "string"
            },
            {
              "id": "2aac5db6-445e-4752-8591-aa97b3a5a584",
              "name": "Mensagem",
              "value": "={{ $json.chatInput }}",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        -224,
        -48
      ],
      "id": "92dd1538-8344-4481-8815-a6aabe1add41",
      "name": "Edit Fields"
    },
    {
      "parameters": {
        "promptType": "define",
        "text": "={{ $('Edit Fields').item.json.Mensagem }}",
        "options": {
          "systemMessage": "voce é um super agente de suporte"
        }
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 3.1,
      "position": [
        128,
        -48
      ],
      "id": "30abb4fa-3333-432f-a28f-2cd99a9c1b6b",
      "name": "AI Agent"
    },
    {
      "parameters": {
        "model": "llama-3.3-70b-versatile",
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.lmChatGroq",
      "typeVersion": 1,
      "position": [
        -160,
        256
      ],
      "id": "bda09810-ee25-4c1f-b7fc-beb7dcac9fbf",
      "name": "Groq Chat Model",
      "credentials": {
        "groqApi": {
          "id": "ovCVLM0bXDhsUah7",
          "name": "Groq account"
        }
      }
    },
    {
      "parameters": {
        "sessionIdType": "customKey",
        "sessionKey": "={{ $('Edit Fields').item.json.Idcontato }}",
        "contextWindowLength": 15
      },
      "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
      "typeVersion": 1.4,
      "position": [
        32,
        192
      ],
      "id": "10ae64de-1493-4896-b974-8a3200f9c545",
      "name": "Simple Memory"
    },
    {
      "parameters": {},
      "type": "@n8n/n8n-nodes-langchain.toolWikipedia",
      "typeVersion": 1,
      "position": [
        624,
        256
      ],
      "id": "a67a3fd7-f9b6-4435-87f8-3117c6b4a752",
      "name": "Wikipedia"
    },
    {
      "parameters": {},
      "type": "n8n-nodes-base.noOp",
      "typeVersion": 1,
      "position": [
        624,
        48
      ],
      "id": "6cd8364a-fac4-467a-ab33-89fab2ba54a7",
      "name": "No Operation, do nothing"
    },
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "Receber-mensagem",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2.1,
      "position": [
        -544,
        -64
      ],
      "id": "d8f1ee8a-0175-4e8c-adec-cbcb5e7a0de0",
      "name": "Webhook",
      "webhookId": "6806f258-0867-4b10-9066-fb18b742f0b7"
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 3
          },
          "conditions": [
            {
              "id": "b882ab22-0ee8-4052-b8af-e4ebfaf1a6f8",
              "leftValue": false,
              "rightValue": "",
              "operator": {
                "type": "boolean",
                "operation": "false",
                "singleValue": true
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.3,
      "position": [
        -384,
        -48
      ],
      "id": "889bb985-2469-472d-9d3b-16e83f342753",
      "name": "If"
    },
    {
      "parameters": {},
      "type": "n8n-nodes-base.noOp",
      "typeVersion": 1,
      "position": [
        -432,
        176
      ],
      "id": "0d9cc86c-625d-4594-8cfa-ab05ede4dd24",
      "name": "No Operation, do nothing1"
    },
    {
      "parameters": {
        "operation": "appendOrUpdate",
        "documentId": {
          "__rl": true,
          "value": "1EweG7_lDG8UgJnTSZaPl4YU93oZDr8ANunCSR7MOfOE",
          "mode": "list",
          "cachedResultName": "Untitled",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1EweG7_lDG8UgJnTSZaPl4YU93oZDr8ANunCSR7MOfOE/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": 2007714010,
          "mode": "list",
          "cachedResultName": "Untitled",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1EweG7_lDG8UgJnTSZaPl4YU93oZDr8ANunCSR7MOfOE/edit#gid=2007714010"
        },
        "columns": {
          "mappingMode": "autoMapInputData",
          "value": {},
          "matchingColumns": [
            "Idcontato"
          ],
          "schema": [
            {
              "id": "Parte Interessada",
              "displayName": "Parte Interessada",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Função",
              "displayName": "Função",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Envolvimento",
              "displayName": "Envolvimento",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Impacto",
              "displayName": "Impacto",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Poder (H/M/L)",
              "displayName": "Poder (H/M/L)",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Interesse (H/M/L)",
              "displayName": "Interesse (H/M/L)",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Engajamento",
              "displayName": "Engajamento",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true
            },
            {
              "id": "Idcontato",
              "displayName": "Idcontato",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            },
            {
              "id": "Mensagem",
              "displayName": "Mensagem",
              "required": false,
              "defaultMatch": false,
              "display": true,
              "type": "string",
              "canBeUsedToMatch": true,
              "removed": false
            }
          ],
          "attemptToConvertTypes": false,
          "convertFieldsToString": false
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        -80,
        -32
      ],
      "id": "a0a54ac8-255f-4cc3-a8c6-87f4138c63d3",
      "name": "Append or update row in sheet",
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "9VQWghbC6aTRZKxn",
          "name": "Google Sheets OAuth2 API"
        }
      }
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://api.z-api.io/instances/546545121545645456415",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "client-token",
              "value": "{{security-token}}"
            }
          ]
        },
        "sendBody": true,
        "bodyParameters": {
          "parameters": [
            {
              "name": "phone",
              "value": "idcontat-vem-do-field"
            },
            {
              "name": "message",
              "value": "mensagem-vem-do-agente-ia"
            }
          ]
        },
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.4,
      "position": [
        464,
        -48
      ],
      "id": "281e13c8-011e-47fd-8257-ab76a571a7e5",
      "name": "HTTP Request"
    },
    {
      "parameters": {
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.mcpClientTool",
      "typeVersion": 1.2,
      "position": [
        176,
        256
      ],
      "id": "630958d6-105b-4ad2-a099-75645438fb0c",
      "name": "MCP Client"
    },
    {
      "parameters": {
        "table": {
          "__rl": true,
          "mode": "list",
          "value": ""
        }
      },
      "type": "n8n-nodes-base.mySqlTool",
      "typeVersion": 2.5,
      "position": [
        480,
        240
      ],
      "id": "61517d5e-b07e-4281-b494-da7d770d9908",
      "name": "Insert rows in a table in MySQL"
    },
    {
      "parameters": {
        "url": "https://minhaapi",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequestTool",
      "typeVersion": 4.4,
      "position": [
        320,
        240
      ],
      "id": "79c55447-a894-4af7-b49f-3980ed02780a",
      "name": "HTTP Request1"
    }
  ],
  "pinData": {},
  "connections": {
    "Edit Fields": {
      "main": [
        [
          {
            "node": "Append or update row in sheet",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Groq Chat Model": {
      "ai_languageModel": [
        [
          {
            "node": "AI Agent",
            "type": "ai_languageModel",
            "index": 0
          }
        ]
      ]
    },
    "Simple Memory": {
      "ai_memory": [
        [
          {
            "node": "AI Agent",
            "type": "ai_memory",
            "index": 0
          }
        ]
      ]
    },
    "Wikipedia": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "AI Agent": {
      "main": [
        [
          {
            "node": "HTTP Request",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Webhook": {
      "main": [
        [
          {
            "node": "If",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "If": {
      "main": [
        [
          {
            "node": "Edit Fields",
            "type": "main",
            "index": 0
          }
        ],
        [
          {
            "node": "No Operation, do nothing1",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Append or update row in sheet": {
      "main": [
        [
          {
            "node": "AI Agent",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "HTTP Request": {
      "main": [
        [
          {
            "node": "No Operation, do nothing",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "MCP Client": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "Insert rows in a table in MySQL": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    },
    "HTTP Request1": {
      "ai_tool": [
        [
          {
            "node": "AI Agent",
            "type": "ai_tool",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate",
    "availableInMCP": false
  },
  "versionId": "e080e79b-080e-445a-a471-a1cee0ad1557",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "aa2668b9c64f9e599a38385d7779a72a6309211041077477f52166445ef7ab6b"
  },
  "id": "K6pBl4G13m3cWKvj",
  "tags": []
}