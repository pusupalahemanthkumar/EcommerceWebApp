// Importing required files and packages here.
import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";

import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

// Defining Component Here.
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message children={error} variant="danger" />
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
