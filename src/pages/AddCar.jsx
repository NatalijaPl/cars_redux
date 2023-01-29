import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectCars } from "../store/cars/selectors";
import { createCarAction, editCarAction } from "../store/cars/slice";

export const AddCar = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const retrievedCar = useSelector(selectCars);

  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    max_speed: "",
    is_automatic: "",
    engine: "",
    number_of_doors: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      if (!retrievedCar) {
        alert("You can edit only your own car");
        history.push("/cars");
        return;
      }
      dispatch(
        editCarAction({
          newCar: {
            carId: id,
            brand: newCar.brand,
            model: newCar.model,
            year: newCar.year,
            max_speed: newCar.max_speed,
            is_automatic: newCar.is_automatic,
            engine: newCar.engine,
            number_of_doors: newCar.number_of_doors,
          },
        })
      );
      history.push(`/cars/${retrievedCar.id}`);
    } else {
      dispatch(createCarAction(newCar));
      history.push("/cars");
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (id) {
      history.push(`/cars/${retrievedCar.id}`);
    } else {
      history.push("/cars");
    }
  };
  useEffect(() => {
    setNewCar({
      ...newCar,
    });
  }, []);

  useEffect(() => {
    if (id) {
      setNewCar(retrievedCar);
      if (!retrievedCar) {
        alert("you can edit only existing car");
        history.push("/cars");
        return;
      }
    }
  }, [id, history, retrievedCar]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{id ? "edit Car" : "create Car"}</h2>
        <label>
          brand:
          <input
            id="brand"
            type="text"
            required
            minLength={2}
            value={newCar.brand}
            onChange={(e) => {
              setNewCar({ ...newCar, brand: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          model:
          <input
            id="model"
            type="text"
            value={newCar.model}
            required
            minLength={2}
            onChange={(e) => {
              setNewCar({ ...newCar, model: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          year:
          <input
            id="year"
            type="number"
            required
            minLength={1920}
            maxLength={2023}
            value={newCar.year}
            onChange={(e) => {
              setNewCar({ ...newCar, year: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          max speed:
          <input
            id="max_speed"
            type="number"
            required
            minLength={20}
            maxLength={300}
            value={newCar.max_speed}
            onChange={(e) => {
              setNewCar({ ...newCar, max_speed: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          is automatic:
          <input
            id="is_automatic"
            type="number"
            required
            value={newCar.is_automatic}
            onChange={(e) => {
              setNewCar({ ...newCar, is_automatic: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          engine:
          <input
            id="engine"
            type="text"
            value={newCar.engine}
            required
            onChange={(e) => {
              setNewCar({ ...newCar, engine: e.target.value });
            }}
          />
        </label>
        <br />
        <br />
        <label>
          number of doors:
          <input
            id="number_of_doors"
            type="number"
            value={newCar.number_of_doors}
            required
            minLength={2}
            maxLength={5}
            onChange={(e) => {
              setNewCar({ ...newCar, number_of_doors: e.target.value });
            }}
          />
        </label>

        <br />
        <br />
        <button type="submit">{id ? "Edit" : "submit"}</button>
        <br />
        <br />
        <button onClick={handleCancel}>cancel</button>
      </form>
    </div>
  );
};
