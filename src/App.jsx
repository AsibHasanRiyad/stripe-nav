import Banner from "./components/Banner";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 z-10 ">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-40 z-50">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
};

export default App;
