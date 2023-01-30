import axios from "axios";

class CarService {
  async getCars() {
    return await axios.get("http://localhost:8000/api/cars");
  }
  async getCar(id) {
    return await axios.get(`http://localhost:8000/api/cars/${id}`);
  }
  async createCar(car) {
    await axios.post("http://localhost:8000/api/cars", car);
  }
  async editCar(id, car) {
    await axios.put(`http://localhost:8000/api/cars/${id}`, car);
  }
  async deleteCar(id) {
    await axios.delete(`http://localhost:8000/api/cars/${id}`);
  }
}

export const carService = new CarService();
