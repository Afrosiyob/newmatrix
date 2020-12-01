import React, { useEffect } from "react";

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

  console.log("========================w3tfr43wefw34ft43w====");
  console.log(treeData);

  let fakeData = [];

  const createChildrens = (items) => {
    let newData = [];

    items.forEach((item, i) => {
      newData.push({
        key: item.id,
        login: (
          <TeamData
            image={process.env.REACT_APP_SERVER_URL + item.image}
            name={item.username}
          />
        ),
        link: item.email,
        telegram: item.telegram,
        username: item.username,
        about: (
          <AntModal
            userEmail={item.email}
            userLink={item.social_link}
            userName={item.username}
            userTelegram={item.telegram}
            userImage={item.image}
          />
        ),
        children:
          item.children && item.children.length
            ? createChildrens(item.children)
            : null,
      });
    });
    console.log("My items =================");
    console.log(items);
    console.log("My new data =================");
    console.log(newData);
    return newData;
  };

  if (treeData && treeData.children) {
    treeData.children.forEach((item, index) => {
      fakeData.push({
        key: item.id,
        login: (
          <TeamData
            image={process.env.REACT_APP_SERVER_URL + item.image}
            name={item.username}
          />
        ),
        link: item.email,
        telegram: item.telegram,
        username: item.username,
        about: (
          <AntModal
            userEmail={item.email}
            userLink={item.social_link}
            userName={item.username}
            userTelegram={item.telegram}
            userImage={item.image}
          />
        ),
        children:
          item.children && item.children.length
            ? createChildrens(item.children)
            : null,
      });
    });
  }
  // console.log("=========================");

  console.log(fakeData);
  // console.log(fakeData);

  const data = [
    {
      key: 1,
      login: (
        <TeamData
          image={
            "https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4"
          }
          name={"leo"}
        />
      ),
      age: 60,
      telegram: "New York No. 1 Lake Park",
      link: "wefewf",
      partners: "ewfew",
      about: <AntModal />,
      children: [
        {
          key: 11,
          login: (
            <TeamData
              image={
                "https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4"
              }
              name={"leo"}
            />
          ),
          age: 60,
          telegram: "New York No. 1 Lake Park",
          link: "wefewf",
          partners: "ewfew",
          about: <AntModal />,
        },
        {
          key: 22,
          login: (
            <TeamData
              image={
                "https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4"
              }
              name={"leo"}
            />
          ),
          age: 60,
          telegram: "New York No. 1 Lake Park",
          link: "wefewf",
          partners: "ewfew",
          about: <AntModal />,
          children: [
            {
              key: 33,
              login: (
                <TeamData
                  image={
                    "https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4"
                  }
                  name={"leo"}
                />
              ),
              age: 60,
              telegram: "New York No. 1 Lake Park",
              link: "wefewf",
              partners: "ewfew",
              about: <AntModal />,
            },
          ],
        },
        {
          key: 33,
          login: (
            <TeamData
              image={
                "https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4"
              }
              name={"leo"}
            />
          ),
          age: 60,
          telegram: "New York No. 1 Lake Park",
          link: "wefewf",
          partners: "ewfew",
          about: <AntModal />,
          children: [
            {
              key: 55,
              login: (
                <TeamData
                  image={
                    "https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4"
                  }
                  name={"leo"}
                />
              ),
              age: 60,
              telegram: "New York No. 1 Lake Park",
              link: "wefewf",
              partners: "ewfew",
              about: <AntModal />,
              children: [
                {
                  key: 65,
                  login: (
                    <TeamData
                      image={
                        "https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4"
                      }
                      name={"leo"}
                    />
                  ),
                  age: 60,
                  telegram: "New York No. 1 Lake Park",
                  link: "wefewf",
                  partners: "ewfew",
                  about: <AntModal />,
                },
                {
                  key: 169,
                  login: (
                    <TeamData
                      image={
                        "https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4"
                      }
                      name={"leo"}
                    />
                  ),
                  age: 60,
                  telegram: "New York No. 1 Lake Park",
                  link: "wefewf",
                  partners: "ewfew",
                  about: <AntModal />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 26,
      login: (
        <TeamData
          image={
            "https://avatars2.githubusercontent.com/u/45900728?s=460&u=ecf18e8e6d8dc738e132acbc29fbc187cbfdf6fe&v=4"
          }
          name={"leo"}
        />
      ),
      age: 60,
      telegram: "New York No. 1 Lake Park",
      link: "wefewf",
      partners: "ewfew",
      about: <AntModal />,
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={fakeData}
        scroll={{ x: 1500, y: 500 }}
      />
    </>
  );
}
