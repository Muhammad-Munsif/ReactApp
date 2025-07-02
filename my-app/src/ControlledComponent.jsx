import React, { useState } from "react";

const ControlledComponent = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clearDate = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form action="">
        <label>Name :</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your first name"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          placeholder="Enter your last name"
          onChange={(event) => setLastName(event.target.value)}
        />
        <br />
        <br />
        <label>Email :</label>
        <input
          type="email"
          value={email}
          placeholder="example@gmail.com"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <label>Password :</label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
      </form>
      <button>Submit Data</button>
      <button onClick={clearDate}>Clear Data</button>
      <h1>{name}</h1>
      <h1>{lastName}</h1>
      <h1>{email}</h1>
      <h1>{password}</h1>
    </div>
  );
};

export default ControlledComponent;
