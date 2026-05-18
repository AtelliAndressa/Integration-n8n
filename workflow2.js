{
  "name": "My workflow 2",
  "nodes": [
    {
      "parameters": {
        "public": true,
        "options": {}
      },
      "type": "@n8n/n8n-nodes-langchain.chatTrigger",
      "typeVersion": 1.4,
      "position": [
        -432,
        -32
      ],
      "id": "b4cde754-057f-49a0-b22d-979af6a8987a",
      "name": "When chat message received",
      "webhookId": "6d50d4bd-a19c-4f55-b007-ecb2b8ea5864"
    },
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
        -16
      ],
      "id": "886f6012-49d3-4bcd-ac0f-1bed44792f24",
      "name": "Edit Fields"
    },
    {
      "parameters": {
        "operation": "append",
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
          "matchingColumns": [],
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
        -16,
        -16
      ],
      "id": "62808c9d-c53f-4852-bf6d-eae163c4cf5d",
      "name": "Append row in sheet",
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "9VQWghbC6aTRZKxn",
          "name": "Google Sheets OAuth2 API"
        }
      }
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
        192,
        -16
      ],
      "id": "c72b5c50-777d-4e6e-a69b-58dfa3b1f9da",
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
        128,
        160
      ],
      "id": "b467445e-7fcd-48ea-9f7c-b3daef8cb5f7",
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
        272,
        176
      ],
      "id": "ee41eda0-9a01-4214-90cf-50b8d6802247",
      "name": "Simple Memory"
    },
    {
      "parameters": {},
      "type": "@n8n/n8n-nodes-langchain.toolWikipedia",
      "typeVersion": 1,
      "position": [
        416,
        144
      ],
      "id": "58dfbd5e-1b36-4c1c-a692-2e98c40abda5",
      "name": "Wikipedia"
    },
    {
      "parameters": {},
      "type": "n8n-nodes-base.noOp",
      "typeVersion": 1,
      "position": [
        544,
        -16
      ],
      "id": "02c1b003-7c90-4465-b278-2c03325a2386",
      "name": "No Operation, do nothing"
    }
  ],
  "pinData": {},
  "connections": {
    "When chat message received": {
      "main": [
        [
          {
            "node": "Edit Fields",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Edit Fields": {
      "main": [
        [
          {
            "node": "Append row in sheet",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Append row in sheet": {
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
            "node": "No Operation, do nothing",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": true,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate"
  },
  "versionId": "be6134e1-6094-4eb3-87b6-0a9e69b79692",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "aa2668b9c64f9e599a38385d7779a72a6309211041077477f52166445ef7ab6b"
  },
  "id": "RDuXTLUX90oZGlLw",
  "tags": []
}