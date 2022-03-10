import React, { useState } from 'react'
import axios from 'axios'
import { Button, Input } from 'semantic-ui-react'
import GHSearchDisplay from './GHSearchDisplay'

const GHSearch = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setsearchTerm] = useState([])

  const fetchUsers = async () => {
    const response = await axios.get(
      'https://api.github.com/search/users?', 
      { params: {
           accept: 'application/vnd.github.v3+json',
          q: `${searchTerm}`
        },
      },
    )

    setUsers(response.data.items)
  }

  const gitList = users.map((user) => {
    return (
      <li key={user.id}>
        <GHSearchDisplay user={user} />
      </li>
    )
  })

  return (
    <>
      <Input
        data-cy="search-box"
        type="text"
        name="search"
        placeholder="Input Git Hub username"
        onChange={(x) => setsearchTerm(x.target.value)}
      />
      <Button
        data-cy="search-button"
        name="search"
        onClick={() => fetchUsers()}
      >
        Search
      </Button>
      <ul data-cy="gitlist">{gitList}</ul>
    </>
  )
}

export default GHSearch
