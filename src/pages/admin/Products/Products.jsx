import React, { useEffect } from "react";

import { Container } from "reactstrap";

import { Table, Button } from "antd";

import ProductItem from "./ProductItem/ProductItem";

import ProductRating from "./ProductRating/ProductRating";

import "./Products.scss";
import AddProducs from "./AddProducts/AddProducs";
import { connect } from "react-redux";
import {
  getProductsThunk,
  removeProductThunk,
} from "../../../store/products/actions";
import TitleHamlet from "../../../components/TitleHamlet/TitleHamlet";

function Products(props) {
  useEffect(() => {
    props.getProductsThunk();
  }, []);

  const removeBook = (book_id) => {
    props.removeProductThunk(book_id);
    props.getProductsThunk();
    // alert(book_id);
  };

  const fakeData = [];

  const getProducts = () => {
    props.products.map((item, index) => {
      fakeData.push({
        key: index,
        product: (
          <ProductItem
            image={
              "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            }
            title={item.name}
            subtitle={item.description}
          />
        ),
        price: 32,
        solded: 2,
        reviews: <ProductRating />,

        action: props.is_superuser ? (
          <Button
            danger
            onClick={() => {
              removeBook(item.id);
            }}
          >
            {" "}
            <i className="far fa-trash-alt mr-2"></i> Delete
          </Button>
        ) : null,
      });
    });
  };

  if (props.products) {
    getProducts();
  }

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
      title: "Action",
      key: "action",
      dataIndex: "action",
    },
  ];

  return (
    <Container fluid>
      <TitleHamlet title="Products" />
      <h1 className="font-weight-bold w-100 mb-3">Products</h1>
      <h4 className="w-100 text-muted mb-3">Our products</h4>
      <div className="mb-3">
        <Table columns={columns} dataSource={fakeData} />
      </div>

      {props.is_superuser ? <AddProducs /> : null}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  is_superuser: state.userReducer.user.is_superuser,
  products: state.productReducer.products,
});

const mapDispatchToProps = {
  getProductsThunk,
  removeProductThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
