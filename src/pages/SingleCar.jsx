import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCar } from "../store/cars/selectors";
import { deleteCar, getCar } from "../store/cars/slice";
import { CarDeteils } from "../components/CarDetails";
import { getCarAction } from "../store/cars/slice";
import { deleteCarAction } from "../store/cars/slice";

export const SingleCar = () => {
  const dispatch = useDispatch();
  const car = useSelector(selectCar);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCarAction(id));
  }, [id, dispatch]);

  const handleDeleteCar = () => {
    dispatch(deleteCarAction(id));
    window.location.replace("/cars");
  };

  return (
    <CarDeteils
      id={car.id}
      brand={car.brand}
      model={car.model}
      year={car.year}
      max_speed={car.max_speed}
      is_automatic={car.is_automatic}
      engine={car.engine}
      number_of_doors={car.number_of_doors}
      handleDeleteCar={handleDeleteCar}
    />
  );
};
