import { HalResource } from "../src/main";

// JSON resource
const colJsonObjRes = {
  _links: {
    self: {
      name: "Users Collection",
      href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
      title: "Users Collection",
    },
    item: [
      {
        summary: {
          "user-name": "asdasd",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T14:51:44.372Z",
          "latest-update-date": "2020-03-04T14:51:44.372Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
        title: "User",
      },
      {
        summary: {
          "user-name": "asdasdasd",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T14:58:04.146Z",
          "latest-update-date": "2020-03-04T14:58:04.146Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasdasd",
        title: "User",
      },
      {
        summary: {
          "user-name": "asdasdasdasd",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T14:59:40.251Z",
          "latest-update-date": "2020-03-04T14:59:40.251Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasdasdasd",
        title: "User",
      },
      {
        summary: {
          "user-name": "awefawefawefawefawe",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T16:31:56.233Z",
          "latest-update-date": "2020-03-04T16:31:56.233Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/awefawefawefawefawe",
        title: "User",
      },
      {
        summary: {
          "user-name": "dagesargsertsre4564",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:07:29.106Z",
          "latest-update-date": "2020-03-06T16:07:29.106Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/dagesargsertsre4564",
        title: "User",
      },
      {
        summary: {
          "user-name": "sergsergsre",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-03T14:22:03.094Z",
          "latest-update-date": "2020-03-03T14:22:03.094Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/sergsergsre",
        title: "User",
      },
      {
        summary: {
          "user-name": "test2",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-27T17:15:09.441Z",
          "latest-update-date": "2020-02-27T17:15:09.441Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/test2",
        title: "User",
      },
      {
        summary: {
          "user-name": "test",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-02T12:23:41.145Z",
          "latest-update-date": "2020-03-02T12:23:41.145Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/test",
        title: "User",
      },
      {
        summary: {
          "user-name": "testesttes",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T14:51:11.611Z",
          "latest-update-date": "2020-03-04T14:51:11.611Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testesttes",
        title: "User",
      },
      {
        summary: {
          "user-name": "testidentity",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-03T15:15:22.033Z",
          "latest-update-date": "2020-03-03T15:15:22.033Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testidentity",
        title: "User",
      },
      {
        summary: {
          "user-name": "testpass",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T12:40:51.002Z",
          "latest-update-date": "2020-03-04T12:40:51.002Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testpass",
        title: "User",
      },
      {
        summary: {
          "user-name": "testuser12",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-03T15:49:36.200Z",
          "latest-update-date": "2020-03-03T15:49:36.200Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser12",
        title: "User",
      },
      {
        summary: {
          "user-name": "testuser1",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-20T14:32:29.333Z",
          "latest-update-date": "2020-02-20T14:32:29.333Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser1",
        title: "User",
      },
      {
        summary: {
          "user-name": "testuser2",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-20T14:33:01.528Z",
          "latest-update-date": "2020-02-20T14:33:01.528Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser2",
        title: "User",
      },
      {
        summary: {
          "user-name": "testuser3",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:00:57.297Z",
          "latest-update-date": "2020-02-21T15:00:57.297Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser3",
        title: "User",
      },
      {
        summary: {
          "user-name": "testuser4",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:16:10.564Z",
          "latest-update-date": "2020-02-21T15:16:10.564Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser4",
        title: "User",
      },
      {
        summary: {
          "user-name": "testuser5",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:21:17.873Z",
          "latest-update-date": "2020-02-21T15:21:17.873Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser5",
        title: "User",
      },
      {
        summary: {
          "user-name": "testuser6",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:39:24.852Z",
          "latest-update-date": "2020-02-21T15:39:24.852Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser6",
        title: "User",
      },
      {
        summary: {
          "user-name": "testuser7",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:43:06.555Z",
          "latest-update-date": "2020-02-21T15:43:06.555Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser7",
        title: "User",
      },
      {
        summary: {
          "user-name": "testuser8",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:44:21.705Z",
          "latest-update-date": "2020-02-21T15:44:21.705Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser8",
        title: "User",
      },
      {
        summary: {
          "user-name": "testusername",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T16:16:23.739Z",
          "latest-update-date": "2020-03-04T16:16:23.739Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testusername",
        title: "User",
      },
      {
        summary: {
          "user-name": "trssretserts453262",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:07:52.712Z",
          "latest-update-date": "2020-03-06T16:07:52.712Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/trssretserts453262",
        title: "User",
      },
      {
        summary: {
          "user-name": "trssretserts453262asdfasdfa",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:09:01.696Z",
          "latest-update-date": "2020-03-06T16:09:01.696Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/trssretserts453262asdfasdfa",
        title: "User",
      },
      {
        summary: {
          "user-name": "trssretserts453262asdfasdfaaefaew",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:09:30.473Z",
          "latest-update-date": "2020-03-06T16:09:30.473Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/trssretserts453262asdfasdfaaefaew",
        title: "User",
      },
      {
        summary: {
          "user-name": "turtur",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:02:04.689Z",
          "latest-update-date": "2020-03-06T16:02:04.689Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/turtur",
        title: "User",
      },
      {
        summary: {
          "user-name": "tyuktyukt",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-05T08:52:48.601Z",
          "latest-update-date": "2020-03-05T08:52:48.601Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/tyuktyukt",
        title: "User",
      },
      {
        summary: {
          "user-name": "werwetrwte2345",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:59:02.424Z",
          "latest-update-date": "2020-03-06T15:59:02.424Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte2345",
        title: "User",
      },
      {
        summary: {
          "user-name": "werwetrwte2345sfdg",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:07:16.456Z",
          "latest-update-date": "2020-03-06T16:07:16.456Z",
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte2345sfdg",
        title: "User",
      },
      {
        summary: {
          "user-name": "werwetrwte2",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:53:05.828Z",
          "latest-update-date": "2020-03-06T15:53:05.828Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte2",
        title: "User",
      },
      {
        summary: {
          "user-name": "werwetrwte3",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:54:33.405Z",
          "latest-update-date": "2020-03-06T15:54:33.405Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte3",
        title: "User",
      },
      {
        summary: {
          "user-name": "werwetrwte4",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:55:19.891Z",
          "latest-update-date": "2020-03-06T15:55:19.891Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte4",
        title: "User",
      },
      {
        summary: {
          "user-name": "werwetrwte",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:51:43.510Z",
          "latest-update-date": "2020-03-06T15:51:43.510Z",
        },
        name: "User",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte",
        title: "User",
      },
    ],
  },
  _options: {
    title: "Users Collection",
    links: [
      {
        method: "GET",
        rel: "fetch",
        mediaType: "application/vnd.hal+json",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
        title: "Fetch Users Collection",
      },
      {
        method: "POST",
        rel: "create",
        mediaType: "application/vnd.hal+json",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
        title: "Create new User",
        schema: {
          properties: {
            "user-name": {
              type: "string",
            },
            "temporary-password": {
              type: "string",
            },
          },
          required: ["user-name", "temporary-password"],
        },
      },
    ],
  },
};
const colSingleItemJsonObjRes = {
  _links: {
    self: {
      name: "Users Collection",
      href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
      title: "Users Collection",
    },
    item: {
      summary: {
        "user-name": "asdasd",
        "user-status": "FORCE_CHANGE_PASSWORD",
        enabled: true,
        "created-date": "2020-03-04T14:51:44.372Z",
        "latest-update-date": "2020-03-04T14:51:44.372Z",
      },
      name: "User",
      href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
      title: "User",
    },
  },
  _options: {
    title: "Users Collection",
    links: [
      {
        method: "GET",
        rel: "fetch",
        mediaType: "application/vnd.hal+json",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
        title: "Fetch Users Collection",
      },
      {
        method: "POST",
        rel: "create",
        mediaType: "application/vnd.hal+json",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
        title: "Create new User",
        schema: {
          properties: {
            "user-name": {
              type: "string",
            },
            "temporary-password": {
              type: "string",
            },
          },
          required: ["user-name", "temporary-password"],
        },
      },
    ],
  },
};

const itemJsonObjRes = {
  "user-name": "asdasd",
  "user-status": "FORCE_CHANGE_PASSWORD",
  enabled: true,
  "created-date": "2020-03-04T14:51:44.372Z",
  "latest-update-date": "2020-03-04T14:51:44.372Z",
  _links: {
    self: {
      name: "User",
      href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
      title: "User",
    },
  },
  _options: {
    title: "User",
    links: [
      {
        method: "GET",
        rel: "fetch",
        mediaType: "application/vnd.hal+json",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
        title: "Fetch User",
      },
      {
        method: "PATCH",
        rel: "update",
        mediaType: "application/vnd.hal+json",
        href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
        title: "Update User",
        schema: {
          properties: {
            "user-name": {
              type: "string",
            },
            address: {
              type: "object",
              properties: {
                city: { type: "string" },
                street: { type: "string" },
                number: { type: "integer" },
                flat: { type: "integer" },
                zip: { type: "string" },
              },
              required: ["city", "zip"],
            },
          },
        },
      },
    ],
    properties: {
      "user-name": {
        type: "string",
      },
      "temporary-password": {
        type: "string",
      },
      "user-status": {
        type: "string",
      },
      enabled: {
        type: "boolean",
      },
      "created-date": {
        type: "date",
      },
      "latest-update-date": {
        type: "date",
      },
    },
    required: ["user-name"],
  },
};

const interaction = {
  method: "GET",
  rel: "search",
  mediaType: "application/vnd.hal+json",
  href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
  title: "Search Users Collection",
};
const linkSelf = {
  rel: "self",
  name: "User",
  href: "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
  title: "User",
};

const otherLink = {
  rel: "otherLink",
  href: "https://otherLink.dxc.com",
  title: "otherLink",
};
const userResource = {
  _links: {
    self: {
      href: "https://cg8liqpnyg.execute-api.us-west-1.amazonaws.com/diaas-v2/customers/dxcassure",
    },
    accounts: {
      href: "https://cg8liqpnyg.execute-api.us-west-1.amazonaws.com/diaas-v2/customers/dxcassure/accounts",
    },
  },
  _options: {
    links: [
      {
        href: "https://cg8liqpnyg.execute-api.us-west-1.amazonaws.com/diaas-v2/customers/dxcassure",
        targetMediaType: "application/vnd.hal+json",
        method: "GET",
        rel: "describe-customer",
        title: "Get descriptive data relating to the customer",
        description: "Obtain a HAL representation describing the customer",
      },
      {
        href: "https://cg8liqpnyg.execute-api.us-west-1.amazonaws.com/diaas-v2/customers/dxcassure",
        targetMediaType: "application/json",
        method: "DELETE",
        rel: "delete-customer",
        title: "Delete the customer",
        description: "Delete the customer data",
      },
      {
        href: "https://cg8liqpnyg.execute-api.us-west-1.amazonaws.com/diaas-v2/customers/dxcassure",
        targetMediaType: "application/json",
        mediaType: "application/json",
        method: "PUT",
        rel: "update-customer-data",
        schema: {
          type: "object",
          properties: {
            client_name: {
              title: "client name",
              type: "object",
              additionalProperties: true,
            },
          },
        },
        title: "Update the client name for a given customer name",
        description: "Update the client name for a given customer name",
      },
      {
        href: "https://cg8liqpnyg.execute-api.us-west-1.amazonaws.com/diaas-v2/customers/dxcassure",
        targetMediaType: "application/json",
        mediaType: "application/json",
        method: "PATCH",
        rel: "patch-customer-data",
        schema: {
          type: "object",
          properties: {
            client_name: {
              title: "client name",
              type: "object",
              additionalProperties: true,
            },
          },
        },
        title: "Patch the client name for a given customer name",
        description: "Patch the client name for a given customer name",
      },
    ],
    properties: {
      customer_name: {
        type: "string",
      },
      client_name: {
        type: "string",
      },
      client_short_name: {
        type: "string",
      },
    },
    title: "Customer interactions",
    required: ["client-name"],
  },
  customer_title: "dxcassure",
  resource_name: "dxcassure",
  client_short_name: "dxcassure",
  client_name: "dxcassure",
  resource_type: "customer",
  update: 1587549151981,
  customer_name: "dxcassure",
};

const schemaProperties = [
  {
    key: 'customer_name',
    schema: {
      type: "string",
    },
  },
  {
    key: 'client_name',
    schema: {
      type: "string",
    },
  },
  {
    key: 'client_short_name',
    schema: {
      type: "string",
    },
  },
];

// HalResource objects
const itemHalRes = HalResource(itemJsonObjRes);
const itemHalResBlank = HalResource();
const colHalRes = HalResource(colJsonObjRes);
const colSingleItemHalRes = HalResource(colSingleItemJsonObjRes);
const colHalResBlank = HalResource();

describe("HAL item blank", function () {
  testItemBlank(itemHalResBlank);
});
describe("HAL item", function () {
  testItem(itemHalRes);
});
describe("HAL collection blank", function () {
  testCollectionBlank(colHalResBlank);
});
describe("HAL collection multiple item", function () {
  testCollection("Multiple item collection", colHalRes);
});
describe("HAL collection single item", function () {
  testCollection("Single item collection", colSingleItemHalRes);
});
describe("Adding links to empty HAL resource", function () {
  testAddLinks();
  testAddLinkWithoutHref();
});
describe("Adding title to empty HAL resource", function () {
  testAddTitle();
});
describe("Adding items to empty HAL resource", function () {
  testAddItem();
  testAddItems();
});
describe("Adding properties to empty HAL resource", function () {
  testAddOptionsProperties;
});
describe("Adding interaction to empty HAL resource", function () {
  testAddInteraction();
});
describe("Adding interaction to non-empty HAL resource", function () {
  testAddInteraction(HalResource(colJsonObjRes));
});
describe("Adding options to empty HAL resource", function () {
  testAddOptions();
});
/*describe("Getting Options properties ", function () {
  testGetOptionsProperties(itemHalRes);
});*/
describe("Adding schema to empty interaction", function () {
  testAddSchemaToInteraction();
});




function testItemBlank(itemHalResBlank) {
  // Simple test to validate title is not empty
  test("Empty title", () => {
    expect(itemHalResBlank.getTitle()).toBe("");
  });
  // Simple test to validate constructor is working
  test(`Resource represenation`, () => {
    expect(JSON.stringify(itemHalResBlank.resourceRepresentation)).toBe("{}");
  });
  // Simple test to validate title
  test("Get Title", () => {
    expect(itemHalResBlank.getTitle()).toBe("");
  });
  // Interactions (part of _options HAL extension)
  test(`Interactions (fetch) ${itemHalResBlank.getInteractions().length}`, () => {
    var interactions = itemHalResBlank.getInteractions();
    expect(interactions.length).toBe(0);
    // "fetch" interaction
    var fetchInteraction = itemHalResBlank.getInteraction("fetch");
    // Properties
    expect(fetchInteraction).toBe(undefined);
  });
  // Links
  test("Has Links", () => {
    expect(itemHalResBlank.getLinks().length).toBe(0);
  });
  test(`Simple Link (self)`, () => {
    var selfLink = itemHalResBlank.getLink("self");
    expect(selfLink).toBe(undefined);
  });
  // Properties
  test("Has properties", () => {
    expect(itemHalResBlank.getProperties().length).toBe(0);
  });
  testMissingProperty(itemHalResBlank, "user-name");
  testMissingProperty(itemHalResBlank, "user-status");
  testMissingProperty(itemHalResBlank, "created-date");
  testMissingProperty(itemHalResBlank, "latest-update-date");
  testMissingProperty(itemHalResBlank, "enabled");
  // Schema Properties
  test("Has schema properties", () => {
    expect(itemHalResBlank.getSchemaProperties().length).toBe(0);
  });
  test(`Simple schema ()`, () => {
    expect(itemHalResBlank.getSchemaProperty("user-name")).toBe(undefined);
    expect(itemHalResBlank.getSchemaProperty("temporary-password")).toBe(undefined);
    expect(itemHalResBlank.getSchemaProperty("user-status")).toBe(undefined);
    expect(itemHalResBlank.getSchemaProperty("enabled")).toBe(undefined);
    expect(itemHalResBlank.getSchemaProperty("created-date")).toBe(undefined);
    expect(itemHalResBlank.getSchemaProperty("latest-update-date")).toBe(undefined);
  });
  // Item]
  test("Has no items since it is not a collection", () => {
    expect(itemHalResBlank.getItems().length).toBe(0);
  });
}

function testItem(itemHalRes) {
  // Simple test to validate constructor is working
  test("Resource represenation", () => {
    expect(JSON.stringify(itemHalRes.resourceRepresentation)).not.toBe("");
  });
  // Simple test to validate title
  test("Get Title", () => {
    expect(itemHalRes.getTitle()).toBe("User");
  });
  // Interactions (part of _options HAL extension)
  test(`Interactions (fetch) ${itemHalRes.getInteractions().length}`, () => {
    var interactions = itemHalRes.getInteractions();
    expect(interactions.length).toBe(2);
    // "fetch" interaction
    var fetchInteraction = itemHalRes.getInteraction("fetch");
    // Properties
    expect(fetchInteraction.method).toBe("GET");
    expect(fetchInteraction.mediaType).toBe("application/vnd.hal+json");
    expect(fetchInteraction.href).toBe(
      "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd"
    );
    expect(fetchInteraction.title).toBe("Fetch User");
    expect(fetchInteraction.schema).toBe(undefined);
    // Functions of HalInteraction object
    // * All empty for fetch
    // * All not updated to latest JSON Schma spec as schema should be submissionSchema
    // See release notes: https://json-schema.org/draft/2019-09/json-schema-hypermedia.html#rfc.appendix.B
    expect(fetchInteraction.getSchemaProperties().length).toBe(0);
    expect(fetchInteraction.getSchemaProperty("fake")).toBe(undefined); // fake property
    expect(fetchInteraction.hasProperty("fake")).toBe(false);
    expect(fetchInteraction.getRequiredProperties().length).toBe(0);
    expect(fetchInteraction.isPropertyRequired("fake")).toBe(false);
  });
  test(`Interactions (patch) ${itemHalRes.getInteractions().length}`, () => {
    var interactions = itemHalRes.getInteractions();
    expect(interactions.length).toBe(2);
    // "patch" interaction
    var patchInteraction = itemHalRes.getInteraction("update");
    // Properties
    expect(patchInteraction.method).toBe("PATCH");
    expect(patchInteraction.mediaType).toBe("application/vnd.hal+json");
    expect(patchInteraction.href).toBe(
      "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd"
    );
    expect(patchInteraction.title).toBe("Update User");
    expect(patchInteraction.schema).not.toBe(undefined);
    // Functions of HalInteraction object
    // * Not empty!
    // * All not updated to latest JSON Schma spec as schema should be submissionSchema
    // See release notes: https://json-schema.org/draft/2019-09/json-schema-hypermedia.html#rfc.appendix.B
    expect(patchInteraction.getSchemaProperties().length).toBe(2);
    expect(patchInteraction.hasProperty("fake")).toBe(false);
    expect(patchInteraction.hasProperty("user-name")).toBe(true);
    expect(patchInteraction.hasProperty("address")).toBe(true);
    expect(patchInteraction.getSchemaProperty("fake")).toBe(undefined); // fake property
    expect(patchInteraction.getSchemaProperty("user-name")).not.toBe(undefined);
    expect(patchInteraction.getSchemaProperty("user-name").type).toBe("string"); // good property
    expect(patchInteraction.getSchemaProperty("address")).not.toBe(undefined);
    expect(patchInteraction.getSchemaProperty("address").type).toBe("object"); // good property
    // How to get nested schema proprammatically leveraging existing routines?
    // We alway can hard-code the data structure, but this is not dynamic
    var addressProperties = patchInteraction.getSchemaProperty("address").properties;
    expect(addressProperties.city.type).toBe("string"); // good property
    expect(addressProperties.street.type).toBe("string"); // good property
    expect(addressProperties.number.type).toBe("integer"); // good property
    expect(patchInteraction.getRequiredProperties().length).toBe(0);
    expect(patchInteraction.isPropertyRequired("fake")).toBe(false);
  });
  // Links
  test("Has Links", () => {
    expect(itemHalRes.getLinks().length).not.toBe(0);
  });
  test(`How many Links? ${itemHalRes.getLinks().length}`, () => {
    expect(itemHalRes.getLinks().length).toBe(1); // We know it has one
  });
  test(`Simple Link (self)`, () => {
    var selfLink = itemHalRes.getLink("self");
    expect(selfLink).not.toBe(null);
    expect(selfLink.title).toBe("User");
    expect(selfLink.name).toBe("User");
    expect(selfLink.href).toBe(
      "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd"
    );
  });
  // Prperties
  test("Has properties", () => {
    expect(itemHalRes.getProperties().length).not.toBe(0);
  });
  test(`How many properties? ${itemHalRes.getProperties().length}`, () => {
    expect(itemHalRes.getProperties().length).toBe(5);
  });
  testSimpleProperty(itemHalRes, "user-name", "asdasd");
  testSimpleProperty(itemHalRes, "user-status", "FORCE_CHANGE_PASSWORD");
  testSimpleProperty(itemHalRes, "created-date", "2020-03-04T14:51:44.372Z");
  testSimpleProperty(itemHalRes, "latest-update-date", "2020-03-04T14:51:44.372Z");
  testSimpleProperty(itemHalRes, "enabled", true);
  // Schema Properties
  test("Has schema properties", () => {
    expect(itemHalRes.getSchemaProperties().length).not.toBe(0);
  });
  test(`How many schema properties? ${itemHalRes.getSchemaProperties().length}`, () => {
    expect(itemHalRes.getSchemaProperties().length).toBe(6);
  });
  test(`Simple schema ()`, () => {
    expect(itemHalRes.getSchemaProperty("user-name").type).toBe("string");
    expect(itemHalRes.getSchemaProperty("temporary-password").type).toBe("string");
    expect(itemHalRes.getSchemaProperty("user-status").type).toBe("string");
    expect(itemHalRes.getSchemaProperty("enabled").type).toBe("boolean");
    expect(itemHalRes.getSchemaProperty("created-date").type).toBe("date");
    expect(itemHalRes.getSchemaProperty("latest-update-date").type).toBe("date");
  });
  // Item
  test("Has no items since it is not a collection", () => {
    expect(itemHalRes.getItems().length).toBe(0);
  });
}

function testCollection(testName, colHalRes) {
  // Item
  test(`${testName}: Has items since it is a collection: ${colHalRes.getItems().length}`, () => {
    expect(colHalRes.getItems().length).not.toBe(0);
  });

  test(`${testName}: First item`, () => {
    const firstItem = colHalRes.getItem();
    expect(firstItem).not.toBe(undefined);
    expect(firstItem.summary["user-name"]).toBe("asdasd");
    expect(firstItem.summary["user-status"]).toBe("FORCE_CHANGE_PASSWORD");
    expect(firstItem.summary.enabled).toBe(true);
    expect(firstItem.summary["created-date"]).toBe("2020-03-04T14:51:44.372Z");
    expect(firstItem.name).toBe("User");
    expect(firstItem.href).toBe(
      "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd"
    );
    expect(firstItem.title).toBe("User");
  });

  if (colHalRes.getItems().length > 1) {
    test(`${testName}: Last item`, () => {
      const lastItem = colHalRes.getItem(colHalRes.getItems().length - 1);

      expect(lastItem).not.toBe(undefined);
      expect(lastItem.summary["user-name"]).toBe("werwetrwte");
      expect(lastItem.summary["user-status"]).toBe("FORCE_CHANGE_PASSWORD");
      expect(lastItem.summary.enabled).toBe(true);
      expect(lastItem.summary["created-date"]).toBe("2020-03-06T15:51:43.510Z");
      expect(lastItem.summary["latest-update-date"]).toBe("2020-03-06T15:51:43.510Z");
      expect(lastItem.name).toBe("User");
      expect(lastItem.href).toBe(
        "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte"
      );
      expect(lastItem.title).toBe("User");
    });
  }
}

function testCollectionBlank(colHalResBlank) {
  // Item
  test("Has no items since it is empty", () => {
    expect(itemHalRes.getItems().length).toBe(0);
  });
}

function testMissingProperty(item, name) {
  test(`Missing property "${name}" is undefined:`, () => {
    expect(item.getProperty(name)).toBe(undefined);
  });
}

function testSimpleProperty(item, name, value) {
  test(`Existing property "${name}":`, () => {
    expect(item.getProperty(name).value).toBe(value);
  });
}

function testAddLinks() {
  const resource = HalResource();
  resource.addLink(linkSelf);
  const self = resource.getLink("self");
  test(`Link Self has been added :`, () => {
    expect(self).toBeDefined;
    expect(self.name).toBe(linkSelf.name);
    expect(self.href).toBe(linkSelf.href);
    expect(self.title).toBe(linkSelf.title);
  });
}

function testAddLinkWithoutHref(resource = HalResource()) {
  let error;
  try {
    resource.addLink({ rel: "self" });
  } catch (e) {
    error = e;
  }

  const self = resource.getLink("self");
  test("Adding Link without href :", () => {
    expect(self).toBeUndefined;
  });
  test("Adding Link without href throws error :", () => {
    expect(error).toBeDefined;
  });
}

function testAddTitle(resource = HalResource()) {
  resource.addTitle("testResource");
  test("Adding Title :", () => {
    expect(resource.getTitle()).toBe("testResource");
  });
}

function testAddItem(resource = HalResource()) {
  resource.addItem(colJsonObjRes._links.item[0]);
  test("Adding Item :", () => {
    expect(resource.getItems().length).toBe(1);
  });
}

function testAddItems(resource = HalResource()) {
  resource.addItems(colJsonObjRes._links.item);
  test("Adding Items :", () => {
    expect(resource.getItems().length).toBe(colJsonObjRes._links.item.length);
  });
}


function testAddOptionsProperties(resource = HalResource()) {
  resource.addOptionsProperties(schemaProperties);
  test("Adding properties :", () => {
    expect(resource.getOptionsProperties().length).toBe(3);
  });
  test("Checking property type: ", () => {
    expect(resource.getOptionsPropeties()[0].type).toBe("string");
  });
}

function testAddInteraction(resource = HalResource()) {
  resource.addInteraction(interaction);
  test("Adding interaction and check rel:", () => {
    expect(resource.getInteraction(interaction.rel).rel).toBe(interaction.rel);
  });
  test("Adding interaction and check href:", () => {
    expect(resource.getInteraction(interaction.rel).href).toBe(interaction.href);
  });
  test("Adding interaction and check method:", () => {
    expect(resource.getInteraction(interaction.rel).method).toBe(interaction.method);
  });
  test("Adding interaction and check title:", () => {
    expect(resource.getInteraction(interaction.rel).title).toBe(interaction.title);
  });
}

function testAddOptions(resource = HalResource()) {
  resource.addOptions(userResource._options);
  test("Adding Options and check title:", () => {
    expect(resource.getTitle()).toBe(userResource._options.title);
  });
  test("Adding Options and check links:", () => {
    expect(resource.getInteractions().length).toBe(userResource._options.links.length);
  });
  test("Adding Options and check properties:", () => {
    expect(resource.getSchemaProperties()["customer-name"]).toBe(userResource._options.properties["customer-name"]);
  });
  test("Adding Options and check required:", () => {
    expect(resource.getRequiredProperties()[0]).toBe(userResource._options.required[0]);
  });
}

function testAddSchemaToInteraction(emptyResource = HalResource()) {
  
  emptyResource.addInteraction({ rel: "fetch", href: "href" });
  emptyResource.getInteraction("fetch").addSchemaProperties(schemaProperties);

  test("Adding interaction Schema and check properties length:", () => {
    expect(emptyResource.getInteraction("fetch").getSchemaProperties().length).toBe(3);
  });

  test("Adding interaction Schema and check one of the properties:", () => {
    expect(emptyResource.getInteraction("fetch").getSchemaProperty("client-name")).toBeDefined;
  });
}

function testGetOptionsProperties(resource) {
  test("Expect the resource to have a 6 properties:", () => {
    expect(resource.getOptionsProperties().length).toBe(6);
  });
  test("Expect the resource to have a user-name property in optoins:", () => {
    expect(resource.getOptionsProperty('user_name')).toBeDefined;
  });
}
