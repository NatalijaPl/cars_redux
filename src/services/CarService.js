import HttpService from "./HttpService";

class CarService extends HttpService {
  getCars = async () => {
    const { data } = await this.client.get(`/cars`);
    console.log(data);
    return data;
  };

  getCar = async (id) => {
    const { data } = await this.client.get(`/cars/${id}`);
    console.log(data);
    return data;
  };

  createCar = async (carData) => {
    const { data } = await this.client.post("/cars", carData);
    return data;
  };

  editCar = async (carId, car) => {
    const { data } = await this.client.put(`/cars/${carId}`, car);
    return data;
  };

  deleteCar = async (car) => {
    const { data } = await this.client.delete(`/cars/${car}`);
    return data;
  };
}
export const carService = new CarService();
