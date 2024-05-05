import { useState } from "react";
// import createUser from '../utilities/user-services'
import { signUp } from "../../utilities/users-api";

function SignUp() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(evt) {
    setState({ ...state, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signUp(state);
      alert("sign up successful");
    } catch (error) {
      console.log(error);
      alert("An error occurred. Too bad.");
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={state.name}
          onChange={handleChange}
        ></input>
        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={state.email}
          onChange={handleChange}
        ></input>
        <label>Password</label>
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={state.password}
          onChange={handleChange}
        ></input>
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}

export default SignUp;
