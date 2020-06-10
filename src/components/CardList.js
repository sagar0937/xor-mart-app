import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Row, Col, CardTitle, CardText, Card } from "reactstrap";
import { Link } from "react-router-dom";
import "./CardList.css";

export const CardList = () => {
  function OpenModalPop(id) {
    //console.log(id);
  }
  const { users } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  //  useEffect(() => {
  //     const results = users.filter(person =>{
  //       return person.name.toLowerCase().includes(searchTerm)
  //     }

  //     );
  //     setSearchResults(results);
  //   }, [searchTerm]);

  useEffect(() => {
    setSearchResults(users);
  }, [users]);

  useEffect(() => {
    const results = users.filter((person) => {
      return person.name.toLowerCase().includes(searchTerm);
    });
    setSearchResults(results);
  }, [searchTerm,users]);

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <>
        {users.length > 0 ? (
          <Row className="row-wrapper-product-list">
            {searchResults.map((user) => (
              <Col className="card-bt-margin" md={4} key={user.id}>
                <Card
                  body
                  className="card-wrapper"
                  key={user.id}
                  onClick={() => OpenModalPop(user.id)}
                >
                  <CardTitle className="card-text-align font-size-t">
                    {user.name}
                  </CardTitle>
                  <CardText className="card-text-align description-text font-size-t">
                    {user.desc}
                  </CardText>
                  <CardText className="card-text-align">
                    By:<span className="sub-text">{user.by}</span>
                  </CardText>
                  <CardText className="card-text-align">
                    Location :<span className="sub-text">{user.location}</span>
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
      </>
    </div>
  );
};
