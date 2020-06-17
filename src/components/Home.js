import React from 'react';
import { Heading } from "./Heading";
import  { CardList }  from "./CardList";
import { useHistory  } from 'react-router-dom';

export const Home = () => {
  const history = useHistory();
  return (
    <>
    <div className="container">
      <Heading name={history}/>
      <CardList />
      </div>
    </>
  )
}
