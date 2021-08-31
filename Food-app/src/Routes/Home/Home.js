import Lupe from "../../SVGs/Lupe";
import Map from "../../SVGs/Map";
import Arrowleft from "../../SVGs/ArrowLeft";
import ArrowRight from "../../SVGs/ArrowRight";
import Logic from "./Logic";

import { useHistory } from "react-router-dom";

function Home({ Data, setIndex, Index }) {
  const { handleClick } = Logic();

  const history = useHistory();

  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-1 justify-center">
        <nav className="flex items-center justify-center p-4">
          <div className="border-2 border-yellow-500 p-2 rounded-full flex gap-4 justify-around shadow-2xl lg:max-w-screen-lg lg:w-screen lg:justify-between">
            <input type="text" placeholder="Search" className="outline-none" />
            <Lupe></Lupe>
          </div>
        </nav>
      </header>
      <section className="mt-10 flex flex-col flex-1 shadow-2xl rounded-3xl p-4">
        <h2 className="font-extrabold text-2xl w-52 ml-10 lg:w-96 lg:text-4xl">
          The Best Food In Only 20 mins
        </h2>
        <div className="flex ml-10">
          <Map></Map>
          <p className="tracking-wide text-sm lg:text-2xl">
            940 S.Hickory Suite 655, Venice Beach, Ca.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center mt-20 h-full rounded-t-3xl flex-1 shadow-main-content">
        <h2 className="font-extrabold tracking-wider text-2xl mt-5 lg:text-5xl">
          {Data[Index].title}
        </h2>
        <p className="mt-4 tracking-wide text-sm mx-10 lg:text-lg lg:mx-20">
          {Data[Index].description}
        </p>
        <p className="font-bold text-3xl tracking-wide text-yellow-500 mb-5 lg:text-4xl">
          ${Data[Index].price}
        </p>
        <div className="p-4 bg-gradient-to-t from-yellow-200 overflow-hidden w-screen text-center">
          <div className="flex items-center justify-around ">
            <div
              className="bg-yellow-500 p-2 rounded-full cursor-pointer lg:p-5"
              onClick={() => {
                setIndex(handleClick(Index - 1, Data.length));
              }}
            >
              <Arrowleft></Arrowleft>
            </div>
            <img
              className="w-60 shadow-2xl rounded-3xl cursor-pointer lg:w-96"
              src={Data[Index].img}
              alt={Data[Index].title}
              onClick={() => history.push("/detail")}
            />
            <div
              className="bg-yellow-500 p-2 rounded-full cursor-pointer lg:p-5"
              onClick={() => {
                setIndex(handleClick(Index + 1, Data.length));
              }}
            >
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
