import Minus from "../../SVGs/Minus";
import Plus from "../../SVGs/Plus";
import Basket from "../../SVGs/Basket";
import Logic from "./Logic";
import { useHistory } from "react-router-dom";

function Detail({ Data, DataUser, Index, Order, setOrder }) {
  const { handleAmount } = Logic();

  const history = useHistory();

  return (
    <>
      <div>
        <header>
          <nav className="flex items-center justify-between p-2">
            <div className="flex items-center gap-3 ml-10">
              <img
                src={DataUser[0].img}
                alt="UserImage"
                className="w-14 rounded-full"
              />
              <h3 className="tracking-wide">{DataUser[0].name}</h3>
            </div>
            <div
              className="mr-10 cursor-pointer p-4 rounded-full flex items-center justify-center hover:bg-yellow-500 transition ease-out duration-500"
              onClick={() => history.push("/")}
            >
              <Basket></Basket>
            </div>
          </nav>
        </header>
        <section className="flex flex-col items-center gap-3 lg:flex-row lg:mx-20 lg:p-4 lg:items-start lg:mb-16">
          <div className="flex justify-center items-center p-4">
            <img
              className="w-80 rounded-3xl shadow-2xl"
              src={Data[Index].img}
              alt={Data[Index].title}
            />
          </div>
          <div className="flex text-left items-center flex-col gap-5 mb-3 lg:p-4">
            <h1 className="font-bold text-5xl tracking-wide lg:">
              {Data[Index].title}
            </h1>
            <p className="w-80">{Data[Index].description}</p>
          </div>
        </section>
        <footer className="flex flex-col items-center h-full gap-10 mt-40">
          <div className="flex justify-between p-3 items-center mx-4 mt-1 w-full lg:max-w-screen-2xl">
            <div className="flex w-full justify-around">
              <div
                className="cursor-pointer"
                onClick={() => setOrder(handleAmount(Order - 1))}
              >
                <Minus></Minus>
              </div>
              <h2 className="font-bold text-3xl tracking-wide text-yellow-500">
                ${Data[Index].price * Order}
              </h2>
              <p className="font-semibold">{Order} order</p>
              <div
                className="cursor-pointer"
                onClick={() => setOrder(Order + 1)}
              >
                <Plus></Plus>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 mt-4">
            <button
              className="
           
            bg-yellow-500 p-4 rounded-full w-72 text-white font-extrabold text-2xl shadow-2xl hover:bg-green-500 transition ease-out duration-500"
            >
              ADD TO BASKET
            </button>
            <p className="tracking-wider">Get the second order in half price</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Detail;
