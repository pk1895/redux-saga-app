import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      <p>Hello World</p>
      {/* <p>{name}</p> */}
    </div>
  );
}

export default App;
