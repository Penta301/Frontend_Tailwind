import Detail from "./Routes/Detail/Detail";
import DataUser from "./DataUser";
import Data from "./Data";
import Home from "./Routes/Home/Home";
import Logic from "./Logic";

import { Route } from "react-router-dom";

function App() {
  const { index, setIndex, order, setOrder } = Logic();

  return (
    <div>
      <Route path="/" exact>
        <Home Data={Data} Index={index} setIndex={setIndex}></Home>
      </Route>
      <Route path="/detail">
        <Detail
          DataUser={DataUser}
          Data={Data}
          Index={index}
          Order={order}
          setOrder={setOrder}
        />
      </Route>
    </div>
  );
}

export default App;
