
import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

 const SearchBar = () => {
    const { users } = useContext(GlobalContext);

  const [teams, setTeams] = React.useState(users);
  const [search, setSearch] = React.useState("");
console.log("search",users)
  return (
    <div>
      <input
        onChange={e => {
          const test = teams.filter(team => {
            return team.name.toLowerCase().includes(e.target.value.toLowerCase());
          });
          console.log("test: ", test);

          // uncomment line below and teams is logged as I want
          setTeams(test);
          setSearch(e.target.value);
        }}
        type="text"
        value={search}
      />
      {teams.map(team => (
        <p>{team.name}</p>
      ))}
    </div>
  );
}

export default SearchBar


