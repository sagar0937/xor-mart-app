import React, { useContext } from "react";
import SearchBar from "./Search";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import "./ProductList.css";

import { Row, Col, CardTitle, CardText, Card } from "reactstrap";

export const ProductList = () => {
  function OpenModalPop(id) {
    console.log(id);
  }
  const { users } = useContext(GlobalContext);

  return (
    <>
      {users.length > 0 ? (
        <Row className="row-wrapper-product-list">
          {users.map((user) => (
            <Col className="card-bt-margin" md={4} key={user.id}>
              <Card
                body
                className="card-wrapper"
                key={user.id}
                onClick={() => OpenModalPop(user.id)}
              >
                <CardTitle className="card-text-align">
                  <strong>{user.name}</strong>
                </CardTitle>
                <CardText className="card-text-align description-text">
                  {user.desc}
                </CardText>
                <CardText className="card-text-align">By:{user.by}</CardText>
                <CardText className="card-text-align">
                  Location:{user.location}
                </CardText>
                {/* <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>                 */}
                <Link to={`/edit/${user.id}`}>
                  {" "}
                  <i className="fa fa-edit edit-icon"></i>
                </Link>
                {/* <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>              */}
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <h4 className="text-center">No Product</h4>
      )}
      <SearchBar />
      <div></div>
    </>
  );
};

// <ListGroupItem className="d-flex" key={user.id}>
// <strong>{user.name}--</strong>
// <strong>{user.desc}</strong>
// <div className="ml-auto">
//   <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
//   <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
// </div>
// </ListGroupItem>
