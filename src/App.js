import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const name = useSelector((state) => state.userReducer.user);
  // console.log(name);

  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
