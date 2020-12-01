import React from "react";

import { Table } from "antd";
import AntModal from "./AntModal/AntModal";
import TeamData from "../TeamData/TeamData";

// rowSelection objects indicates the need for row selection

export function TeamTable({ treeData }) {
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

  const data = [];

  console.log("yangi mazgi ====================================");
  console.log(treeData);
  console.log("====================================");

  treeData.children.forEach((item, index) => {
    data.push({
      key: index,
      login: <TeamData image={item.image} name={item.username} />,
      telegram: item.telegram,
      link: item.social_link,

      partners: 55,
      address: "New York No. 1 Lake Park",
      about: <AntModal />,

      children: [
        {
          key: 11,
          login: (
            <TeamData
              image={
                "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              }
              name={"Leo"}
            />
          ),
          age: 42,
          address: "New York No. 2 Lake Park",
        },
      ],
    });
  });

  return (
    <>
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 500 }} />
    </>
  );
}
