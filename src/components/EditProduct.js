import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "font-awesome/css/font-awesome.min.css";

export const EditProduct = (props) => {
  
  const { className } = props;
  const [modal, setModal] = useState(false);
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const history = useHistory();
  const toggle = (users) => {
    editUser(selectedUser);
    setModal(!modal);
  };

  useEffect(() => {
    const selectedUser = users.find((user) => user.id === props.id);
    setSelectedUser(selectedUser);
  }, []);

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  const onChangeD = (e) => {
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
      {props.currentUser === props.userBy ? (
        <i className="fa fa-edit edit-icon" onClick={toggle}>
          {" "}
        </i>
      ) : (
        ""
      )}

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Product</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit} autoComplete="off">
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                value={selectedUser.name}
                onChange={onChange}
                name="name"
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
                required
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Location</Label>
              <Input
                type="text"
                value={selectedUser.location}
                onChange={onChangeL}
                name="location"
                required
              ></Input>
            </FormGroup>
            <Button color="primary" type="submit" onClick={toggle}>
              Product Update
            </Button>
            <Button type="text" className="ml-2" onClick={toggle}>
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
