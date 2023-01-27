import { useDispatch } from "react-redux";
import { login } from "../store/auth/slice";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import LoginComponent from "../components/LoginComponent";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    dispatch(login(data));
    console.log("Success!");
    history.push("/cars");
  }

  return (
    <LoginComponent handleOnLogin={handleLogin} data={data} setData={setData} />
  );
}
