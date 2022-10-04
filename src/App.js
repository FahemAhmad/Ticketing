import "./App.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import Navbar from "./components/Navbar";
import CreateUser from "./pages/CreateUser";
import Reports from "./pages/Reports";
import UploadFile from "./pages/UploadFile";

function App() {
  return (
    <>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/addTicket" element={<CreateTicket />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/uploadFile" element={<UploadFile />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
          <div style={{ flex: 1 }} />
          <footer
            style={{
              width: "100vw",
              padding: 10,
              backgroundColor: "#f1f7fc",
              borderTop: "1px solid black",

              textAlign: "center",
            }}
          >
            Ⓒ Copyright - 2022
          </footer>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
