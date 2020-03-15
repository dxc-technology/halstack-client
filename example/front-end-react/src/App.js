import React from "react";
import { HalResource } from "@dxc-technology/halstack-client";

import "./App.css";

const App = () => {
  const colRes = HalResource(collectionResource);
  const itemRes = HalResource(itemResource);

  return (
    <div className="App">
      <div className="App">{JSON.stringify(colRes)}</div>
      <div className="App">
        {"" + itemRes.getProperty("user-name").isRequired()}
      </div>
    </div>
  );
};

const collectionResource = {
  _links: {
    self: {
      name: "Users Collection",
      href:
        "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
      title: "Users Collection"
    },
    item: [
      {
        summary: {
          "user-name": "asdasd",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T14:51:44.372Z",
          "latest-update-date": "2020-03-04T14:51:44.372Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
        title: "User"
      },
      {
        summary: {
          "user-name": "asdasdasd",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T14:58:04.146Z",
          "latest-update-date": "2020-03-04T14:58:04.146Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasdasd",
        title: "User"
      },
      {
        summary: {
          "user-name": "asdasdasdasd",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T14:59:40.251Z",
          "latest-update-date": "2020-03-04T14:59:40.251Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasdasdasd",
        title: "User"
      },
      {
        summary: {
          "user-name": "awefawefawefawefawe",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T16:31:56.233Z",
          "latest-update-date": "2020-03-04T16:31:56.233Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/awefawefawefawefawe",
        title: "User"
      },
      {
        summary: {
          "user-name": "dagesargsertsre4564",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:07:29.106Z",
          "latest-update-date": "2020-03-06T16:07:29.106Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/dagesargsertsre4564",
        title: "User"
      },
      {
        summary: {
          "user-name": "sergsergsre",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-03T14:22:03.094Z",
          "latest-update-date": "2020-03-03T14:22:03.094Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/sergsergsre",
        title: "User"
      },
      {
        summary: {
          "user-name": "test2",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-27T17:15:09.441Z",
          "latest-update-date": "2020-02-27T17:15:09.441Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/test2",
        title: "User"
      },
      {
        summary: {
          "user-name": "test",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-02T12:23:41.145Z",
          "latest-update-date": "2020-03-02T12:23:41.145Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/test",
        title: "User"
      },
      {
        summary: {
          "user-name": "testesttes",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T14:51:11.611Z",
          "latest-update-date": "2020-03-04T14:51:11.611Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testesttes",
        title: "User"
      },
      {
        summary: {
          "user-name": "testidentity",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-03T15:15:22.033Z",
          "latest-update-date": "2020-03-03T15:15:22.033Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testidentity",
        title: "User"
      },
      {
        summary: {
          "user-name": "testpass",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T12:40:51.002Z",
          "latest-update-date": "2020-03-04T12:40:51.002Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testpass",
        title: "User"
      },
      {
        summary: {
          "user-name": "testuser12",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-03T15:49:36.200Z",
          "latest-update-date": "2020-03-03T15:49:36.200Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser12",
        title: "User"
      },
      {
        summary: {
          "user-name": "testuser1",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-20T14:32:29.333Z",
          "latest-update-date": "2020-02-20T14:32:29.333Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser1",
        title: "User"
      },
      {
        summary: {
          "user-name": "testuser2",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-20T14:33:01.528Z",
          "latest-update-date": "2020-02-20T14:33:01.528Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser2",
        title: "User"
      },
      {
        summary: {
          "user-name": "testuser3",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:00:57.297Z",
          "latest-update-date": "2020-02-21T15:00:57.297Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser3",
        title: "User"
      },
      {
        summary: {
          "user-name": "testuser4",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:16:10.564Z",
          "latest-update-date": "2020-02-21T15:16:10.564Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser4",
        title: "User"
      },
      {
        summary: {
          "user-name": "testuser5",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:21:17.873Z",
          "latest-update-date": "2020-02-21T15:21:17.873Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser5",
        title: "User"
      },
      {
        summary: {
          "user-name": "testuser6",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:39:24.852Z",
          "latest-update-date": "2020-02-21T15:39:24.852Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser6",
        title: "User"
      },
      {
        summary: {
          "user-name": "testuser7",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:43:06.555Z",
          "latest-update-date": "2020-02-21T15:43:06.555Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser7",
        title: "User"
      },
      {
        summary: {
          "user-name": "testuser8",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-02-21T15:44:21.705Z",
          "latest-update-date": "2020-02-21T15:44:21.705Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testuser8",
        title: "User"
      },
      {
        summary: {
          "user-name": "testusername",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-04T16:16:23.739Z",
          "latest-update-date": "2020-03-04T16:16:23.739Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/testusername",
        title: "User"
      },
      {
        summary: {
          "user-name": "trssretserts453262",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:07:52.712Z",
          "latest-update-date": "2020-03-06T16:07:52.712Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/trssretserts453262",
        title: "User"
      },
      {
        summary: {
          "user-name": "trssretserts453262asdfasdfa",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:09:01.696Z",
          "latest-update-date": "2020-03-06T16:09:01.696Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/trssretserts453262asdfasdfa",
        title: "User"
      },
      {
        summary: {
          "user-name": "trssretserts453262asdfasdfaaefaew",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:09:30.473Z",
          "latest-update-date": "2020-03-06T16:09:30.473Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/trssretserts453262asdfasdfaaefaew",
        title: "User"
      },
      {
        summary: {
          "user-name": "turtur",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:02:04.689Z",
          "latest-update-date": "2020-03-06T16:02:04.689Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/turtur",
        title: "User"
      },
      {
        summary: {
          "user-name": "tyuktyukt",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-05T08:52:48.601Z",
          "latest-update-date": "2020-03-05T08:52:48.601Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/tyuktyukt",
        title: "User"
      },
      {
        summary: {
          "user-name": "werwetrwte2345",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:59:02.424Z",
          "latest-update-date": "2020-03-06T15:59:02.424Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte2345",
        title: "User"
      },
      {
        summary: {
          "user-name": "werwetrwte2345sfdg",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T16:07:16.456Z",
          "latest-update-date": "2020-03-06T16:07:16.456Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte2345sfdg",
        title: "User"
      },
      {
        summary: {
          "user-name": "werwetrwte2",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:53:05.828Z",
          "latest-update-date": "2020-03-06T15:53:05.828Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte2",
        title: "User"
      },
      {
        summary: {
          "user-name": "werwetrwte3",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:54:33.405Z",
          "latest-update-date": "2020-03-06T15:54:33.405Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte3",
        title: "User"
      },
      {
        summary: {
          "user-name": "werwetrwte4",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:55:19.891Z",
          "latest-update-date": "2020-03-06T15:55:19.891Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte4",
        title: "User"
      },
      {
        summary: {
          "user-name": "werwetrwte",
          "user-status": "FORCE_CHANGE_PASSWORD",
          enabled: true,
          "created-date": "2020-03-06T15:51:43.510Z",
          "latest-update-date": "2020-03-06T15:51:43.510Z"
        },
        name: "User",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/werwetrwte",
        title: "User"
      }
    ]
  },
  _options: {
    title: "Users Collection",
    links: [
      {
        method: "GET",
        rel: "fetch",
        mediaType: "application/vnd.hal+json",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
        title: "Fetch Users Collection"
      },
      {
        method: "POST",
        rel: "create",
        mediaType: "application/vnd.hal+json",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users",
        title: "Create new User",
        schema: {
          properties: {
            "user-name": {
              type: "string"
            },
            "temporary-password": {
              type: "string"
            }
          },
          required: ["user-name", "temporary-password"]
        }
      }
    ]
  }
};

const itemResource = {
  "user-name": "asdasd",
  "user-status": "FORCE_CHANGE_PASSWORD",
  enabled: true,
  "created-date": "2020-03-04T14:51:44.372Z",
  "latest-update-date": "2020-03-04T14:51:44.372Z",
  _links: {
    self: {
      name: "User",
      href:
        "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
      title: "User"
    }
  },
  _options: {
    title: "User",
    links: [
      {
        method: "GET",
        rel: "fetch",
        mediaType: "application/vnd.hal+json",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
        title: "Fetch User"
      },
      {
        method: "PATCH",
        rel: "update",
        mediaType: "application/vnd.hal+json",
        href:
          "https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users/asdasd",
        title: "Update User",
        schema: {
          properties: {}
        }
      }
    ],
    properties: {
      "user-name": {
        type: "string"
      },
      "temporary-password": {
        type: "string"
      },
      "user-status": {
        type: "string"
      },
      enabled: {
        type: "boolean"
      },
      "created-date": {
        type: "date"
      },
      "latest-update-date": {
        type: "date"
      }
    },
    required: ["user-name"]
  }
};
export default App;
