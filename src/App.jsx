import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div>
      <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar />
          <div id="main-content" className="flex-1 p-4">
            <Header />
            <Routes>
              {/* <Route path="*" element={<NotFound />} /> */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/error-400" element={<Error400 />} />
              <Route path="/error-401" element={<Error401 />} />
              <Route path="/error-403" element={<Error403 />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
