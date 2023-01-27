import React from "react";

export default function RegisterComponent({
  handleRegister,
  newUser,
  setNewUser,
}) {
  return (
    <div>
      <h2>register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>name: </label>{" "}
          <input
            name="name"
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>email address: </label>{" "}
          <input
            name="email"
            type="text"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label>password: </label>{" "}
          <input
            name="password"
            type="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </div>
        <br />
        <button type="submit">register</button>
      </form>
    </div>
  );
}
