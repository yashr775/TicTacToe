/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Box from "./components/Box";
import cross_icon from "./assets/cross.png";
import circle_icon from "./assets/circle.png";

const App = () => {
  // const data = ["", "", "", "", "", "", "", "", ""];
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  let [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  let titleRef = useRef("!");

  const toggle = async (e: React.MouseEvent<HTMLDivElement>, num: number) => {
    if (lock || data[num] !== "") {
      return 0;
    }

    const newData = [...data];

    if (count % 2 === 0) {
      e.currentTarget.innerHTML = `<img src='${cross_icon}' alt='X'/>`;
      newData[num] = "x";
      setCount(++count);
    } else {
      e.currentTarget.innerHTML = `<img src='${circle_icon}' alt='0'/>`;
      newData[num] = "0";
      setCount(++count);
    }
    setData(newData);
  };

  useEffect(() => {
    checkWin();
  }, [data]);

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[0]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[6]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[0]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[2]);
    }
    console.log("check win called");
  };

  const won = (winner: string) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations  <img src=${cross_icon}>  won`;
    } else {
      titleRef.current.innerHTML = `Congratulations <img   src=${circle_icon}> won`;
    }
  };

  const reset = () => {
    setLock(false);
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    document.querySelectorAll(".box").forEach((box) => (box.innerHTML = ""));
    if (titleRef)
      titleRef.current.innerHTML = `<h1
    className="text-white flex justify-center pt-60 text-5xl"
    ref={titleRef}
  >
    Tic Tac Toe Game in React
  </h1>`;
  };

  return (
    <div className="bg-slate-900 h-screen w-screen">
      <h1
        className="text-white flex justify-center pt-60 text-5xl"
        ref={titleRef}
      >
        Tic Tac Toe Game in React
      </h1>
      <div className="flex justify-center pt-10">
        <Box onClick={(e) => toggle(e, 0)} />
        <Box
          onClick={(e) => {
            return toggle(e, 1);
          }}
        />
        <Box
          onClick={(e) => {
            toggle(e, 2);
          }}
        />
      </div>
      <div className="flex justify-center">
        <Box
          onClick={(e) => {
            toggle(e, 3);
          }}
        />
        <Box
          onClick={(e) => {
            toggle(e, 4);
          }}
        />
        <Box
          onClick={(e) => {
            toggle(e, 5);
          }}
        />
      </div>
      <div className="flex justify-center">
        <Box
          onClick={(e) => {
            toggle(e, 6);
          }}
        />
        <Box
          onClick={(e) => {
            toggle(e, 7);
          }}
        />
        <Box
          onClick={(e) => {
            toggle(e, 8);
          }}
        />
      </div>
      <div className="flex justify-center pt-4 ">
        <button
          className="text-green-400 bg-slate-500 p-4 rounded-3xl hover:text-white hover:p-6 hover:rounded-3xl w-60 "
          onClick={reset}
        >
          {" "}
          RESET
        </button>
      </div>
    </div>
  );
};

export default App;
