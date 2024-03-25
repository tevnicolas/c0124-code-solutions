type Car = {
  make: string;
  model: string;
  year: number;
  mileage: number;
};
type Mileage = {
  averageMileage: number;
  highestMileageCar: Car;
  lowestMileageCar: Car;
  totalMileage: number;
};

export function analyzeCarMileage(cars: Car[]): Mileage {
  return cars.reduce(
    (acc, curr, i) => {
      acc.totalMileage += curr.mileage;
      if (i === cars.length - 1) {
        acc.averageMileage = acc.totalMileage / cars.length;
        acc.averageMileage.toFixed(2);
      }
      if (acc.highestMileageCar.mileage < curr.mileage) {
        acc.highestMileageCar = curr;
      }
      if (acc.lowestMileageCar.mileage > curr.mileage) {
        acc.lowestMileageCar = curr;
      }
      return acc;
    },
    {
      averageMileage: 0,
      highestMileageCar: cars[0],
      lowestMileageCar: cars[0],
      totalMileage: 0,
    }
  );
}
