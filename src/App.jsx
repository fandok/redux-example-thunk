import { useDispatch, useSelector } from "react-redux";
import { addToppings } from "./pizzaSlice";
import { useEffect } from "react";
import { getCars } from "./carSlice";

const App = () => {
  const carList = useSelector((state) => state.car.carList);
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <h1>Car</h1>
      {carList.map((car) => (
        <h3 key={car.id}>{car.name}</h3>
      ))}
      <h1>Pizza</h1>
      {pizza.toppings.map((toppings) => (
        <div key={toppings}>{toppings}</div>
      ))}
      <button
        onClick={() => {
          dispatch(addToppings("tomato"));
        }}
      >
        add tomato
      </button>
    </>
  );
};

export default App;
