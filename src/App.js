import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import Navbar from "./components/Navbar";
import CreateUser from "./pages/CreateUser";
import Reports from "./pages/Reports";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addTicket" element={<CreateTicket />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
