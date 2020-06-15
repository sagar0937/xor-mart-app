import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "font-awesome/css/font-awesome.min.css";

export const ModalExample1 = (props) => {
//   console.log("prp---", props);
  const {  className } = props;

  const [modal, setModal] = useState(false);
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const toggle = (users) => {
    console.log("selectedUser", selectedUser);
    editUser(selectedUser);
    setModal(!modal);
  };
  useEffect(() => {
    //const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === props.id);
    setSelectedUser(selectedUser);
    // console.log("edit");
  }, [props.id, users]);

  //const currentUserId = props.match.params.id;
  //console.log("currentUserId",currentUserId)
  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const onChangeD = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const onChangeB = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const onChangeL = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    history.push("/home");
  };
  return (
    <div>
      {/* {props.currentUser === props.userBy ?  <Button color="danger" onClick={toggle}>Edit</Button>:''} */}
      {props.currentUser === props.userBy ? (
        <i className="fa fa-edit edit-icon" onClick={toggle}>
          {" "}
        </i>
      ) : (
        ""
      )}
      {/* <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Product</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit} autocomplete="off">
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                value={selectedUser.name}
                onChange={onChange}
                name="name"
                // placeholder="Enter user"
                required
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input
                type="textarea"
                value={selectedUser.desc}
                onChange={onChangeD}
                name="desc"
                //placeholder="Enter user"
                required
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">By</Label>
              <Input
                type="text"
                value={selectedUser.by}
                onChange={onChangeB}
                name="by"
                //placeholder="Enter user"
                required
                disabled={true}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Location</Label>
              <Input
                type="text"
                value={selectedUser.location}
                onChange={onChangeL}
                name="location"
                //placeholder="Enter user"
                required
              ></Input>
            </FormGroup>
            <Button color="primary" type="submit" onClick={toggle}>
              Product Update
            </Button>
            {/* <Link to="/add" className="btn btn-danger ml-2" onClick={toggle}>Cancel</Link> */}
            <Button type="text" className="ml-2" onClick={toggle}>
              Cancel
            </Button>
          </Form>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit</Button>
        <Link to="/home" className="btn btn-danger ml-2">Cancel</Link> 
        </ModalFooter> */}
      </Modal>
    </div>
  );
};
