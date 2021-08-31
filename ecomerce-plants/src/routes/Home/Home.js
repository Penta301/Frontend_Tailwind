import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Logic from "./Logic";

import Cactus from "../../svgs/Cactus";
import Search from "../../svgs/Search";
import User from "../../svgs/User";
import Shoping from "../../svgs/Shoping";
import ArrowRight from "../../svgs/ArrowRight";
import ArrowUp from "../../svgs/ArrowUp";
import Facebook from "../../svgs/Facebook";
import Instagram from "../../svgs/Instgram";
import Twitter from "../../svgs/Twitter";

function Home({ data }) {
  const { index, setIndex } = Logic();

  return (
    <AnimateSharedLayout>
      <AnimatePresence initial={false}>
        <div
          className={`bg-gradient-to-r from-green-800 to-${data[index].color}-300`}
        >
          <header>
            <nav className="flex space-x-4 justify-between p-4 items-center">
              <div class="flex items-center w-40">
                <Cactus></Cactus>
                <p class="text-white font-extrabold hover:text-yellow-300">
                  Planet of Plants
                </p>
              </div>
              <div className="flex space-x-4 items-center ">
                <button className="text-white hover:text-yellow-400 font-bold">
                  Home
                </button>
                <span className="bg-white w-1.5 rounded-full h-1.5"></span>
                <button className="text-white hover:text-yellow-400 font-bold">
                  Categories
                </button>
                <span className="bg-white w-1.5 rounded-full h-1.5"></span>
                <button className="text-white hover:text-yellow-400 font-bold">
                  Sale %
                </button>
                <span className="bg-white w-1.5 rounded-full h-1.5"></span>
              </div>
              <div class="flex space-x-4 items-center">
                <div className="cursor-pointer hover:bg-yellow-300 p-2 rounded-full">
                  <Search></Search>
                </div>
                <div className="cursor-pointer hover:bg-yellow-300 p-2 rounded-full">
                  <User></User>
                </div>
                <div className="bg-yellow-300 p-2 rounded-full">
                  <Shoping></Shoping>
                </div>
              </div>
            </nav>
          </header>
          <section className="flex justify-between">
            <div className=" p-2 px-10 my-40">
              <h3 className="text-white font-extrabold">PLANTS</h3>
              <h1 className="text-white font-black text-9xl">
                {data[index].plant.toUpperCase()}
              </h1>
              <p className="text-white font-semibold my-2">
                {data[index].description}
              </p>
              <div className="flex justify-between border-2 rounded-full w-60 my-10">
                <button className="text-white font-bold mx-5 hover:text-yellow-300">
                  Shop Now
                </button>
                <div className="border-1 p-2 bg-yellow-300 rounded-full">
                  <ArrowRight />
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`flex overflow-hidden bg-${data[index].contrastColor}-300 rounded-tl-3xl`}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={data[index].img}
                alt={data[index].plant}
              />
              <div className="flex flex-col w-16 items-center justify-around">
                {data.map((item, number) => {
                  if (number === index) {
                    return (
                      <div
                        className=" flex items-center justify-center border-4 w-7 rounded-full h-7 border-white"
                        onClick={() => setIndex(number)}
                      >
                        <div className="bg-white w-2 rounded-full h-2"></div>
                      </div>
                    );
                  }
                  return (
                    <div
                      className="cursor-pointer flex items-center justify-center  w-7 rounded-full h-7 "
                      onClick={() => setIndex(number)}
                    >
                      <div className="bg-white w-2 rounded-full h-2"></div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </section>
          <footer className=" flex">
            <div className="flex items-center flex-1 justify-center">
              <ArrowUp></ArrowUp>
            </div>
            <img
              className="rounded-tl-3xl"
              src={data[index].companion}
              alt={data[index].plant}
            />
            <div className="bg-green-800 p-4 items-center flex flex-1 justify-center">
              <p className="text-white font-semibold">
                Call and receive the best attention from our employees
              </p>
            </div>
            <div className="bg-green-800 p-4 items-center flex flex-1 justify-center">
              <p className="text-white font-semibold">
                We have great professionals at your disposal
              </p>
            </div>
            <div className="flex bg-green-500 p-5 space-x-4 items-center flex-1 justify-center">
              <div className="cursor-pointer">
                <a href="https://www.instagram.com/p/CTCTJcDDl_E/">
                  <Facebook></Facebook>
                </a>
              </div>
              <div className="cursor-pointer">
                <a href="https://www.instagram.com/p/CTCTJcDDl_E/">
                  <Instagram></Instagram>
                </a>
              </div>
              <a href="https://www.instagram.com/p/CTCTJcDDl_E/">
                <div className="cursor-pointer">
                  <Twitter></Twitter>
                </div>
              </a>
            </div>
          </footer>
        </div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default Home;
