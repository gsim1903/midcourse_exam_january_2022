import React from 'react'
import {Card, Image} from 'semantic-ui-react'


const GHSearchDisplay = ({user}) => {
  return (
    <Card>
    <Image data-cy='useravatar'src={user.avatar_url} wrapped ui={false} as="a" href={user.html_url} target={user.html_url} />
      <Card.Header data-cy='userlogin'> User -  {user.login} </Card.Header>
      <h2 data-cy='userlink'> </h2>
      </Card>
  )
}

export default GHSearchDisplay
