import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditProduct = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  })
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }
  const onChangeD = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }
  const onChangeB = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }
  const onChangeL = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/home")
  }

  return (
  
    <div className="container">
    <h4>Edit Product Details Page</h4>
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Desc</Label>
        <Input type="textarea" value={selectedUser.desc} onChange={onChangeD} name="desc" placeholder="Enter user" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>By</Label>
        <Input type="text" value={selectedUser.by} onChange={onChangeB} name="by" placeholder="Enter user" required></Input>
      </FormGroup>
      <FormGroup>
        <Label>Location</Label>
        <Input type="text" value={selectedUser.location} onChange={onChangeL} name="location" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit">Update Product</Button>
      <Link to="/home" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
    </div>
  )
}