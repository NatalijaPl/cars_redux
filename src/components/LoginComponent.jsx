import React from "react";

export default function LoginComponent({ handleLogin, data, setData }) {
  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>email address: </label>{" "}
          <input
            name="email"
            type="text"
            value={data}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>password: </label>{" "}
          <input
            name="password"
            type="password"
            value={data}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  );
}
