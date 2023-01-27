import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../store/auth/slice";
import { useHistory } from "react-router-dom";
import RegisterComponent from "../components/RegisterComponent";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleRegister(e) {
    e.preventDefault();
    dispatch(register(newUser));
    history.push("./cars");
  }

  return (
    <RegisterComponent
      handleRegister={handleRegister}
      newUser={newUser}
      setNewUser={setNewUser}
    />
  );
}
