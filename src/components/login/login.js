import { useState } from "react";

const Login = () => {

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })

  const onChange = (element) => {
    setUserData((prevState) => ({...prevState, [element.target.name]: element.target.value}))
  }

  const Login = (element) => {
    element.preventDefault()

    //create post request to back end here
  }

  return (
    <form className="login-form" onSubmit={element => Login(element)}>
      <strong>Enter your login details!</strong>
      <br/>
      <input type="text"
        name="username"
        placeholder="Username"
        onChange={element => onChange(element)}/>
      <br/>
      <input type="password"
        name="password"
        placeholder="Password"
        onChange={element => onChange(element)}/>
      <br/>
      <input type="submit" className="button"/>
    </form>
  );
}

export default Login;