import * as userSagas from "./user/sagas";
import * as carsSagas from "./cars/sagas";

const sagas = { ...userSagas, ...carsSagas };

export default sagas;
