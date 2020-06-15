import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Row, Col, CardTitle, CardText, Card } from "reactstrap";
//import { Link } from "react-router-dom";
// import Popup from './Popup';
import "./CardList.css";
import { ModalExample1 } from "./EditModal";

export const CardList = () => {
  const current = localStorage.getItem("username");
  //console.log(current);
  //  function OpenModalPop(id) {
  //   togglePopup(id);
  //  }
  const { users } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
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
  }, [searchTerm, users]);

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
                <Card body className="card-wrapper" key={user.id}>
                  <CardTitle className="card-text-align font-size-t">
                    {user.name}
                  </CardTitle>
                  <CardText
                    onClick={togglePopup}
                    className="card-text-align description-text font-size-t"
                  >
                    {user.desc}
                  </CardText>
                  {isOpen && (
                    <Popup content={user.desc} handleClose={togglePopup} />
                  )}
                  <CardText className="card-text-align">
                    By:<span className="sub-text">{user.by}</span>
                  </CardText>
                  <CardText className="card-text-align">
                    Location :<span className="sub-text">{user.location}</span>
                  </CardText>
                  {/* <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>                 */}
                  {/* <Link to={`/edit/${user.id}`}>                   */}
                  {current === user.by ? (
                    <i className="fa fa-edit edit-icon"> </i>
                  ) : (
                    ""
                  )}
                  {/* </Link>  */}
                  <ModalExample1
                    id={user.id}
                    currentUser={current}
                    userBy={user.by}
                  />
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
export const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};
