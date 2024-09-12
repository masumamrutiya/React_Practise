import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
  const params = useParams() 
  return (
    <h1>Profile No : {params.profilemap}</h1>
  )
}

export default Profile