import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const isAuth = WrappedComponent => props => {

  const {user} = useSelector(state=>state.auth);

  return(
    user ? (<Redirect to="/signin" />) : (<WrappedComponent {...props} />)
  )

}

export default isAuth;