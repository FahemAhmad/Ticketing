import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateTicket from "./pages/Dashboard/components/CreateTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addTicket" element={<CreateTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
