import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import { AddCar } from "./pages/AddCar";
import { Cars } from "./pages/Cars";
import { SingleCar } from "./pages/SingleCar";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Cars />
        </Route>
        <Route path="/cars/:id">
          <SingleCar />
        </Route>
        <Route path="/add">
          <AddCar />
          <Route exact path="/edit/:carId">
            <AddCar />
          </Route>
        </Route>
        <Route path="/login">
          <LoginComponent />
        </Route>
        <Route path="/register">
          <RegisterComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
