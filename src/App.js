import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Subscription from "./pages/Subscription";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Subscription />} />
        {/* component is not using anymore -> change to element */}
        {/* <Route path="/Home" component={subscription} /> */}
      </Routes>
    </Router>
  );
}

export default App;
