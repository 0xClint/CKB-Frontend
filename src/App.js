import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Create, Dashboard, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" exact element={<Create />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
