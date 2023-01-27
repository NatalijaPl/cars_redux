import { call, put, takeLatest } from "redux-saga/effects";
import { carService } from "../../services/CarService";

function* handleGetCars(action) {
  try {
    const cars = yield call(carService.getCars, action.payload);
    yield put(setCars(cars));
  } catch (error) {
    alert(error.message);
  }
}

function* handleGetCar(action) {
  try {
    const car = yield call(carService.getCar, action.payload);
    yield put(setCar(car));
  } catch (error) {
    alert(error.message);
  }
}

function* handleCreateCar(action) {
  try {
    const newCar = yield call(carService.createCar, action.payload);
    yield put(setCarsWithNewCar(newCar));
  } catch (error) {
    alert("none of the fields should be blank");
  }
}

function* handleEditCar(action) {
  try {
    const car = yield call(
      carService.editCar,
      action.payload.newCar.carId,
      action.payload.newCar
    );
    yield put(setCarsWithNewCars(car));
  } catch (error) {
    alert("none of the fields should be blank");
  }
}

function* handleDeleteCar(action) {
  try {
    console.log(action);
    yield call(carService.deleteCar, action.payload);
    const cars = yield call(carService.getCars, 1, null, null);
    yield put(setCars(cars));
  } catch (error) {
    alert(error.message);
  }
}

export function* watchGetCars() {
  yield takeLatest(getCars.type, handleGetCars);
}

export function* watchGetCar() {
  yield takeLatest(getCar.type, handleGetCar);
}

export function* watchCreateCar() {
  yield takeLatest(createCar.type, handleCreateCar);
}

export function* watchEditCar() {
  yield takeLatest(editCar.type, handleEditCar);
}

export function* watchDeleteCar() {
  yield takeLatest(deleteCar.type, handleDeleteCar);
}
