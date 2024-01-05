import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
      </div>
      <div className=" mt-96 h-screen"></div>
    </div>
  );
};

export default App;
