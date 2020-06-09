import React from 'react';
import { Heading } from "./Heading";
// import { ProductList } from "./ProductList";
import  { CardList }  from "./CardList";

export const Home = () => {
  return (
    <>
    <div className="container">
      <Heading />
      <CardList />
      </div>
    </>
  )
}
