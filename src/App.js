import Footer from "./components/Footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "./components/pages/inc/Login";
import Signup from "./components/pages/inc/Signup";
import RegistrationForm from "./components/pages/inc/RegistrationForm";
import UserHome from "./components/pages/userpages/UserHome";
import AdminHome from "./components/pages/adminpages/AdminHome";
import UserTable from "./components/tables/UserTable";
import AdminLogin from "./components/pages/adminpages/Login";
import ViewUser from "./components/pages/adminpages/ViewUsers";
import UpdateUser from "./components/pages/adminpages/UpdateUser";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<RegistrationForm />} />
          {/* <Route path="/table" element={<UserTable />} /> */}
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/userTable" element={<UserTable />} />
          <Route path="/view-user/:id" element={<ViewUser />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
