import Banner from "./components/Banner";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.ibb.co/FHy1DgY/Firefly-20240105224119.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" min-h-screen "
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-40 z-50">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
};

export default App;
