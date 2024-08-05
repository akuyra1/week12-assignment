import React from "react";
//import the SignIn component
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <>
      <div className="container">
        <h1>This is Sign Up page</h1>
      </div>
      <SignUp />
    </>
  );
};

export default SignUpPage;
