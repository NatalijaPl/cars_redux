import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../store/cars/slice";
import { SingleCar } from "./SingleCar";
import { selectCars } from "../store/cars/selectors";

export const Cars = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCars(id));
  }, [id, dispatch]);

  return (
    <div>
      <ul>
        {/* {cars.map((car) => (
          <li key={car.id}>
            <SingleCar
              id={car.id}
              brand={car.brand}
              model={car.model}
              year={car.year}
              director={car.director}
              max_speed={car.max_speed}
              is_automatic={car.is_automatic}
              engine={car.engine}
              number_of_doors={car.number_of_doors}
            />
          </li>
        ))} */}
        <ul>
          {cars.data.map((car) => (
            <SingleCar key={car.id} car={car} />
          ))}
        </ul>
      </ul>
    </div>
  );
};
