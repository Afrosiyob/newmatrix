import React from "react";

import { Table } from "antd";
import AntModal from "./AntModal/AntModal";

const columns = [
  {
    title: "Login",
    dataIndex: "login",
    key: "login",
    fixed: "left",
  },
  {
    title: "Telegram",
    dataIndex: "telegram",
    key: "telegram",
  },
  {
    title: "Link",
    dataIndex: "link",
    key: "link",
  },
  {
    title: "Turnover",
    dataIndex: "turnover",
    width: "10%",
    key: "turnover",
  },
  {
    title: "Partners",
    dataIndex: "partners",
    key: "partners",
    width: "10%",
  },
  {
    title: "About",
    dataIndex: "about",
    key: "about",
    width: "10%",
    fixed: "right",
  },
];

const data = [
  {
    key: 1,
    login: "John Brown sr.",
    telegram: "@telegram",
    link: "link.com",
    turnover: 12,
    partners: 55,
    address: "New York No. 1 Lake Park",
    about: <AntModal />,
    children: [
      {
        key: 11,
        login: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
      },
      {
        key: 12,
        login: "John Brown jr.",
        age: 30,
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 121,
            login: "Jimmy Brown",
            age: 16,
            address: "New York No. 3 Lake Park",
          },
        ],
      },
      {
        key: 13,
        login: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        children: [
          {
            key: 131,
            login: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 1311,
                login: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
              },
              {
                key: 1312,
                login: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    login: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    about: <AntModal />,
  },
  {
    key: 3,
    login: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 4,
    login: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 5,
    login: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 6,
    login: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 7,
    login: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 8,
    login: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 9,
    login: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 10,
    login: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 11,
    login: "Joe Black",
    age: 32,
    ageTwo: 66,
    address: "Sidney No. 1 Lake Park",
  },
];

// rowSelection objects indicates the need for row selection

export function TeamTable() {
  return (
    <>
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
    </>
  );
}
