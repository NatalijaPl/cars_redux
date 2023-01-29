import { call, put, all, fork, takeEvery } from "redux-saga/effects";
import { carService } from "../../services/CarService";
import { setCarAction, setCarsAction } from "./slice";

function* getAllCars() {
  try {
    const response = yield call(carService.getCars);
    yield put(setCarsAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getAllCarsSagaWatcher() {
  yield takeEvery("cars/getCarsAction", getAllCars);
}

function* getSingleCar({ payload }) {
  try {
    const response = yield call(carService.getCar, payload);
    yield put(setCarAction(response.data));
  } catch (err) {
    console.error(err);
  }
}

function* getSingleCarSagaWatcher() {
  yield takeEvery("cars/getCarAction", getSingleCar);
}

function* createNewCar({ payload }) {
  try {
    yield call(carService.createCar, payload);
  } catch (err) {
    console.error(err);
  }
}

function* getCreateCarSagaWatcher() {
  yield takeEvery("cars/createCarAction", createNewCar);
}

function* deleteSingleCar({ payload }) {
  try {
    yield call(carService.deleteCar, payload);
  } catch (err) {
    console.error(err);
  }
}

function* getDeleteSingleCarSagaWatcher() {
  yield takeEvery("cars/deleteCarAction", deleteSingleCar);
}

function* editSingleCar({ payload }) {
  try {
    yield call(carService.editCar, payload.id, payload.data);
  } catch (err) {
    console.error(err);
  }
}

function* getEditSingleCarSagaWatcher() {
  yield takeEvery("cars/editCarAction", editSingleCar);
}

export default function* rootMoviesSaga() {
  yield all([
    fork(getAllCarsSagaWatcher),
    fork(getSingleCarSagaWatcher),
    fork(getCreateCarSagaWatcher),
    fork(getDeleteSingleCarSagaWatcher),
    fork(getEditSingleCarSagaWatcher),
  ]);
}
