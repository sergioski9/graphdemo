import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

const GetUser = (id) => {
  return (
        gql`
      {
        user(id: ${id}) {
        id
        name
        username
        password
        }
      }
    `
  )
}


function User() {
  const [ id, setId ] = useState(18)
  const { loading, error, data } = useQuery(GetUser(id))

  if (loading) return 'Loading....'
  if (error) return `Error ${error.message}`

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        console.log(event.nativeEvent.path[0][0].value)
        setId(parseInt(Number(event.nativeEvent.path[0][0].value)))
        }}>
        <input type="text" />
        <input type='submit' value='click aqui' />
      </form>
      <div key={data.user.id}>
        <h3>{data.user.name}</h3>
        <h5>{data.user.password}</h5>
        <h5>{data.user.username}</h5>
      </div>
    </div>
  )
}

export default User
