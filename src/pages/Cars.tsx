import { useEffect, useState } from "react";
import { easeIn, motion } from "framer-motion";
type Car = {
  make: string;
  model: string;
  year: number;
  fuel_type: string;
  drive: string;
  cylinders?: number;
  class?: string;
};

const Cars = () => {
  const brands = ["Mercedes", "BMW", "Audi", "Toyota"];
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      brands.map((brand) =>
        fetch(`https://api.api-ninjas.com/v1/cars?make=${brand}`, {
          headers: { "X-Api-Key": "P6KoXpc3oAe+nTrDjd9JJQ==TGIamaRcpEspSnfi" },
        }).then((res) => res.json())
      )
    )
      .then((results) => {
        const allCars = results.flat();
        setCars(allCars);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-neutral-900 flex justify-center items-center">
        <p className="text-center text-xl text-gray-500   ">Ładowanie...</p>
      </div>
    );
  }

  return (
    <div className="p-8  min-h-screen bg-neutral-950">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-gray-100 text-center "
      >
        Dostępne Samochody 🚗
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx / 4, ease: easeIn }}
            key={`${car.make}-${car.model}-${idx}`}
            className="bg-black rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {car.make} {car.model}
            </h3>
            <p className="text-gray-100 mb-1">
              Rok: {car.year} — Klasa: {car.class || "–"}
            </p>
            <p className="text-gray-100 mb-1">
              Paliwo: {car.fuel_type}, Napęd: {car.drive}
            </p>
            {car.cylinders && (
              <p className="text-gray-100">Cylindry: {car.cylinders}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
