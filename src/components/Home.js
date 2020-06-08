import React from 'react';
import { Heading } from "./Heading";
import { ProductList } from "./ProductList";

export const Home = () => {
  return (
    <>
    <div className="container">
      <Heading />
      <ProductList />
      </div>
    </>
  )
}
