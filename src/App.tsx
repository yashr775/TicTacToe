import Box from "./components/Box";

function App() {
  return (
    <div className="bg-slate-900 h-screen w-screen pb-0.5">
      <div className="pb-0.5">
        <div className="flex justify-center ">
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
      </div>
    </div>
  );
}

export default App;
