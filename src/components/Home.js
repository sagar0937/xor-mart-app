import React from 'react';
import { Heading } from "./Heading";
// import { ProductList } from "./ProductList";
import  {SearchBar}  from "./Search";

export const Home = () => {
  return (
    <>
    <div className="container">
      <Heading />
      <SearchBar />
      </div>
    </>
  )
}
