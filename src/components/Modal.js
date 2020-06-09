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
    const newUser = {
      id: uuid(),
      name,
      desc,
      by,
      location,
    };
    addUser(newUser);
    document.querySelector("#title").value = "";
    document.querySelector("#desc").value = "";
    history.push("/home");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  const onChangeD = (e) => {
    setDesc(e.target.value);
  };
  const onChangeB = (e) => {
    setBy(e.target.value);
  };
  const onChangeL = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <Link to="#" className="btn btn-danger ml-2" onClick={toggle}>
        Add
      </Link>
      {/* <Link className="btn btn-danger ml-2" href="/">Logout</Link> */}
      {/* <Button color="danger" onClick={toggle}>Add</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Product</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
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
              <Label for="exampleText">By</Label>
              <Input
                type="text"
                id="by"
                value={by}
                onChange={onChangeB}
                name="by"
                placeholder="Owner"
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
            <Button color="primary"  type="submit" onClick={toggle}>
              Submit
            </Button>
            {/* <Link to="/add" className="btn btn-danger ml-2" onClick={toggle}>Cancel</Link> */}
            <Button type="text" className="ml-2"  onClick={toggle}>
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
export default ModalExample;
