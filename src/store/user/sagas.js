import { call, takeLatest } from "redux-saga/effects";
import { login, logout, register } from "./slice";
import { authService } from "../../services/AuthService";

function* handleRegister(action) {
  try {
    yield call(authService.register, action.payload);
  } catch (error) {
    alert("Invalid input data");
    console.error(error);
  }
}

function* handleLogin(action) {
  try {
    yield call(authService.login, action.payload);
  } catch (error) {
    alert(
      "Password must contain at least one number and at least 8 or more characters!"
    );
    console.error(error);
  }
}

function* handleLogout() {
  try {
    yield call(authService.logout);
  } catch (error) {
    alert("Can`t logout as a guest");
  }
}

export function* watchLogin() {
  yield takeLatest(login.type, handleLogin);
}

export function* watchLogout() {
  yield takeLatest(logout.type, handleLogout);
}

export function* watchRegister() {
  yield takeLatest(register.type, handleRegister);
}
