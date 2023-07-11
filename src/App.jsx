import Enjoyable from "./components/Enjoyable";
import Familia from "./components/Familia";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Locally from "./components/Locally";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";

function App() {
  return (
    <div className="app container-fluid p-0">
      {/* the background */}
      <div className="bg position-absolute"></div>

      <Landing />
      <main className="body container-fluid p-0">

        <Enjoyable />
        <Locally />
        <Menu />
        <Familia />
        <Reservation />

      </main>

      <Footer />
    </div>
  );
}

export default App;
