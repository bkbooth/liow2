define({ "api": [
  {
    "type": "delete",
    "url": "/acts/:act",
    "title": "Remove act",
    "version": "1.3.0",
    "name": "DeleteAct",
    "group": "Acts",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/acts/:act",
    "title": "Remove act",
    "version": "1.0.0",
    "name": "DeleteAct",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/acts/:act/comments/:comment",
    "title": "Remove act comment",
    "version": "1.3.0",
    "name": "DeleteActComment",
    "group": "Acts",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/acts/:act/comments/:comment",
    "title": "Remove act comment",
    "version": "1.0.0",
    "name": "DeleteActComment",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/acts/:act/likes/:like",
    "title": "Remove act like",
    "version": "1.3.0",
    "name": "DeleteActLike",
    "group": "Acts",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "like",
            "description": "<p>Like ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/acts/:act/likes/:like",
    "title": "Remove act like",
    "version": "1.0.0",
    "name": "DeleteActLike",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "like",
            "description": "<p>Like ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/acts/:act/comments",
    "title": "List act comments",
    "version": "1.5.0",
    "name": "GetActComments",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment[]",
            "optional": false,
            "field": "comments",
            "description": "<p>List of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comments.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comments.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"likes\": [\"55f6c56186b959ac12490e1f\"],\n  \"comments\": [\"55f6c56186b959ac12490e1g\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/acts/:act/comments",
    "title": "List act comments",
    "version": "1.0.0",
    "name": "GetActComments",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment[]",
            "optional": false,
            "field": "comments",
            "description": "<p>List of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/acts/:act/likes",
    "title": "List act likes",
    "version": "1.5.0",
    "name": "GetActLikes",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Like[]",
            "optional": false,
            "field": "likes",
            "description": "<p>List of likes</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes._id",
            "description": "<p>Like ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "likes.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "likes.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z,\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/acts/:act/likes",
    "title": "List act likes",
    "version": "1.0.0",
    "name": "GetActLikes",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Like[]",
            "optional": false,
            "field": "likes",
            "description": "<p>List of likes</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes._id",
            "description": "<p>Like ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "likes.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "likes.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z,\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/acts",
    "title": "List acts",
    "version": "1.5.0",
    "name": "GetActs",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Act[]",
            "optional": false,
            "field": "acts",
            "description": "<p>List of acts</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts._id",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "acts.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "acts.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "acts.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c57486b959ac12490e1a\",\n  \"deed\": \"55f6c58b86b959ac12490e1b\",\n  \"group\": \"55f6c58086b959ac12490e1c\",\n  \"campaign\": \"55f6c58086b959ac12490e1d\",\n  \"likes\": [\"55f6c58086b959ac12490e1f\"],\n  \"comments\": [\"55f6c58086b959ac12490e1g\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/acts",
    "title": "List acts",
    "version": "1.0.0",
    "name": "GetActs",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Act[]",
            "optional": false,
            "field": "acts",
            "description": "<p>List of acts</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts._id",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "acts.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "acts.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c57486b959ac12490e1a\",\n  \"deed\": \"55f6c58b86b959ac12490e1b\",\n  \"group\": \"55f6c58086b959ac12490e1c\",\n  \"campaign\": \"55f6c58086b959ac12490e1d\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/acts/:act/comments",
    "title": "Create act comment",
    "version": "1.5.0",
    "name": "PostActComments",
    "group": "Acts",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "201",
            "type": "string[]",
            "optional": false,
            "field": "comment.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "201",
            "type": "string[]",
            "optional": false,
            "field": "comment.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"likes\": [],\n  \"comments\": [],\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/acts/:act/comments",
    "title": "Create act comment",
    "version": "1.3.0",
    "name": "PostActComments",
    "group": "Acts",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/acts/:act/comments",
    "title": "Create act comment",
    "version": "1.0.0",
    "name": "PostActComments",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/acts/:act/likes",
    "title": "Create act like",
    "version": "1.5.0",
    "name": "PostActLikes",
    "group": "Acts",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"group\": \"55f6c57486b959ac12490e1b\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Like",
            "optional": false,
            "field": "like",
            "description": "<p>Like</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like._id",
            "description": "<p>Like ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "like.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "like.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z,\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/acts/:act/likes",
    "title": "Create act like",
    "version": "1.3.0",
    "name": "PostActLikes",
    "group": "Acts",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Like",
            "optional": false,
            "field": "like",
            "description": "<p>Like</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like._id",
            "description": "<p>Like ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "like.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "like.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z,\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/acts/:act/likes",
    "title": "Create act like",
    "version": "1.0.0",
    "name": "PostActLikes",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"user\": \"55f6c57486b959ac12490e1h\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Like",
            "optional": false,
            "field": "like",
            "description": "<p>Like</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like._id",
            "description": "<p>Like ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "like.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "like.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "like.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z,\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/acts",
    "title": "Create act",
    "version": "1.5.0",
    "name": "PostActs",
    "group": "Acts",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"deed\": \"55f6c58b86b959ac12490e1b\",\n  \"group\": \"55f6c58086b959ac12490e1c\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Act",
            "optional": false,
            "field": "act",
            "description": "<p>Act</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act._id",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string[]",
            "optional": false,
            "field": "act.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "201",
            "type": "string[]",
            "optional": false,
            "field": "act.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "act.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c57486b959ac12490e1a\",\n  \"deed\": \"55f6c58b86b959ac12490e1b\",\n  \"group\": \"55f6c58086b959ac12490e1c\",\n  \"campaign\": \"55f6c58086b959ac12490e1d\",\n  \"likes\": [],\n  \"comments\": [],\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/acts",
    "title": "Create act",
    "version": "1.3.0",
    "name": "PostActs",
    "group": "Acts",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"deed\": \"55f6c58b86b959ac12490e1b\",\n  \"group\": \"55f6c58086b959ac12490e1c\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Act",
            "optional": false,
            "field": "act",
            "description": "<p>Act</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act._id",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "act.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c57486b959ac12490e1a\",\n  \"deed\": \"55f6c58b86b959ac12490e1b\",\n  \"group\": \"55f6c58086b959ac12490e1c\",\n  \"campaign\": \"55f6c58086b959ac12490e1d\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/acts",
    "title": "Create act",
    "version": "1.0.0",
    "name": "PostActs",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"deed\": \"55f6c58b86b959ac12490e1b\",\n  \"group\": \"55f6c58086b959ac12490e1c\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Act",
            "optional": false,
            "field": "act",
            "description": "<p>Act</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act._id",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "act.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "act.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c57486b959ac12490e1a\",\n  \"deed\": \"55f6c58b86b959ac12490e1b\",\n  \"group\": \"55f6c58086b959ac12490e1c\",\n  \"campaign\": \"55f6c58086b959ac12490e1d\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/acts/:act/comments/:comment",
    "title": "Update act comment",
    "version": "1.5.0",
    "name": "PutActComment",
    "group": "Acts",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/acts.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comment.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comment.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"likes\": [\"55f6c56186b959ac12490e1f\"],\n  \"comments\": [\"55f6c56186b959ac12490e1g\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/acts/:act/comments/:comment",
    "title": "Update act comment",
    "version": "1.3.0",
    "name": "PutActComment",
    "group": "Acts",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/acts/:act/comments/:comment",
    "title": "Update act comment",
    "version": "1.0.0",
    "name": "PutActComment",
    "group": "Acts",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Acts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login with email and password",
    "version": "1.0.0",
    "name": "PostAuthLogin",
    "group": "Auth",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>User email address</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"email\": \"user@example.com\"\n  \"password\": \"password123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>JWT token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"valid.jwt.token\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/campaigns/:campaign",
    "title": "Get campaign",
    "version": "1.0.0",
    "name": "GetCampaign",
    "group": "Campaigns",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/campaigns.js",
    "groupTitle": "Campaigns",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Campaign",
            "optional": false,
            "field": "campaign",
            "description": "<p>Campaign</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "campaign._id",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "campaign.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaign.dateStart",
            "description": "<p>Campaign start date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaign.dateEnd",
            "description": "<p>Campaign end date</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "campaign.active",
            "description": "<p>Campaign active state</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "campaign.deeds",
            "description": "<p>List of Deeds</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "campaign.deeds.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "campaign.deeds.published",
            "description": "<p>Deed published state</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaign.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaign.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"group\": \"55f6c57486b959ac12490e1a\",\n  \"dateStart\": \"2015-09-14T13:56:27.250Z\",\n  \"active\": true,\n  \"deeds\": [{\n    \"deed\": \"55f6c57486b959ac12490e1b\",\n    \"published\": true\n  }],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/campaigns",
    "title": "List campaigns",
    "version": "1.0.0",
    "name": "GetCampaigns",
    "group": "Campaigns",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/campaigns.js",
    "groupTitle": "Campaigns",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Campaign[]",
            "optional": false,
            "field": "campaigns",
            "description": "<p>List of campaigns</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "campaigns._id",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "campaigns.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaigns.dateStart",
            "description": "<p>Campaign start date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaigns.dateEnd",
            "description": "<p>Campaign end date</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "campaigns.active",
            "description": "<p>Campaign active state</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "campaigns.deeds",
            "description": "<p>List of Deeds</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "campaigns.deeds.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "campaigns.deeds.published",
            "description": "<p>Deed published state</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaigns.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaigns.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"group\": \"55f6c57486b959ac12490e1a\",\n  \"dateStart\": \"2015-09-14T13:56:27.250Z\",\n  \"active\": true,\n  \"deeds\": [{\n    \"deed\": \"55f6c57486b959ac12490e1b\",\n    \"published\": true\n  }],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/campaigns/:campaign",
    "title": "Partial update campaign",
    "version": "1.3.0",
    "name": "PatchCampaign",
    "group": "Campaigns",
    "permission": [
      {
        "name": "admin",
        "title": "Auth admin",
        "description": "<p>Must be authenticated as an admin of the resource (eg. Group)</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "object[]",
            "optional": false,
            "field": "patches",
            "description": "<p>JSON Patch patches</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "patches.op",
            "description": "<p>Operation</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "patches.path",
            "description": "<p>JSON Pointer path</p>"
          },
          {
            "group": "Body",
            "type": "mixed",
            "optional": true,
            "field": "patches.value",
            "description": "<p>New path value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "[{\n  \"op\": \"replace\",\n  \"path\": \"/deeds/0/published\",\n  \"value\": true\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/campaigns.js",
    "groupTitle": "Campaigns",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/campaigns",
    "title": "Create campaign",
    "version": "1.0.0",
    "name": "PostCampaigns",
    "group": "Campaigns",
    "permission": [
      {
        "name": "admin",
        "title": "Auth admin",
        "description": "<p>Must be authenticated as an admin of the resource (eg. Group)</p>"
      }
    ],
    "filename": "routes/campaigns.js",
    "groupTitle": "Campaigns",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": true,
            "field": "dateStart",
            "description": "<p>Campaign start date</p>"
          },
          {
            "group": "Body",
            "type": "object[]",
            "optional": false,
            "field": "deeds",
            "description": "<p>List of Deeds</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "deeds.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "deeds.published",
            "description": "<p>Deed published state</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"group\": \"55f6c56186b959ac12490e1a\",\n  \"deeds\": [{\n    \"deed\": \"55f6c56186b959ac12490e1b\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Campaign",
            "optional": false,
            "field": "campaign",
            "description": "<p>Campaign</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "campaign._id",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "campaign.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "campaign.dateStart",
            "description": "<p>Campaign start date</p>"
          },
          {
            "group": "201",
            "type": "boolean",
            "optional": false,
            "field": "campaign.active",
            "description": "<p>Campaign active state</p>"
          },
          {
            "group": "201",
            "type": "object[]",
            "optional": false,
            "field": "campaign.deeds",
            "description": "<p>List of Deeds</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "campaign.deeds.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "boolean",
            "optional": false,
            "field": "campaign.deeds.published",
            "description": "<p>Deed published state</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "campaign.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"group\": \"55f6c57486b959ac12490e1a\",\n  \"dateStart\": \"2015-09-14T13:56:27.250Z\",\n  \"active\": true,\n  \"deeds\": [{\n    \"deed\": \"55f6c57486b959ac12490e1b\",\n    \"published\": false\n  }],\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/campaigns/:campaign",
    "title": "Update campaign",
    "version": "1.4.0",
    "name": "PutCampaign",
    "group": "Campaigns",
    "permission": [
      {
        "name": "admin",
        "title": "Auth admin",
        "description": "<p>Must be authenticated as an admin of the resource (eg. Group)</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "Date",
            "optional": true,
            "field": "dateStart",
            "description": "<p>Campaign start date</p>"
          },
          {
            "group": "Body",
            "type": "object[]",
            "optional": false,
            "field": "deeds",
            "description": "<p>List of Deeds</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "deeds.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "deeds.published",
            "description": "<p>Deed published state</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"group\": \"55f6c56186b959ac12490e1a\",\n  \"deeds\": [{\n    \"deed\": \"55f6c56186b959ac12490e1b\"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/campaigns.js",
    "groupTitle": "Campaigns",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Campaign",
            "optional": false,
            "field": "campaign",
            "description": "<p>Campaign</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "campaign._id",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "campaign.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaign.dateStart",
            "description": "<p>Campaign start date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaign.dateEnd",
            "description": "<p>Campaign end date</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "campaign.active",
            "description": "<p>Campaign active state</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "campaign.deeds",
            "description": "<p>List of Deeds</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "campaign.deeds.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "campaign.deeds.published",
            "description": "<p>Deed published state</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaign.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "campaign.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"group\": \"55f6c57486b959ac12490e1a\",\n  \"dateStart\": \"2015-09-14T13:56:27.250Z\",\n  \"active\": true,\n  \"deeds\": [{\n    \"deed\": \"55f6c57486b959ac12490e1b\",\n    \"published\": true\n  }],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/comments/:comment",
    "title": "Remove comment",
    "version": "1.3.0",
    "name": "DeleteComment",
    "group": "Comments",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/comments.js",
    "groupTitle": "Comments",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/comments/:comment",
    "title": "Remove comment",
    "version": "1.0.0",
    "name": "DeleteComment",
    "group": "Comments",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Comments",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/comments",
    "title": "List comments",
    "version": "1.5.0",
    "name": "GetComments",
    "group": "Comments",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/comments.js",
    "groupTitle": "Comments",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment[]",
            "optional": false,
            "field": "comments",
            "description": "<p>List of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comments.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comments.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"likes\": [\"55f6c56186b959ac12490e1f\"],\n  \"comments\": [\"55f6c56186b959ac12490e1g\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/comments",
    "title": "List comments",
    "version": "1.0.0",
    "name": "GetComments",
    "group": "Comments",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Comments",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment[]",
            "optional": false,
            "field": "comments",
            "description": "<p>List of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/comments/:comment",
    "title": "Update comment",
    "version": "1.5.0",
    "name": "PutComment",
    "group": "Comments",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/comments.js",
    "groupTitle": "Comments",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comment.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comment.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"likes\": [\"55f6c56186b959ac12490e1f\"],\n  \"comments\": [\"55f6c56186b959ac12490e1g\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/comments/:comment",
    "title": "Update comment",
    "version": "1.3.0",
    "name": "PutComment",
    "group": "Comments",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Comments",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/comments/:comment",
    "title": "Update comment",
    "version": "1.0.0",
    "name": "PutComment",
    "group": "Comments",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Comments",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/countries",
    "title": "List countries",
    "version": "1.0.0",
    "name": "GetCountries",
    "group": "Countries",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/countries.js",
    "groupTitle": "Countries",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Country[]",
            "optional": false,
            "field": "countries",
            "description": "<p>List of countries</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "countries._id",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "countries.code",
            "description": "<p>2-letter country code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "countries.name",
            "description": "<p>Country name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"code\": \"AU\",\n  \"name\": \"Australia\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/countries/:country",
    "title": "Get country",
    "version": "1.0.0",
    "name": "GetCountry",
    "group": "Countries",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Country ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/countries.js",
    "groupTitle": "Countries",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Country",
            "optional": false,
            "field": "country",
            "description": "<p>Country</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "country._id",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "country.code",
            "description": "<p>2-letter country code</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "country.name",
            "description": "<p>Country name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"code\": \"AU\",\n  \"name\": \"Australia\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/countries/:country/groups",
    "title": "Get country groups",
    "version": "1.0.0",
    "name": "GetCountryGroups",
    "group": "Countries",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Country ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/countries.js",
    "groupTitle": "Countries",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Group[]",
            "optional": false,
            "field": "groups",
            "description": "<p>List of groups</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups._id",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.urlName",
            "description": "<p>Group URL name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.owner",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.admins",
            "description": "<p>List of user ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.welcomeMessage",
            "description": "<p>Group welcome message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "groups.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "groups.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"name\": \"Group Name\",\n  \"urlName\": \"group-name\",\n  \"owner\": \"55f6c56186b959ac12490e1a\",\n  \"admins\": [\"55f6c56186b959ac12490e1a\"],\n  \"country\": \"55f6c56186b959ac12490e1b\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/deeds/:deed",
    "title": "Remove deed",
    "version": "1.3.0",
    "name": "DeleteDeed",
    "group": "Deeds",
    "permission": [
      {
        "name": "superAdmin",
        "title": "Auth super admin",
        "description": "<p>Must be authenticated as an unrestricted user</p>"
      }
    ],
    "filename": "routes/deeds.js",
    "groupTitle": "Deeds",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/deeds/:deed",
    "title": "Remove deed",
    "version": "1.0.0",
    "name": "DeleteDeed",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Deeds",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/deeds/:deed/comments/:comment",
    "title": "Remove deed comment",
    "version": "1.3.0",
    "name": "DeleteDeedComment",
    "group": "Deeds",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/deeds.js",
    "groupTitle": "Deeds",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/deeds/:deed/comments/:comment",
    "title": "Remove deed comment",
    "version": "1.0.0",
    "name": "DeleteDeedComment",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Deeds",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/deeds/:deed",
    "title": "Get deed",
    "version": "1.0.0",
    "name": "GetDeed",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/deeds.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Deed",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed._id",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.urlTitle",
            "description": "<p>Deed URL title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.coverImage",
            "description": "<p>Deed cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "deed.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "deed.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"title\": \"Deed Title\",\n  \"urlTitle\": \"deed-title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/deeds/:deed/comments",
    "title": "List deed comments",
    "version": "1.5.0",
    "name": "GetDeedComments",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/deeds.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment[]",
            "optional": false,
            "field": "comments",
            "description": "<p>List of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comments.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comments.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"likes\": [\"55f6c56186b959ac12490e1f\"],\n  \"comments\": [\"55f6c56186b959ac12490e1g\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/deeds/:deed/comments",
    "title": "List deed comments",
    "version": "1.0.0",
    "name": "GetDeedComments",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment[]",
            "optional": false,
            "field": "comments",
            "description": "<p>List of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comments.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comments.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comments.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/deeds",
    "title": "List deeds",
    "version": "1.0.0",
    "name": "GetDeeds",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/deeds.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Deed[]",
            "optional": false,
            "field": "deeds",
            "description": "<p>List of deeds</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deeds._id",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deeds.title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deeds.urlTitle",
            "description": "<p>Deed URL title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deeds.content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deeds.logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deeds.videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deeds.coverImage",
            "description": "<p>Deed cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "deeds.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "deeds.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"title\": \"Deed Title\",\n  \"urlTitle\": \"deed-title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/deeds/:deed/comments",
    "title": "Create deed comment",
    "version": "1.5.0",
    "name": "PostDeedComment",
    "group": "Deeds",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/deeds.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "201",
            "type": "string[]",
            "optional": false,
            "field": "comment.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "201",
            "type": "string[]",
            "optional": false,
            "field": "comment.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"likes\": [],\n  \"comments\": [],\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/deeds/:deed/comments",
    "title": "Create deed comment",
    "version": "1.3.0",
    "name": "PostDeedComment",
    "group": "Deeds",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/deeds/:deed/comments",
    "title": "Create deed comment",
    "version": "1.0.0",
    "name": "PostDeedComment",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "201",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/deeds",
    "title": "Create deed",
    "version": "1.3.0",
    "name": "PostDeeds",
    "group": "Deeds",
    "permission": [
      {
        "name": "superAdmin",
        "title": "Auth super admin",
        "description": "<p>Must be authenticated as an unrestricted user</p>"
      }
    ],
    "filename": "routes/deeds.js",
    "groupTitle": "Deeds",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "coverImage",
            "description": "<p>Deed cover image URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"title\": \"Deed Title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Deed",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed._id",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.urlTitle",
            "description": "<p>Deed URL title</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.coverImage",
            "description": "<p>Deed cover image URL</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "deed.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"title\": \"Deed Title\",\n  \"urlTitle\": \"deed-title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/deeds",
    "title": "Create deed",
    "version": "1.0.0",
    "name": "PostDeeds",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Deeds",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "coverImage",
            "description": "<p>Deed cover image URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"title\": \"Deed Title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Deed",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed._id",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.urlTitle",
            "description": "<p>Deed URL title</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "deed.coverImage",
            "description": "<p>Deed cover image URL</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "deed.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"title\": \"Deed Title\",\n  \"urlTitle\": \"deed-title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/deeds/:deed",
    "title": "Update deed",
    "version": "1.3.0",
    "name": "PutDeed",
    "group": "Deeds",
    "permission": [
      {
        "name": "superAdmin",
        "title": "Auth super admin",
        "description": "<p>Must be authenticated as an unrestricted user</p>"
      }
    ],
    "filename": "routes/deeds.js",
    "groupTitle": "Deeds",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "coverImage",
            "description": "<p>Deed cover image URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"title\": \"Deed Title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Deed",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed._id",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.urlTitle",
            "description": "<p>Deed URL title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.coverImage",
            "description": "<p>Deed cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "deed.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "deed.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"title\": \"Deed Title\",\n  \"urlTitle\": \"deed-title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/deeds/:deed",
    "title": "Update deed",
    "version": "1.0.0",
    "name": "PutDeed",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Deeds",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "coverImage",
            "description": "<p>Deed cover image URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"title\": \"Deed Title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Deed",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed._id",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.title",
            "description": "<p>Deed title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.urlTitle",
            "description": "<p>Deed URL title</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.content",
            "description": "<p>Deed text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.logo",
            "description": "<p>Deed logo URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.videoUrl",
            "description": "<p>Deed video URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "deed.coverImage",
            "description": "<p>Deed cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "deed.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "deed.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1a\",\n  \"title\": \"Deed Title\",\n  \"urlTitle\": \"deed-title\",\n  \"content\": \"Example deed content\",\n  \"logo\": \"https://example.com/images/deed-logo.png\",\n  \"videoUrl\": \"https://youtube.com/example\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/deeds/:deed/comments/:comment",
    "title": "Update deed comment",
    "version": "1.5.0",
    "name": "PutDeedComment",
    "group": "Deeds",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/deeds.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comment.likes",
            "description": "<p>List of Like ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "comment.comments",
            "description": "<p>List of Comment ObjectIds</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"likes\": [\"55f6c56186b959ac12490e1f\"],\n  \"comments\": [\"55f6c56186b959ac12490e1g\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/deeds/:deed/comments/:comment",
    "title": "Update deed comment",
    "version": "1.3.0",
    "name": "PutDeedComment",
    "group": "Deeds",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/deeds/:deed/comments/:comment",
    "title": "Update deed comment",
    "version": "1.0.0",
    "name": "PutDeedComment",
    "group": "Deeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Body",
            "type": "object",
            "optional": false,
            "field": "content",
            "description": "<p>Content object. Text or image property is required</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "content.image",
            "description": "<p>Image content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"content\": {\n    \"text\": \"Example comment text\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Deeds",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment._id",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "comment.content",
            "description": "<p>Content object</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.text",
            "description": "<p>Text content</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "comment.content.image",
            "description": "<p>Image content</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "comment.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"content\": {\n    \"text\": \"Example comment text\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/feeds",
    "title": "List feed items",
    "version": "1.5.0",
    "name": "GetFeeds",
    "group": "Feeds",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/feeds.js",
    "groupTitle": "Feeds",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "FeedItem[]",
            "optional": false,
            "field": "feedItems",
            "description": "<p>List of feed items</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feedItems._id",
            "description": "<p>Feed item ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feedItems.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feedItems.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feedItems.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "feedItems.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feedItems.target.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feedItems.target.deed",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feedItems.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "feedItems.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "feedItems.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"deed\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"act\": \"55f6c56186b959ac12490e1d\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/groups/:group",
    "title": "Remove group",
    "version": "1.3.0",
    "name": "DeleteGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "admin",
        "title": "Auth admin",
        "description": "<p>Must be authenticated as an admin of the resource (eg. Group)</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/groups.js",
    "groupTitle": "Groups",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/groups/:group",
    "title": "Remove group",
    "version": "1.0.0",
    "name": "DeleteGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Groups",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/groups/:group",
    "title": "Get group",
    "version": "1.0.0",
    "name": "GetGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/groups.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Group",
            "optional": false,
            "field": "group",
            "description": "<p>Group</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group._id",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.urlName",
            "description": "<p>Group URL name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.owner",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.admins",
            "description": "<p>List of user ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.welcomeMessage",
            "description": "<p>Group welcome message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "group.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "group.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"name\": \"Group Name\",\n  \"urlName\": \"group-name\",\n  \"owner\": \"55f6c56186b959ac12490e1a\",\n  \"admins\": [\"55f6c56186b959ac12490e1a\"],\n  \"country\": \"55f6c56186b959ac12490e1b\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/groups",
    "title": "List groups",
    "version": "1.0.0",
    "name": "GetGroups",
    "group": "Groups",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/groups.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Group[]",
            "optional": false,
            "field": "groups",
            "description": "<p>List of groups</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups._id",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.urlName",
            "description": "<p>Group URL name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.owner",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.admins",
            "description": "<p>List of user ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "groups.welcomeMessage",
            "description": "<p>Group welcome message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "groups.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "groups.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"name\": \"Group Name\",\n  \"urlName\": \"group-name\",\n  \"owner\": \"55f6c56186b959ac12490e1a\",\n  \"admins\": [\"55f6c56186b959ac12490e1a\"],\n  \"country\": \"55f6c56186b959ac12490e1b\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/groups",
    "title": "Create group",
    "version": "1.3.0",
    "name": "PostGroups",
    "group": "Groups",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "filename": "routes/groups.js",
    "groupTitle": "Groups",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "welcomeMessage",
            "description": "<p>Group welcome message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"name\": \"Group Name\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Group",
            "optional": false,
            "field": "group",
            "description": "<p>Group</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group._id",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.urlName",
            "description": "<p>Group URL name</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.owner",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.admins",
            "description": "<p>List of user ObjectId's</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.welcomeMessage",
            "description": "<p>Group welcome message</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "group.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"name\": \"Group Name\",\n  \"urlName\": \"group-name\",\n  \"owner\": \"55f6c56186b959ac12490e1a\",\n  \"admins\": [\"55f6c56186b959ac12490e1a\"],\n  \"country\": \"55f6c56186b959ac12490e1b\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/groups",
    "title": "Create group",
    "version": "1.0.0",
    "name": "PostGroups",
    "group": "Groups",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Groups",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "welcomeMessage",
            "description": "<p>Group welcome message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"name\": \"Group Name\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Group",
            "optional": false,
            "field": "group",
            "description": "<p>Group</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group._id",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.urlName",
            "description": "<p>Group URL name</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.owner",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.admins",
            "description": "<p>List of user ObjectId's</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "group.welcomeMessage",
            "description": "<p>Group welcome message</p>"
          },
          {
            "group": "201",
            "type": "Date",
            "optional": false,
            "field": "group.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"name\": \"Group Name\",\n  \"urlName\": \"group-name\",\n  \"owner\": \"55f6c56186b959ac12490e1a\",\n  \"admins\": [\"55f6c56186b959ac12490e1a\"],\n  \"country\": \"55f6c56186b959ac12490e1b\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\",\n  \"created\": \"2015-09-14T13:56:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/groups/:group",
    "title": "Update group",
    "version": "1.3.0",
    "name": "PutGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "admin",
        "title": "Auth admin",
        "description": "<p>Must be authenticated as an admin of the resource (eg. Group)</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "welcomeMessage",
            "description": "<p>Group welcome message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"name\": \"Group Name\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/groups.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Group",
            "optional": false,
            "field": "group",
            "description": "<p>Group</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group._id",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.urlName",
            "description": "<p>Group URL name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.owner",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.admins",
            "description": "<p>List of user ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.welcomeMessage",
            "description": "<p>Group welcome message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "group.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "group.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"name\": \"Group Name\",\n  \"urlName\": \"group-name\",\n  \"owner\": \"55f6c56186b959ac12490e1a\",\n  \"admins\": [\"55f6c56186b959ac12490e1a\"],\n  \"country\": \"55f6c56186b959ac12490e1b\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/groups/:group",
    "title": "Update group",
    "version": "1.0.0",
    "name": "PutGroup",
    "group": "Groups",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>Group ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "welcomeMessage",
            "description": "<p>Group welcome message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"name\": \"Group Name\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Groups",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Group",
            "optional": false,
            "field": "group",
            "description": "<p>Group</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group._id",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.urlName",
            "description": "<p>Group URL name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.owner",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.admins",
            "description": "<p>List of user ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.logo",
            "description": "<p>Group logo URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.coverImage",
            "description": "<p>Group cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "group.welcomeMessage",
            "description": "<p>Group welcome message</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "group.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "group.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"name\": \"Group Name\",\n  \"urlName\": \"group-name\",\n  \"owner\": \"55f6c56186b959ac12490e1a\",\n  \"admins\": [\"55f6c56186b959ac12490e1a\"],\n  \"country\": \"55f6c56186b959ac12490e1b\",\n  \"logo\": \"https://example.com/images/group-logo.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"welcomeMessage\": \"Example welcome message\",\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/likes/:like",
    "title": "Remove like",
    "version": "1.3.0",
    "name": "DeleteLike",
    "group": "Likes",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "like",
            "description": "<p>Like ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/likes.js",
    "groupTitle": "Likes",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/likes/:like",
    "title": "Remove like",
    "version": "1.0.0",
    "name": "DeleteLike",
    "group": "Likes",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "like",
            "description": "<p>Like ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Likes",
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/likes",
    "title": "List likes",
    "version": "1.5.0",
    "name": "GetLikes",
    "group": "Likes",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/likes.js",
    "groupTitle": "Likes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Like[]",
            "optional": false,
            "field": "likes",
            "description": "<p>List of likes</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes._id",
            "description": "<p>Like ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.group",
            "description": "<p>Group ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.campaign",
            "description": "<p>Campaign ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "likes.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.target.comment",
            "description": "<p>Comment ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "likes.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"group\": \"55f6c56186b959ac12490e1b\",\n  \"campaign\": \"55f6c56186b959ac12490e1c\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z,\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/likes",
    "title": "List likes",
    "version": "1.0.0",
    "name": "GetLikes",
    "group": "Likes",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Likes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Like[]",
            "optional": false,
            "field": "likes",
            "description": "<p>List of likes</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes._id",
            "description": "<p>Like ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.user",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "likes.target",
            "description": "<p>Target object. Only one property will be set</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.target.deed",
            "description": "<p>Deed ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "likes.target.act",
            "description": "<p>Act ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "likes.created",
            "description": "<p>Created timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"55f6c56186b959ac12490e1e\",\n  \"user\": \"55f6c56186b959ac12490e1a\",\n  \"target\": {\n    \"act\": \"55f6c56186b959ac12490e1d\"\n  },\n  \"created\": \"2015-09-14T13:56:27.250Z,\n}]",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Count users",
    "version": "1.1.0",
    "name": "CountUsers",
    "group": "Users",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n\"2796\"",
          "type": "text"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:user",
    "title": "Get user",
    "version": "1.6.0",
    "name": "GetUser",
    "group": "Users",
    "permission": [
      {
        "name": "none",
        "title": "No auth",
        "description": "<p>No authentication required</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's full name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.picture",
            "description": "<p>User's profile picture URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.coverImage",
            "description": "<p>User cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "user.groups",
            "description": "<p>List of group ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"firstName\": \"Fred\",\n  \"lastName\": \"Bloggs\",\n  \"name\": \"Fred Bloggs\",\n  \"picture\": \"https://example.com/images/picture.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"country\": \"55f6c56186b959ac12490e1a\",\n  \"groups\": [\"55f6c56186b959ac12490e1b\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Get current user",
    "version": "1.6.0",
    "name": "GetUsersMe",
    "group": "Users",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's full name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.picture",
            "description": "<p>User's profile picture URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.coverImage",
            "description": "<p>User cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "user.groups",
            "description": "<p>List of group ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"firstName\": \"Fred\",\n  \"lastName\": \"Bloggs\",\n  \"name\": \"Fred Bloggs\",\n  \"picture\": \"https://example.com/images/picture.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"country\": \"55f6c56186b959ac12490e1a\",\n  \"groups\": [\"55f6c56186b959ac12490e1b\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/me",
    "title": "Get current user",
    "version": "1.0.0",
    "name": "GetUsersMe",
    "group": "Users",
    "permission": [
      {
        "name": "user",
        "title": "Auth user",
        "description": "<p>Must be authenticated</p>"
      }
    ],
    "filename": "routes/_apidoc.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's full name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.picture",
            "description": "<p>User's profile picture URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.coverImage",
            "description": "<p>User cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "user.groups",
            "description": "<p>List of group ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"email\": \"fredb@example.com\",\n  \"firstName\": \"Fred\",\n  \"lastName\": \"Bloggs\",\n  \"name\": \"Fred Bloggs\",\n  \"picture\": \"https://example.com/images/picture.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"country\": \"55f6c56186b959ac12490e1a\",\n  \"groups\": [\"55f6c56186b959ac12490e1b\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/users/:user",
    "title": "Partial update user",
    "version": "1.6.0",
    "name": "PatchUser",
    "group": "Users",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "object[]",
            "optional": false,
            "field": "patches",
            "description": "<p>JSON Patch patches</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "patches.op",
            "description": "<p>Operation</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "patches.path",
            "description": "<p>JSON Pointer path</p>"
          },
          {
            "group": "Body",
            "type": "mixed",
            "optional": true,
            "field": "patches.value",
            "description": "<p>New path value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "[{\n  \"op\": \"add\",\n  \"path\": \"/groups/-\",\n  \"value\": \"55f6c56186b959ac12490e1d\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's full name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.picture",
            "description": "<p>User's profile picture URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.coverImage",
            "description": "<p>User cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "user.groups",
            "description": "<p>List of group ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"firstName\": \"Fred\",\n  \"lastName\": \"Bloggs\",\n  \"name\": \"Fred Bloggs\",\n  \"picture\": \"https://example.com/images/picture.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"country\": \"55f6c56186b959ac12490e1a\",\n  \"groups\": [\"55f6c56186b959ac12490e1b\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/users/:user",
    "title": "Partial update user",
    "version": "1.2.1",
    "name": "PatchUser",
    "group": "Users",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "object[]",
            "optional": false,
            "field": "patches",
            "description": "<p>JSON Patch patches</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "patches.op",
            "description": "<p>Operation</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "patches.path",
            "description": "<p>JSON Pointer path</p>"
          },
          {
            "group": "Body",
            "type": "mixed",
            "optional": true,
            "field": "patches.value",
            "description": "<p>New path value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "[{\n  \"op\": \"add\",\n  \"path\": \"/groups/-\",\n  \"value\": \"55f6c56186b959ac12490e1d\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's full name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.picture",
            "description": "<p>User's profile picture URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.coverImage",
            "description": "<p>User cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "user.groups",
            "description": "<p>List of group ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"email\": \"fredb@example.com\",\n  \"firstName\": \"Fred\",\n  \"lastName\": \"Bloggs\",\n  \"name\": \"Fred Bloggs\",\n  \"picture\": \"https://example.com/images/picture.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"country\": \"55f6c56186b959ac12490e1a\",\n  \"groups\": [\"55f6c56186b959ac12490e1b\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/users/:user",
    "title": "Partial update user",
    "version": "1.0.0",
    "name": "PatchUser",
    "group": "Users",
    "permission": [
      {
        "name": "owner",
        "title": "Auth owner",
        "description": "<p>Must be authenticated as the owner of the resource</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>User ObjectId</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "picture",
            "description": "<p>User's profile picture URL</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "coverImage",
            "description": "<p>User's cover image URL</p>"
          },
          {
            "group": "Body",
            "type": "string[]",
            "optional": true,
            "field": "groups",
            "description": "<p>List of group ObjectId's</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"firstName\": \"Foo\",\n  \"groups\": [\"55f6c56186b959ac12490e1h\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/_apidoc.js",
    "groupTitle": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user._id",
            "description": "<p>User ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.email",
            "description": "<p>User's email address</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.firstName",
            "description": "<p>User's first name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.lastName",
            "description": "<p>User's last name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.name",
            "description": "<p>User's full name</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.picture",
            "description": "<p>User's profile picture URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.coverImage",
            "description": "<p>User cover image URL</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.country",
            "description": "<p>Country ObjectId</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "user.groups",
            "description": "<p>List of group ObjectId's</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created",
            "description": "<p>Created timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.modified",
            "description": "<p>Modified timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"55f6c56186b959ac12490e1c\",\n  \"email\": \"fredb@example.com\",\n  \"firstName\": \"Fred\",\n  \"lastName\": \"Bloggs\",\n  \"name\": \"Fred Bloggs\",\n  \"picture\": \"https://example.com/images/picture.png\",\n  \"coverImage\": \"https://example.com/images/cover-image.png\",\n  \"country\": \"55f6c56186b959ac12490e1a\",\n  \"groups\": [\"55f6c56186b959ac12490e1b\"],\n  \"created\": \"2015-09-14T13:56:27.250Z\",\n  \"modified\": \"2015-09-14T14:32:27.250Z\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
