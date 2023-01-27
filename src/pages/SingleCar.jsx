import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectCars } from "../store/cars/selectors";
import { deleteCar, getCar } from "../store/cars/slice";

export const SingleCar = () => {
  const dispatch = useDispatch();
  const car = useSelector(selectCars);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCar(id));
  }, [id, dispatch]);
  const handleDeleteCar = () => {
    const response = prompt(
      "Are you sure you want to delete your car? If so, type 'yes' "
    );
    if (response !== "yes") {
      return;
    }
    dispatch(deleteCar(id));
    history.push("/cars");
  };
  return (
    <div>
      <p>single car: </p>
      <p>brand: {car.brand}</p>
      <p>model: {car.model}</p>
      <p>year: {car.year}</p>
      <p>max_speed: {car.max_speed}</p>
      <p>is_automatic: {car.is_automatic}</p>
      <p>engine: {car.engine}</p>
      <p>number_of_doors: {car.number_of_doors}</p>
      <br />
      <button onClick={handleDeleteCar}>delete car</button>
    </div>
  );
};
