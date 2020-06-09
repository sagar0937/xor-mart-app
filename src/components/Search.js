


// import React, { useContext,useEffect } from 'react';
// import { GlobalContext } from "../context/GlobalState";
// import ProductList  from './ProductList'

// const SearchBar = () => {

//   const { users } = useContext(GlobalContext);
//   console.log("---",users)
//  const [searchTerm, setSearchTerm] = React.useState("");
//  const [searchResults, setSearchResults] = React.useState([]);
//  const handleChange = event => {
//     setSearchTerm(event.target.value);
//   };
//  React.useEffect(() => {
//     const results = users.filter(person =>{
//       console.log("per",searchTerm)
//       return person.name.toLowerCase().includes(searchTerm)
//     }
      
//     );
//     setSearchResults(results);
//   }, [searchTerm]);

//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <ul>
//          {searchResults.map(item => (
//           <li>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default SearchBar





import React, { useContext,useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Row, Col, CardTitle, CardText, Card } from "reactstrap";
import { Link } from "react-router-dom";
import "./ProductList.css"

export const SearchBar = () => {
  function OpenModalPop(id) {
    console.log(id);
  }
  const { users } = useContext(GlobalContext);
  console.log("---",users)
 const [searchTerm, setSearchTerm] = React.useState("");
 const [searchResults, setSearchResults] = React.useState([]);
 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 React.useEffect(() => {
    const results = users.filter(person =>{
      console.log("per",person)
      return person.name.toLowerCase().includes(searchTerm)
    }
      
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
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
      </>
    </div>
  );
}
