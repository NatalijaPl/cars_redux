import axios from "axios";

class CarService {
  async getCars() {
    return await axios.get("http://localhost:8000/api/cars");
  }
  async getCar(id) {
    return await axios.get(`http://localhost:8000/api/cars/${id}`);
  }
  async createCar(movie) {
    await axios.post("http://localhost:8000/api/cars", movie);
  }
  async editCar(id, movie) {
    await axios.put(`http://localhost:8000/api/cars/${id}`, movie);
  }
  async deleteCar(id) {
    await axios.delete(`http://localhost:8000/api/cars/${id}`);
  }
}

export const carService = new CarService();
