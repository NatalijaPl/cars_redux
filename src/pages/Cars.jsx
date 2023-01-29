import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarsAction } from "../store/cars/slice";
import { selectCars } from "../store/cars/selectors";
import { CarDeteils } from "../components/CarDetails";

export const Cars = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarsAction());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <CarDeteils
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
        ))}
      </ul>
    </div>
  );
};

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { makeSelectMovies } from "../store/movies/selector";
// import { getAllMoviesAction } from "../store/movies/slice";
// import { MovieDetails } from "../components/MovieDetails.component";
// import { redirectToEdit } from "../utils/redirect";

// export const MoviesPage = () => {
//   const movies = useSelector(makeSelectMovies);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllMoviesAction());
//   }, [dispatch]);

//   return (
//     <ul>
//       {movies.map((movie) => (
//         <li key={movie.id}>
//           <MovieDetails
//             id={movie.id}
//             title={movie.title}
//             director={movie.director}
//             imageUrl={movie.imageUrl}
//             duration={movie.duration}
//             releaseDate={movie.releaseDate}
//             genres={movie.genres}
//             linkHeading={true}
//             editMovie={redirectToEdit}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };
