import React, { useState, useContext } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

export const ModalExample = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [by, setBy] = useState("");
  const [location, setLocation] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    setName("");
    setDesc("");
    setBy("");
    setLocation("");
    const newUser = {
      id: uuid(),
      name,
      by: localStorage.getItem("username"),
      desc,
      location,
    };
    addUser(newUser);
    history.push("/home");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  const onChangeD = (e) => {
    setDesc(e.target.value);
  };

  const onChangeL = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <Link
        to="#"
        className="btn btn-danger ml-2 d-none d-lg-block"
        onClick={toggle}
      >
        Add
      </Link>
      <Link to="#" className="d-lg-none" onClick={toggle}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </Link>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Product</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit} autoComplete="off">
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                id="title"
                value={name}
                onChange={onChange}
                name="name"
                placeholder="Enter title"
                required
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input
                type="textarea"
                id="desc"
                value={desc}
                onChange={onChangeD}
                name="desc"
                placeholder="Enter Descritiption"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Location</Label>
              <Input
                type="text"
                id="location"
                value={location}
                onChange={onChangeL}
                name="location"
                placeholder="Location"
                required
              />
            </FormGroup>
            <Button color="primary" type="submit" onClick={toggle}>
              Submit
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
export default ModalExample;
