import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
      desc,
    };
    addUser(newUser);
    history.push("/home");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  const onChange1 = (e) => {
    setDesc(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={onChange}
          name="name"
          placeholder="Enter user"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Description</Label>
        <Input
          type="textarea"
          value={desc}
          onChange={onChange1}
          name="desc"
          placeholder="Enter Descritiption"
          required
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/home" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
