import { Route, Routes } from "react-router-dom";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./assets/Dashboard/DashBoard";
import MyAppointments from "./assets/Dashboard/MyAppointments";
import MyReview from "./assets/Dashboard/MyReview";
import AllUsers from "./assets/Dashboard/AllUsers";
import RequireAdmin from "./Pages/Shared/RequireAdmin";
import AddDoctor from "./Pages/Appointment/AddDoctor";
import ManageDoctors from "./Pages/Appointment/ManageDoctors";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/appointment" element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="/dashboard/myreview" element={<MyReview></MyReview>}></Route>
          <Route path="/dashboard/allusers"
            element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}>
          </Route>
          <Route path="/dashboard/addDoctor"
            element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}>
          </Route>
          <Route path="/dashboard/manageDoctors"
            element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}>
          </Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
