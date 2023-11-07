import { useDispatch, useSelector } from "react-redux";
import { decrementWitchCheckingAction, increment } from "../../../app/feature/Counter/actions";

const Counter = () => {
  let { count } = useSelector((state) => state.counter);
  const dispath = useDispatch();
  return (
    <div>
      <button onClick={() => dispath(decrementWitchCheckingAction(1))}>-</button>
      <span> {count} </span>
      <button onClick={() => dispath(increment(1))}>+</button>
    </div>
  );
};

export default Counter;
