import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const withAuth = WrappedComponent => props => {

  const {user} = useSelector(state=>state.auth);

  return(
    user ? (<WrappedComponent {...props} />) : (<Redirect to="/signin" />)
  )

}

export default withAuth;