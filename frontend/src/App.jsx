import React from "react";
import { useQuery, gql } from '@apollo/client'

const GET_USERS = gql`
  {
    users {
      id
      name
      password
      username
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return 'Loading....'
  if (error) return `Error ${error.message}`

  return (
    <div className="App">
      {
        data.users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <h5>{user.password}</h5>
            <h5>{user.username}</h5>
          </div>
        ))
      }
    </div>
  );
}

export default App;
