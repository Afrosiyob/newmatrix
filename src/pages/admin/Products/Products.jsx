import React from "react";

import { Container } from "reactstrap";

import { Table } from "antd";

import ProductItem from "./ProductItem/ProductItem";

import ProductRating from "./ProductRating/ProductRating";
import "./Products.scss";

const columns = [
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },

  {
    title: "Solded",
    key: "solded",
    dataIndex: "solded",
  },
  {
    title: "Reviews",
    key: "reviews",
    dataIndex: "reviews",
  },
  {
    title: "Comments",
    key: "comments",
    dataIndex: "comments",
  },
];

const data = [
  {
    key: "1",
    product: (
      <ProductItem
        image={
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
        title={"product title"}
        subtitle={"products subtitle"}
      />
    ),
    price: 32,
    solded: 35,
    reviews: <ProductRating />,
    comments: "comments",
  },
  {
    key: "2",
    product: (
      <ProductItem
        image={
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
        title={"product title"}
        subtitle={"products subtitle"}
      />
    ),
    price: 32,
    solded: 35,
    reviews: <ProductRating />,
    comments: ["nice", "developer"],
  },
  {
    key: "3",
    product: (
      <ProductItem
        image={
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
        title={"product title"}
        subtitle={"products subtitle"}
      />
    ),
    price: 32,
    solded: 35,
    reviews: <ProductRating />,
    comments: ["nice", "developer"],
  },
];

function Products() {
  return (
    <Container fluid>
      <h1 className="font-weight-bold w-100 mb-3">Products</h1>
      <h4 className="w-100 text-muted mb-3">Our products</h4>
      <Table columns={columns} dataSource={data} />
    </Container>
  );
}

export default Products;
