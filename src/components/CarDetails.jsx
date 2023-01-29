import { Link } from "react-router-dom";

export const CarDeteils = ({
  id,
  brand,
  model,
  year,
  max_speed,
  is_automatic,
  engine,
  number_of_doors,
}) => {
  return (
    <ul>
      <Link to={`/cars/${id}`}>{brand}</Link>
      <p>model: {model}</p>
      <p>year: {year}</p>
      <p>max speed: {max_speed}</p>
      <p>is automatic: {is_automatic}</p>
      <p>engine: {engine}</p>
      <p> number of doors: {number_of_doors}</p>
    </ul>
  );
};
