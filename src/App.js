import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    // <Login />

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
