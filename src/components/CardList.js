import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Card,
  Modal,
  ModalBody,
  Input,
  ModalHeader,
} from "reactstrap";
//import { Link } from "react-router-dom";
// import Popup from './Popup';
import "./CardList.css";
//import "./Popup.css";
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
  //const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});

  const [modal, setModal] = useState(false);

  const toggleClose = () => setModal(!modal);
  const closeBtn = (
    <button className="close" onClick={toggleClose}>
      &times;
    </button>
  );

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const togglePopup = (u) => {
    setUser(u);
    // setIsOpen(true);
    setModal(true);
  };

  // const togglePopupHide = (u) => {
  //   setUser(u)
  //   //setIsOpen(false);
  //   setModal(false)
  // };

   useEffect(() => {
      const results = users.filter(person =>{
        return person.name.toLowerCase().includes(searchTerm)
      }

      );
      setSearchResults(results);
    }, [searchTerm]);

  useEffect(() => {
    setSearchResults(users);
  }, [users]);

  // useEffect(() => {
  //   const results = users.filter((person) => {
  //     return person.name.toLowerCase().includes(searchTerm);
  //   });
  //   setSearchResults(results);
  // }, [searchTerm, users]);

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
                    onClick={() => togglePopup(user)}
                    className="card-text-align description-text font-size-t"
                  >
                    {user.desc}
                  </CardText>

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
      {/* {isOpen && (
                    <Popup content={user.desc} handleClose={togglePopupHide} />
                  )} */}
      {modal && (
        <ModalPopUp
          content={user.desc}
          modal={modal}
          toggle1={togglePopup}
          closeBtn={closeBtn}
        />
      )}
    </div>
  );
};
// export const Popup = (props) => {
//   return (
//     <div className="popup-box">
//       <div className="box">
//         <span className="close-icon" onClick={props.handleClose}>
//           x
//         </span>
//         <textarea value={props.content} row={4}/>
//       </div>
//     </div>
//   );
// };

//modal

export const ModalPopUp = (props) => {
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle1}>
        <ModalHeader toggle={props.toggle1} close={props.closeBtn}>
          Description
        </ModalHeader>
        <ModalBody>
          <Input type="textarea" value={props.content} rows={5} />
        </ModalBody>
      </Modal>
    </div>
  );
};
