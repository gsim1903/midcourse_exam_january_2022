import React from 'react'
import {Image} from 'semantic-ui-react'


const GHSearchDisplay = ({user}) => {
  return (
    <div>
      <h2 data-cy='userlogin'> {user.login}</h2>
      <Image data-cy='useravatar'> src={user.avatar_url}</Image>
      <h2 data-cy='userlink'> {user.login}</h2>
      </div>
  )
}

export default GHSearchDisplay