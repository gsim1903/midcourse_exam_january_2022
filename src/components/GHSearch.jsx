import React from 'react'
import { Button, Input } from 'semantic-ui-react'

const GHSearch = () => {
  return (
    <>
      <Input 
      data-cy="search-box"
      type="text" name="search" placeholder="Input Git Hub username"/>
      <Button name="search">Search</Button>
    </>
  )
}

export default GHSearch
