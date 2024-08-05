import React from 'react'
//import the SignIn component
import { SignIn } from '@clerk/nextjs'


const SignInPage = () => {
  return (
    <>
      <div className='container'>
          <h1>This is the sign in page</h1>
      </div>
      <SignIn />
    </>
  )
}

export default SignInPage