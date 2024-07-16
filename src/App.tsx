import Box from "./components/Box";

function App() {
  return (
    <div className="bg-slate-900 h-screen w-screen">
      <h1 className="text-white flex justify-center pt-60 text-5xl">
        Tic Tac Toe Game in React
      </h1>
      <div className="flex justify-center pt-10">
        <Box />
        <Box />
        <Box />
      </div>
      <div className="flex justify-center">
        <Box />
        <Box />
        <Box />
      </div>
      <div className="flex justify-center">
        <Box />
        <Box />
        <Box />
      </div>
      <div className="flex justify-center pt-4 ">
        <button className="text-green-400 bg-slate-500 p-4 rounded-3xl hover:text-white hover:p-6 hover:rounded-3xl w-60 ">
          {" "}
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;
