import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { useSelector } from "react-redux";
import Homepage from "./pages/Homepage";
import Auth from "./pages/Auth";
import Register from "./pages/Register";
import Home from "./pages/Home";
function App() {
  const darktheme = useSelector((state) => state.theme); // store ka total reducer object

  return (
    <div
      className={`min-h-screen ${
        darktheme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Homepage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/:id" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
